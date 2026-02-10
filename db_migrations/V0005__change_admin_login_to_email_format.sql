-- Меняем логин администратора на email-формат для удобства
UPDATE admin_users 
SET email = 'admin@grin.com'
WHERE email = 'Grin';
