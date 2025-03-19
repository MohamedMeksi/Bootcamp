-- Partie I
-- Créez deux tables : Client et Profil client. Elles ont une relation un à un.
-- Création de la table Client
CREATE TABLE Client (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Création de la table Profil client
CREATE TABLE Profil_client (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Client(id) ON DELETE CASCADE ON UPDATE CASCADE
);



-- Insérez ces clients

INSERT INTO Client (first_name, last_name)
VALUES
('John', 'Doe'),
('Jérôme', 'Lalu'),
('Léa', 'Rive');

-- Insérez ces profils clients, utilisez des sous-requêtes

INSERT INTO Profil_client (isLoggedIn, customer_id)
VALUES
((SELECT id FROM Client WHERE first_name = 'John' AND last_name = 'Doe'), TRUE), 
((SELECT id FROM Client WHERE first_name = 'Jérôme' AND last_name = 'Lalu'), FALSE);


-- Utilisez les types de jointures pertinents pour afficher :
-- Le prénom des clients connectés

SELECT first_name
FROM Client
JOIN Profil_client ON Client.id = Profil_client.customer_id
WHERE Profil_client.isLoggedIn = TRUE;

-- Toutes les colonnes first_name et isLoggedIn des clients - même les clients qui n'ont pas de profil.

SELECT Client.first_name, COALESCE(Profil_client.isLoggedIn, FALSE) AS isLoggedIn
FROM Client
LEFT JOIN Profil_client ON Client.id = Profil_client.customer_id;


-- Le nombre de clients qui ne sont pas connectés

SELECT COUNT(*)
FROM Client
LEFT JOIN Profil_client ON Client.id = Profil_client.customer_id
WHERE Profil_client.isLoggedIn = FALSE OR Profil_client.isLoggedIn IS NULL;



-- Partie II :
-- Créez une table nommée Book , avec les colonnes : book_id SERIAL PRIMARY KEY, title NOT NULL,author NOT NULL

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);


-- Insérez ces livres :
-- Alice au pays des merveilles, Lewis Carroll
-- Harry Potter, J.K. Rowling
-- Pour tuer un oiseau moqueur, Harper Lee


INSERT INTO Book (title, author)
VALUES
('Moby Dick', 'Herman Melville'),
('La Recherche du Temps Perdu', 'Marcel Proust'),
('Pour tuer un oiseau moqueur', 'Harper Lee');


-- Créez une table nommée Student , avec les colonnes : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age.
-- Assurez-vous que l'âge n'est jamais supérieur à 15 (Trouvez une méthode SQL) ;

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);


-- Insérez ces étudiants :
-- Jean, 12 ans
-- Lera, 11
-- Patrick, 10
-- Bob, 14


INSERT INTO Student (name, age)
VALUES
('Jean', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


-- Création de la table Bibliothèque

CREATE TABLE Bibliothèque (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Add 4 records in the junction table, use subqueries

INSERT INTO Bibliothèque (book_fk_id, student_fk_id, borrowed_date)
VALUES
((SELECT book_id FROM Book WHERE title = 'Alice au pays des merveilles' LIMIT 1), (SELECT student_id FROM Student WHERE name = 'Jean'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'Pour tuer un oiseau moqueur' LIMIT 1), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice au pays des merveilles' LIMIT 1), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter' LIMIT 1), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');


-- Display the data
-- Select all the columns from the junction table

SELECT * FROM Bibliothèque;


-- Select the name of the student and the title of the borrowed books

SELECT s.name AS Student_Name, b.title AS Book_Title, l.borrowed_date 
FROM Bibliothèque l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;



-- Select the average age of the children, that borrowed the book Alice in Wonderland


SELECT AVG(s.age) AS Average_Age
FROM Bibliothèque l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice in Wonderland';



-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM Student WHERE name = 'Bob';
--  Comme ON DELETE CASCADE est activé sur student_fk_id, tous les enregistrements d’emprunt liés à Bob seront automatiquement supprimés de la table Bibliothèque.





