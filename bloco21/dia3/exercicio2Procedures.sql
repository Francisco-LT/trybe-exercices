USE sakila;
DELIMITER $$

CREATE PROCEDURE showIdTitleCategory(IN category_name VARCHAR(30))
BEGIN
SELECT F.film_id, F.title, FC.category_id, C.name
FROM sakila.film AS F
INNER JOIN sakila.film_category AS FC
INNER JOIN sakila.category AS C
ON F.film_id = FC.film_id AND FC.category_id = C.category_id
WHERE C.name = category_name;

END $$

DELIMITER ;

CALL showIdTitleCategory('Action');