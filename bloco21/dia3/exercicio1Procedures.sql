-- USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
-- DELIMITER $$ -- definindo delimitador

-- CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
-- BEGIN -- delimitando o início do código SQL

-- END $$ -- delimitando o final do código SQL

-- DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(*) DESC
    LIMIT 10;
END $$

DELIMITER ;	