
-- All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC


-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

-- Tous les noms de famille (pas d'autres colonnes !), dans l'ordre alphabétique inverse (ZA)
-- SELECT last_name FROM customers ORDER BY last_name DESC;




















