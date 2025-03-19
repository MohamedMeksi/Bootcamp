-- Get a list of all the languages, from the language table.
SELECT * FROM language ;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT film.title , film.description , language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES ('SAW x'), ('12 Angry man'), ('Marvel');


-- Créez une table appelée customer_review , qui contiendra les critiques de films rédigées par les clients.
-- Pensez à la contrainte DELETE : si un film est supprimé, sa critique sera automatiquement supprimée.
-- Cette table devrait contenir les colonnes suivantes :

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ajoutez deux critiques de films. Assurez-vous de les lier à des objets valides dans les autres tables.

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (1, 1, 'Masterpiece!', 9, 'One of the best movies I have ever seen.'),
    (2, 2, 'Overrated', 3, 'The movie was too slow and lacked depth.');


-- Supprimer un film qui a une critique de la table new_film , qu'arrive-t-il à la table customer_review ?
DELETE FROM new_film WHERE id = 1;
-- Toutes les critiques du film avec id = 1 seront automatiquement supprimées de customer_review.








