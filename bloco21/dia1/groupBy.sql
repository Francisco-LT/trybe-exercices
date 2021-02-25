-- Como dito, o GROUP BY , utilizado dessa forma, retorna apenas um valor da coluna usada no agrupamento.
-- Em outras palavras, o GROUP BY removerá duplicações.

SELECT first_name FROM sakila.actor
GROUP BY first_name;

-- Porém é mais comum utilizar o GROUP BY em conjunto com o AVG , MIN , MAX , SUM ou COUNT . 
-- Por exemplo, caso queiramos encontrar quantas vezes cada nome foi registrado, podemos usar o COUNT() . 
-- Assim, teremos uma informação mais fácil de ser compreendida.

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- Exercicios

SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

-- Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados
-- na tabela sakila.film. 
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating
ORDER BY AVG(length) DESC;

-- Monte uma query para a tabela sakila.address 
-- que exiba o nome do distrito e a quantidade de endereços registrados nele. 
-- Os resultados devem ser ordenados da maior quantidade para a menor.

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS 'media de duração'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50
ORDER BY AVG(length);

SELECT rating, SUM(replacement_cost) custo_de_substituicao
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY SUM(replacement_cost);