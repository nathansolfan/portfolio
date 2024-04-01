-- @block
-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
-- @block
INSERT INTO Users (email, password)
VALUES ('nathansolfan@hothot.com', 'abc');
-- @block
SELECT *
FROM Users;
--WHERE country = 'US'
--AND email LIKE 'h%'
--ORDER BY id DESC
--LIMIT 2