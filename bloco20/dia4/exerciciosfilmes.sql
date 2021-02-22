INSERT INTO Pixar.Movies (title, director, year, length_minutes) VALUES 
('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES 
(8, 6.8, 450000000, 370000000);

SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE director = 'John Lasseter';

UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES 
(8, 6.8, 450000000, 370000000);

UPDATE Pixar.BoxOffice
SET movie_id = '9'
WHERE movie_id = 8;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales) VALUES 
(9, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

UPDATE Pixar.BoxOffice
SET movie_id = '8'
WHERE rating = 8.5;

DELETE FROM BoxOffice
WHERE movie_id = 11; -- este é o id do filme WALL-E
-- é assim pois há uma relação primary key - foreign key, assim devemos excluir primeiro a referência na tabela box office
DELETE FROM Movies 
WHERE title = 'WALL-E';

SELECT id FROM Movies
WHERE director = 'Andrew Staton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 5)

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
 
DELETE FROM Movies
WHERE director = 'Andrew Staton';
