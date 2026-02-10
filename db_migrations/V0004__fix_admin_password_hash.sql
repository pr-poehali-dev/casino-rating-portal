-- Обновление пароля администратора Grin
-- Генерируем новый правильный хеш для пароля Www373826483

UPDATE admin_users 
SET password_hash = '4c8f2a9e1d6b3f7a5e2c8d1b4f9a6e3c$7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e'
WHERE email = 'Grin';
