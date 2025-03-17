-- Create a database called public.
-- CREATE DATABASE public;

-- Add the following items to the items table
-- CREATE TABLE items (
--     item_id  PRIMARY KEY,
--     item_name VARCHAR(255) NOT NULL,
--     price DECIMAL(10, 2) NOT NULL
-- );


-- Add 5 new customers to the customers table
-- CREATE TABLE customers (
--     customer_id  PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL
-- );

-- All the items.
-- SELECT * FROM items;


-- All the items with a price above 80 (80 not included).
-- SELECT * FROM items
-- WHERE price > 80;


-- All the items with a price below 300. (300 included)
-- SELECT * FROM items
-- WHERE price <= 300;


-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers
-- WHERE last_name = 'Smith';


-- All customers whose last name is ‘Jones’.
-- SELECT * FROM customers
-- WHERE last_name = 'Jones';


-- All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers
-- WHERE first_name != 'Scott';




