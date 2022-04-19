USE user_info;
ALTER TABLE users
    ADD status ENUM('admin','user') NULL
        AFTER email;

/*here yo can put your own values*/
SET FOREIGN_KEY_CHECKS=0;
UPDATE users SET status = 'admin' WHERE id = 1;
UPDATE users SET status = 'user' WHERE id = 3;
UPDATE users SET status = 'user' WHERE id = 4;
UPDATE users SET status = 'user' WHERE id = 5;
UPDATE users SET status = 'user' WHERE id = 8;
UPDATE users SET status = 'user' WHERE id = 9;
UPDATE users SET status = 'admin' WHERE id = 10;
SET FOREIGN_KEY_CHECKS=1;