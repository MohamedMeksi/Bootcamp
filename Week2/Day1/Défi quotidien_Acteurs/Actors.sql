-- 1. Comptez le nombre d'acteurs dans la table.
-- SELECT COUNT(*) FROM actors;


-- L'erreur que vous avez reçue indique que la colonne first_name dans la table actors a une contrainte NOT NULL, ce qui signifie que vous ne pouvez pas insérer de valeur NULL dans cette colonne. Voici les détails de l'erreur
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('mohamed', NULL, NULL, NULL);
