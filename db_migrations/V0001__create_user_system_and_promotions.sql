-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    verification_token VARCHAR(255),
    reset_token VARCHAR(255),
    reset_token_expires TIMESTAMP
);

-- Создание индекса на email для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Создание таблицы промо-акций
CREATE TABLE IF NOT EXISTS promotions (
    id SERIAL PRIMARY KEY,
    casino_name VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    promo_code VARCHAR(50),
    bonus_amount VARCHAR(100),
    bonus_type VARCHAR(50), -- 'free_spins', 'deposit_match', 'no_deposit', 'cashback'
    valid_from TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valid_until TIMESTAMP,
    terms_and_conditions TEXT,
    is_active BOOLEAN DEFAULT true,
    is_exclusive BOOLEAN DEFAULT false,
    image_url VARCHAR(500),
    casino_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для активных акций
CREATE INDEX IF NOT EXISTS idx_promotions_active ON promotions(is_active, valid_until);

-- Создание таблицы подписок пользователей на промо
CREATE TABLE IF NOT EXISTS user_subscriptions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    casino_name VARCHAR(100),
    notify_all BOOLEAN DEFAULT true, -- получать все промо
    notify_email BOOLEAN DEFAULT true,
    notify_push BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска подписок пользователя
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);

-- Создание таблицы просмотренных промо
CREATE TABLE IF NOT EXISTS user_promotions_viewed (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    promotion_id INTEGER NOT NULL REFERENCES promotions(id),
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    clicked BOOLEAN DEFAULT false,
    UNIQUE(user_id, promotion_id)
);

-- Создание индекса для статистики
CREATE INDEX IF NOT EXISTS idx_user_promotions_user_id ON user_promotions_viewed(user_id);
CREATE INDEX IF NOT EXISTS idx_user_promotions_promotion_id ON user_promotions_viewed(promotion_id);

-- Создание таблицы сессий пользователей
CREATE TABLE IF NOT EXISTS user_sessions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    session_token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Создание индекса для валидации токенов
CREATE INDEX IF NOT EXISTS idx_user_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_expires ON user_sessions(expires_at);

-- Вставка тестовых промо-акций
INSERT INTO promotions (casino_name, title, description, promo_code, bonus_amount, bonus_type, valid_until, is_active, is_exclusive, casino_url) VALUES
('Vavada', 'Gates of Olympus 1000 - 20 Free Spins', 'Otrzymaj 20 darmowych obrotow na popularny slot Gates of Olympus 1000. Kod promocyjny dla nowych graczy.', '6DRYKHC1', '20 Free Spins', 'free_spins', '2026-03-31 23:59:59', true, true, 'https://gate707.com/?promo=0e4cb864-e734-44ef-9820-29068cfbffac&target=register'),
('Vavada', 'Bonus powitalny do 5000 PLN', 'Otrzymaj bonus na pierwszy depozyt do 5000 PLN + 200 darmowych obrotow', 'WELCOME5000', 'Do 5000 PLN + 200 FS', 'deposit_match', '2026-12-31 23:59:59', true, false, 'https://gate707.com/?promo=0e4cb864-e734-44ef-9820-29068cfbffac&target=register'),
('PlayFortuna', 'Bonus na depozyt 100%', 'Podwoj swoj pierwszy depozyt - otrzymaj do 3000 PLN + 150 free spins', 'FORTUNE100', 'Do 3000 PLN + 150 FS', 'deposit_match', '2026-12-31 23:59:59', true, false, 'https://fortuna-promo1.net/alt/pf_new_year_new_ru/?ab4caec10f6f2577c5ad134c05b3b019'),
('Booi', 'Cashback co tydzien 10%', 'Otrzymuj 10% cashbacku od przegranych srodkow kazdego tygodnia. Bez ograniczen kwoty.', 'CASHBACK10', '10% Weekly', 'cashback', '2026-12-31 23:59:59', true, false, 'https://booipromo1.com/alt/booi_7sinsnew_ru/?2cd1c9052f79f17d0fd62080016b1093'),
('Jozz', 'Bonus bez depozytu 50 PLN', 'Otrzymaj 50 PLN tylko za rejestracje. Depozyt nie jest wymagany!', 'FREE50', '50 PLN', 'no_deposit', '2026-06-30 23:59:59', true, true, 'https://jozz-promo1.com/alt/jozz11_ru/?6ccd9bf32f7680ee0e290d1be59a4de5');
