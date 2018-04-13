DROP DATABASE IF EXISTS shop_db;
DROP USER IF EXISTS shop_user;
CREATE USER shop_user
WITH PASSWORD 'password';
CREATE DATABASE shop_db
OWNER shop_user;
\c shop_db;
SET ROLE shop_user;


-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS cart;
-- CREATE TABLE users
-- (
--     user_id SERIAL NOT NULL PRIMARY KEY,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     created_at timestamp NOT NULL DEFAULT now(),
--     updated_at timestamp,
-- );
-- CREATE TABLE products
-- (
--     product_id SERIAL NOT NULL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description text,
--     inventory INTEGER,
--     price DECIMAL (8,2),
--     created_at timestamp NOT NULL DEFAULT now(),
--     updated_at timestamp,
-- );
-- CREATE TABLE cart
-- (
--     cart_id SERIAL NOT NULL PRIMARY KEY,
--     user_id integer REFERENCES users
--             (user_id),
--     product_id integer REFERENCES products
--     (product_id),
--     created_at timestamp NOT NULL DEFAULT now(),
--     updated_at timestamp,
-- );

