SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

SELECT first_name FROM sakila.actor AS act
WHERE act.first_name LIKE '%je'
UNION
SELECT first_name FROM sakila.customer AS cust
WHERE cust.first_name LIKE '%tracy';

(SELECT first_name FROM sakila.actor AS act
ORDER BY first_name DESC
LIMIT 5)
UNION
(SELECT first_name FROM sakila.customer AS cust
ORDER BY first_name
LIMIT 5 OFFSET 15)
UNION
(SELECT first_name FROM sakila.staff AS sta
ORDER BY first_name
LIMIT 1);