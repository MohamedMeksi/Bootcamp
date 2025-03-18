-- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT * FROM customer

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
SELECT CONCAT(first_name,' ', last_name) AS full_name FROM customer

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT DISTINCT create_date as date from customer 

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT * FROM customer ORDER BY first_name DESC


-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone 
FROM address 
WHERE district = 'Texas';

-- Écrivez une requête pour récupérer tous les détails du film où l'ID du film est 15 ou 150.
-- rep 1
SELECT * 
FROM film
WHERE film_id = 15 or film_id = 150

-- rep 2
SELECT * FROM film WHERE film_id IN (15, 150);


-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

SELECT film_id , title , description, length ,rental_rate
FROM film
WHERE title = 'Anthem Luke'


-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID,
-- title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

SELECT film_id , title , description, length ,rental_rate
FROM film
WHERE title LIKE 'AN%'

-- Écrivez une requête qui trouvera les 10 films les moins chers.

SELECT film_id , title , rental_rate
FROM film 
ORDER BY rental_rate ASC
LIMIT 10

-- Vous n'êtes pas satisfait des résultats. Écrivez une requête qui trouvera les 10 films les moins chers suivants.
-- Bonus : évitez d'utiliser LIMIT.

SELECT film_id, title, rental_rate 
FROM film 
WHERE rental_rate > (SELECT MIN(rental_rate) FROM film) 
ORDER BY rental_rate 
OFFSET 10;

-- Écrivez une requête qui joindra les données de la table client et de la table paiement. Vous souhaitez obtenir le prénom et le nom de la table client,
-- ainsi que le montant et la date de chaque paiement effectué par un client, classés par identifiant (de 1 à…).

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer  
LEFT JOIN payment  
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;


-- Vous devez vérifier votre inventaire. Écrivez une requête pour obtenir tous les films qui ne sont pas dans votre inventaire.

SELECT film.* 
FROM film 
LEFT JOIN inventory ON film.film_id = inventory.film_id 
WHERE inventory.film_id IS NULL;

-- Écrivez une requête pour trouver quelle ville se trouve dans quel pays.

SELECT city.city, country.country 
FROM city 
INNER JOIN country ON city.country_id = country.country_id;

-- Bonus : vous souhaitez connaître les performances de vos vendeurs ? Saisissez une requête pour obtenir l'identifiant du client, son nom (prénom et nom),
-- le montant et la date de paiement commandés par l'identifiant du vendeur.

SELECT customer.customer_id, 
        CONCAT(customer.first_name, ' ', customer.last_name) AS full_name, 
        payment.amount, 
        payment.payment_date, 
        payment.staff_id 
FROM customer 
INNER JOIN payment ON customer.customer_id = payment.customer_id 
ORDER BY payment.staff_id;








