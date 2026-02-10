"""
API для работы с промо-акциями
"""
import json
import os
from datetime import datetime
import psycopg2
from psycopg2.extras import RealDictCursor

def get_user_from_token(cur, token: str):
    """Получение пользователя по токену сессии"""
    if not token:
        return None
    
    cur.execute(
        "SELECT u.id, u.email, u.full_name FROM users u "
        "JOIN user_sessions s ON u.id = s.user_id "
        "WHERE s.session_token = %s AND s.expires_at > CURRENT_TIMESTAMP AND u.is_active = true",
        (token,)
    )
    return cur.fetchone()

def handler(event: dict, context) -> dict:
    """
    Обработчик запросов для промо-акций
    
    GET /promotions - получить все активные промо
    GET /promotions/user - получить промо для авторизованного пользователя
    POST /promotions/view - отметить промо как просмотренное
    GET /promotions/statistics - статистика по промо (для админа)
    """
    method = event.get('httpMethod', 'GET')
    path = event.get('path', '/')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        # Получение токена
        token = event.get('headers', {}).get('x-authorization', '').replace('Bearer ', '')
        user = get_user_from_token(cur, token) if token else None
        
        if method == 'GET':
            # Получение всех активных промо
            if path.endswith('/promotions') or path == '/':
                query_params = event.get('queryStringParameters') or {}
                casino_name = query_params.get('casino')
                bonus_type = query_params.get('type')
                limit = int(query_params.get('limit', 50))
                offset = int(query_params.get('offset', 0))
                
                query = """
                    SELECT id, casino_name, title, description, promo_code, bonus_amount, 
                           bonus_type, valid_from, valid_until, terms_and_conditions,
                           is_active, is_exclusive, image_url, casino_url, created_at
                    FROM promotions 
                    WHERE is_active = true AND (valid_until IS NULL OR valid_until > CURRENT_TIMESTAMP)
                """
                params = []
                
                if casino_name:
                    query += " AND casino_name = %s"
                    params.append(casino_name)
                
                if bonus_type:
                    query += " AND bonus_type = %s"
                    params.append(bonus_type)
                
                query += " ORDER BY is_exclusive DESC, created_at DESC LIMIT %s OFFSET %s"
                params.extend([limit, offset])
                
                cur.execute(query, params)
                promotions = [dict(row) for row in cur.fetchall()]
                
                # Если пользователь авторизован, добавляем инфо о просмотрах
                if user:
                    promo_ids = [p['id'] for p in promotions]
                    if promo_ids:
                        cur.execute(
                            "SELECT promotion_id, viewed_at, clicked FROM user_promotions_viewed WHERE user_id = %s AND promotion_id = ANY(%s)",
                            (user['id'], promo_ids)
                        )
                        viewed = {row['promotion_id']: dict(row) for row in cur.fetchall()}
                        
                        for promo in promotions:
                            if promo['id'] in viewed:
                                promo['viewed'] = True
                                promo['viewed_at'] = viewed[promo['id']]['viewed_at']
                                promo['clicked'] = viewed[promo['id']]['clicked']
                            else:
                                promo['viewed'] = False
                
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'promotions': promotions, 'total': len(promotions)}, default=str)
                }
            
            # Получение промо для пользователя (персонализированное)
            elif 'user' in path:
                if not user:
                    return {
                        'statusCode': 401,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Wymagana autoryzacja'})
                    }
                
                # Получаем подписки пользователя
                cur.execute("SELECT casino_name, notify_all FROM user_subscriptions WHERE user_id = %s", (user['id'],))
                subscription = cur.fetchone()
                
                # Получаем промо
                query = """
                    SELECT p.id, p.casino_name, p.title, p.description, p.promo_code, p.bonus_amount,
                           p.bonus_type, p.valid_from, p.valid_until, p.terms_and_conditions,
                           p.is_active, p.is_exclusive, p.image_url, p.casino_url, p.created_at,
                           CASE WHEN upv.id IS NOT NULL THEN true ELSE false END as viewed,
                           upv.viewed_at, upv.clicked
                    FROM promotions p
                    LEFT JOIN user_promotions_viewed upv ON p.id = upv.promotion_id AND upv.user_id = %s
                    WHERE p.is_active = true 
                    AND (p.valid_until IS NULL OR p.valid_until > CURRENT_TIMESTAMP)
                """
                params = [user['id']]
                
                # Если пользователь подписан на конкретное казино
                if subscription and not subscription['notify_all'] and subscription['casino_name']:
                    query += " AND p.casino_name = %s"
                    params.append(subscription['casino_name'])
                
                query += " ORDER BY p.is_exclusive DESC, upv.viewed_at IS NULL DESC, p.created_at DESC"
                
                cur.execute(query, params)
                promotions = [dict(row) for row in cur.fetchall()]
                
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'promotions': promotions}, default=str)
                }
        
        elif method == 'POST':
            # Отметить промо как просмотренное
            if 'view' in path:
                if not user:
                    return {
                        'statusCode': 401,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Wymagana autoryzacja'})
                    }
                
                body = json.loads(event.get('body', '{}'))
                promotion_id = body.get('promotion_id')
                clicked = body.get('clicked', False)
                
                if not promotion_id:
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Brak promotion_id'})
                    }
                
                # Вставка или обновление
                cur.execute(
                    """
                    INSERT INTO user_promotions_viewed (user_id, promotion_id, clicked) 
                    VALUES (%s, %s, %s)
                    ON CONFLICT (user_id, promotion_id) 
                    DO UPDATE SET viewed_at = CURRENT_TIMESTAMP, clicked = %s
                    """,
                    (user['id'], promotion_id, clicked, clicked)
                )
                conn.commit()
                
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'message': 'Promocja oznaczona'})
                }
        
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Endpoint nie znaleziony'})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Błąd serwera: {str(e)}'})
        }
    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()
