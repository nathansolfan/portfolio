-- @block
ALTER TABLE new_table AUTO_INCREMENT = 1;
-- @block
SELECT *
FROM new_table;
-- @block
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- @block
SELECT *
FROM bookings;