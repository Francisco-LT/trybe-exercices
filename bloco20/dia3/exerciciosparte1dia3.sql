USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name ASC;
SELECT * FROM film
WHERE rating <> 'NC-17' AND replacement_cost > 18.99
ORDER BY replacement_cost DESC LIMIT 100;
SELECT COUNT(*) FROM customer
WHERe active = 1 AND store_id = 1;
SELECT * FROM customer
WHERE active = 0 AND store_id = 1;
SELECT * FROM film
WHERE rating > 'NC-17'
ORDER BY rental_rate ASC LIMIT 50;
SELECT * FROM film
WHERE title LIKE '%ace%';
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%documentary%';
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
SELECT * FROM customer
WHERE customer_id IN (269, 239, 126, 399, 142);
-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
SELECT * FROM sakila.payment;
-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
SELECT DISTINCT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;
SELECT * FROM sakila.customer
WHERE address_id BETWEEN '172' AND '176'
ORDER BY email ASC;
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT DISTINCT title, release_year,rental_duration FROM film
WHERE rental_duration BETWEEN '3' AND '6'
ORDER BY rental_duration DESC;
