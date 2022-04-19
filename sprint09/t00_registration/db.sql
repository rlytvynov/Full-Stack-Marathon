CREATE DATABASE user_info;
GRANT ALL PRIVILEGES ON user_info.* TO 'rlytvynov'@'localhost';
USE user_info;

CREATE TABLE IF NOT EXISTS users 
(
    id INT NOT NULL AUTO_INCREMENT,
    login varchar(30) UNIQUE NOT NULL,
    password varchar(256) NOT NULL,
    full_name varchar(256) NOT NULL,
    email varchar(256) UNIQUE NOT NULL,
    PRIMARY KEY (id)
)