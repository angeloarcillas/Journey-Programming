```sql
-- Create new database
CREATE DATABASE users;

-- Delete existing database
DELETE DATABASE users;
-- Show all Database
SHOW DATABASES;

-- Use a particular existing database.
USE users

-- Create table with columns
CREATE TABLE users (
    id int(55) AUTO_INCREMENT PRIMARY KEY,
    username varchar(55) NOT NULL,
    email varchar(55) NOT NULL,
    password varchar(55) NOT NULL
);

-- Delete table
DROP TABLE users;

-- Insert row of data into table
INSERT INTO users (username, email, password) VALUES ('admin', 'sample@mail.com', '123');

-- Update username(column) & password(column) from users(table) where id === 1
UPDATE users SET username = 'admin2', password = '321' WHERE id = 1;

-- Delete row from users(table) where id === 1
DELETE FROM users WHERE id = 1;

-- Select everything from users(table)
SELECT * FROM users;

-- Select email(column) from users(table)
SELECT email FROM users;

-- Select * from users limit to 5 rows
SELECT * FROM users LIMIT 5;

-- Select * from users where country === 'ph'
SELECT * FROM users WHERE country = 'ph';

-- Select * from users where country value has the substring 'ph'
SELECT * FROM users WHERE country LIKE '%ph';

-- Select * from users where country starts with 'P' and has exactly 4 characters after it
SELECT * FROM users WHERE country LIKE 'P____';

-- select unique username from users
SELECT DISTINCT username FROM users;

-- select and sort by name ascending order(default)
SELECT * FROM users ORDER BY name;

-- Count the number of rows in the users table
SELECT COUNT(*)  FROM users;
```