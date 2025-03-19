-- Utilisez « UPDATE » pour modifier la langue de certains films. Assurez-vous d'utiliser des langues valides.

UPDATE film
SET language_id = 2  
WHERE film_id IN (1, 3, 5);  

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table
address_id : Référence la table address.
store_id : Référence la table store.

Avant d_insérer un nouveau client, vous devez vous assurer que les valeurs pour address_id et store_id existent déjà dans les tables address et store.

-- Nous avons créé une nouvelle table appelée customer_review . Supprimez-la. Est-ce une étape facile ou nécessite-t-elle des vérifications supplémentaires ?

DROP TABLE customer_review CASCADE;

Supprimer une table est simple, mais nécessite de vérifier les dépendances et de sauvegarder les données importantes avant de procéder.



-- Découvrez combien de locations sont encore en attente (c'est-à-dire qui n'ont pas encore été retournées au magasin).
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;


-- Trouvez les 30 films les plus chers qui sont exceptionnels (c'est-à-dire qui n'ont pas encore été retournés au magasin)
SELECT f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;



-- Votre ami est au magasin et décide de louer un film. Il sait qu'il veut voir quatre films,
-- mais il ne se souvient plus de leurs noms. Pouvez-vous l'aider à trouver les films qu'il souhaite louer ?
-- Le 1er film : Le film parle d'un lutteur de sumo, et l'un des acteurs est Penelope Monroe.

SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';


-- Le 2ème film : Un court métrage documentaire (moins d’une heure), classé « R ».

SELECT title
FROM film
WHERE length < 60  -- Court métrage
AND rating = 'R'
AND film_id IN (SELECT film_id FROM film_category WHERE category_id = (SELECT category_id FROM category WHERE name = 'Documentary'));

-- Le troisième film : un film loué par son ami Matthew Mahan. Il a payé plus de 4 $ pour la location et l'a rendu entre le 28 juillet et le 1er août 2005.

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


-- Le 4e film : Son ami Matthew Mahan l'a également regardé. Le mot « bateau » figurait dans le titre ou la description, et le DVD semblait très cher à remplacer.

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
AND f.replacement_cost = (SELECT MAX(replacement_cost) FROM film);





























