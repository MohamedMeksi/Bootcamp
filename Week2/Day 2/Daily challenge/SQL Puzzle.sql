-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab




-- Q1. Quel sera le RÉSULTAT de l'instruction suivante ?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

Réponse ==> 0

-- Q2. Quel sera le RÉSULTAT de l'instruction suivante ?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )


Réponse ==> 2

-- Q3. Quel sera le RÉSULTAT de l'instruction suivante ?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )


Réponse ==> 0

-- Q4. Quel sera le RÉSULTAT de l'instruction suivante ?

--     SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

Réponse ==> 2