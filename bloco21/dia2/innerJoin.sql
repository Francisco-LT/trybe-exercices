-- INNER JOIN

SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- Exercicio 1

SELECT act.actor_id, act.first_name, film_act.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film_act
ON act.actor_id = film_act.actor_id;

-- Exercicio 2

SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

-- Exercicio 3

SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

-- Exercicio 4

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE
    A.district = 'California'
    AND C.first_name LIKE '%rene%';
    
-- Exercicio 5

SELECT C.first_name, COUNT(A.address)
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY first_name DESC;

-- Exercicio 6

SELECT S.first_name, S.last_name, AVG(P.amount)
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;

-- Exercicio 7

SELECT act.actor_id, act.first_name, FA.film_id, F.title
FROM sakila.actor AS act
INNER JOIN sakila.film AS F
INNER JOIN sakila.film_actor AS FA
ON act.actor_id = FA.actor_id AND F.film_id = FA.film_id;
