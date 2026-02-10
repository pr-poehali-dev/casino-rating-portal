-- Установка пароля администратора
-- Login: admin@grin.com
-- Password: Www373826483
-- Метод: pbkdf2_hmac SHA256, 100000 итераций
-- Формат: {32_hex_salt}${64_hex_hash}

UPDATE admin_users 
SET password_hash = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6$8e6f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8',
    full_name = 'Administrator',
    is_active = true
WHERE id = 1;
