-- Обновление учетных данных администратора
-- Логин: Grin
-- Пароль: Www373826483

UPDATE admin_users 
SET 
  email = 'Grin',
  password_hash = 'a7f3e9d2c1b4f8e6$e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7',
  full_name = 'Administrator',
  is_active = true
WHERE email = 'admin@bkreiting.com';

-- На случай если записи нет, создаем новую
INSERT INTO admin_users (email, password_hash, full_name, is_active)
SELECT 'Grin', 'a7f3e9d2c1b4f8e6$e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7', 'Administrator', true
WHERE NOT EXISTS (SELECT 1 FROM admin_users WHERE email = 'Grin');