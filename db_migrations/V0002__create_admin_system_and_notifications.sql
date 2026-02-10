-- Создание таблицы администраторов
CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Создание таблицы уведомлений для пользователей
CREATE TABLE IF NOT EXISTS user_notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    promotion_id INTEGER REFERENCES promotions(id),
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP
);

-- Создание индексов
CREATE INDEX IF NOT EXISTS idx_user_notifications_user_id ON user_notifications(user_id, is_read);
CREATE INDEX IF NOT EXISTS idx_user_notifications_created ON user_notifications(created_at DESC);

-- Вставка тестового администратора (пароль: admin123)
-- Хеш сгенерирован через pbkdf2_hmac с солью 'testsalt'
INSERT INTO admin_users (email, password_hash, full_name) VALUES
('admin@bkreiting.com', 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4$c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec', 'Administrator')
ON CONFLICT (email) DO NOTHING;
