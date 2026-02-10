"""
API для регистрации и авторизации пользователей
"""
import json
import os
import hashlib
import secrets
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor

def hash_password(password: str) -> str:
    """Хеширование пароля с солью"""
    salt = secrets.token_hex(16)
    pwd_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
    return f"{salt}${pwd_hash.hex()}"

def verify_password(password: str, password_hash: str) -> bool:
    """Проверка пароля"""
    try:
        salt, pwd_hash = password_hash.split('$')
        check_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000)
        return check_hash.hex() == pwd_hash
    except:
        return False

def generate_session_token() -> str:
    """Генерация безопасного токена сессии"""
    return secrets.token_urlsafe(32)

def handler(event: dict, context) -> dict:
    """
    Обработчик запросов авторизации и регистрации
    
    POST /register - регистрация нового пользователя
    POST /login - авторизация пользователя
    POST /logout - выход из системы
    GET /me - получение информации о текущем пользователе
    """
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Authorization, Authorization',
                'Access-Control-Max-Age': '86400',
                'Access-Control-Allow-Credentials': 'true'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    # Получаем путь из url или queryStringParameters
    url = event.get('url', '')
    query_params = event.get('queryStringParameters', {}) or {}
    action = query_params.get('action', '')
    
    # Если в url есть путь, используем его
    if '?' in url:
        path = url.split('?')[0]
    else:
        path = url
    
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            
            # Регистрация (проверяем path или action)
            if 'register' in path or action == 'register' or 'register' in url:
                email = body.get('email', '').lower().strip()
                password = body.get('password', '')
                full_name = body.get('full_name', '').strip()
                
                if not email or not password:
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Email i hasło są wymagane'}),
                        'isBase64Encoded': False
                    }
                
                if len(password) < 6:
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Hasło musi mieć minimum 6 znaków'}),
                        'isBase64Encoded': False
                    }
                
                # Проверка существования email
                cur.execute("SELECT id FROM users WHERE email = %s", (email,))
                if cur.fetchone():
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Ten email jest już zarejestrowany'}),
                        'isBase64Encoded': False
                    }
                
                # Создание пользователя
                password_hash = hash_password(password)
                cur.execute(
                    "INSERT INTO users (email, password_hash, full_name) VALUES (%s, %s, %s) RETURNING id, email, full_name, created_at",
                    (email, password_hash, full_name)
                )
                user = dict(cur.fetchone())
                
                # Создание сессии
                session_token = generate_session_token()
                expires_at = datetime.now() + timedelta(days=30)
                ip_address = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
                user_agent = event.get('headers', {}).get('user-agent', '')
                
                cur.execute(
                    "INSERT INTO user_sessions (user_id, session_token, expires_at, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s)",
                    (user['id'], session_token, expires_at, ip_address, user_agent)
                )
                
                # Создание подписки по умолчанию (на все промо)
                cur.execute(
                    "INSERT INTO user_subscriptions (user_id, notify_all) VALUES (%s, true)",
                    (user['id'],)
                )
                
                conn.commit()
                
                return {
                    'statusCode': 201,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                        'X-Set-Cookie': f'session_token={session_token}; Path=/; Max-Age=2592000; SameSite=Lax; Secure'
                    },
                    'body': json.dumps({
                        'user': {
                            'id': user['id'],
                            'email': user['email'],
                            'full_name': user['full_name'],
                            'created_at': user['created_at'].isoformat()
                        },
                        'session_token': session_token
                    }, default=str),
                    'isBase64Encoded': False
                }
            
            # Авторизация
            elif 'login' in path or action == 'login' or 'login' in url:
                email = body.get('email', '').lower().strip()
                password = body.get('password', '')
                
                if not email or not password:
                    return {
                        'statusCode': 400,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Email i hasło są wymagane'}),
                        'isBase64Encoded': False
                    }
                
                # Поиск пользователя
                cur.execute("SELECT id, email, password_hash, full_name, is_active FROM users WHERE email = %s", (email,))
                user = cur.fetchone()
                
                if not user or not verify_password(password, user['password_hash']):
                    return {
                        'statusCode': 401,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Nieprawidłowy email lub hasło'}),
                        'isBase64Encoded': False
                    }
                
                if not user['is_active']:
                    return {
                        'statusCode': 403,
                        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Konto zostało zablokowane'}),
                        'isBase64Encoded': False
                    }
                
                # Создание сессии
                session_token = generate_session_token()
                expires_at = datetime.now() + timedelta(days=30)
                ip_address = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
                user_agent = event.get('headers', {}).get('user-agent', '')
                
                cur.execute(
                    "INSERT INTO user_sessions (user_id, session_token, expires_at, ip_address, user_agent) VALUES (%s, %s, %s, %s, %s)",
                    (user['id'], session_token, expires_at, ip_address, user_agent)
                )
                
                # Обновление времени последнего входа
                cur.execute("UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = %s", (user['id'],))
                
                conn.commit()
                
                user_dict = dict(user)
                user_dict.pop('password_hash')
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                        'X-Set-Cookie': f'session_token={session_token}; Path=/; Max-Age=2592000; SameSite=Lax; Secure'
                    },
                    'body': json.dumps({
                        'user': user_dict,
                        'session_token': session_token
                    }, default=str),
                    'isBase64Encoded': False
                }
            
            # Выход
            elif 'logout' in path or action == 'logout' or 'logout' in url:
                token = event.get('headers', {}).get('x-authorization', '').replace('Bearer ', '')
                if token:
                    cur.execute("UPDATE user_sessions SET expires_at = CURRENT_TIMESTAMP WHERE session_token = %s", (token,))
                    conn.commit()
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'X-Set-Cookie': 'session_token=; Path=/; Max-Age=0'
                    },
                    'body': json.dumps({'message': 'Wylogowano pomyślnie'}),
                    'isBase64Encoded': False
                }
        
        # Получение информации о текущем пользователе
        elif method == 'GET' and ('me' in path or action == 'me' or 'me' in url):
            token = event.get('headers', {}).get('x-authorization', '').replace('Bearer ', '')
            
            if not token:
                return {
                    'statusCode': 401,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Brak tokenu autoryzacji'}),
                    'isBase64Encoded': False
                }
            
            # Проверка токена
            cur.execute(
                "SELECT u.id, u.email, u.full_name, u.created_at, u.last_login FROM users u "
                "JOIN user_sessions s ON u.id = s.user_id "
                "WHERE s.session_token = %s AND s.expires_at > CURRENT_TIMESTAMP AND u.is_active = true",
                (token,)
            )
            user = cur.fetchone()
            
            if not user:
                return {
                    'statusCode': 401,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Nieprawidłowy lub wygasły token'}),
                    'isBase64Encoded': False
                }
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'user': dict(user)}, default=str),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Endpoint nie znaleziony'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Błąd serwera: {str(e)}'}),
            'isBase64Encoded': False
        }
    finally:
        if 'cur' in locals():
            cur.close()
        if 'conn' in locals():
            conn.close()