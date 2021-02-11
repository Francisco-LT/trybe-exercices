USE sakila;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(title) FROM film;
SELECT * from customer;
SELECT COUNT(*) FROM customer;
SELECT DISTINCT COUNT(last_name) FROM actor;
SELECT * FROM film_category;
SELECT DISTINCT COUNT(category_id) FROM film_category;
SELECT COUNT(*) FROM country;
SELECT * FROM language LIMIT 10 OFFSET 1;
SELECT title,release_year,length, replacement_cost, rating FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
