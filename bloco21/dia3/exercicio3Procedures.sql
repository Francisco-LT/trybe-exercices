USE sakila;
DELIMITER $$

CREATE PROCEDURE getClientEmailCorrect(
	IN client_email VARCHAR(100),
    OUT isActive VARCHAR(30))
BEGIN
	SET isActive = (
		SELECT
		email,
		active,
		CASE
			WHEN active = 1 THEN 'Ativo'
			WHEN active = 0 THEN 'Não ativo'
			ELSE 'não classificado'
		END AS 'Atividade Cliente'
	FROM sakila.customer
	WHERE email = client_email
	);
END $$

DELIMITER ;

SELECT @ActiveStatus;
CALL getClientEmailCorrect('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;

-- SELECT * FROM sakila.customer;

-- USE sakila;
-- DELIMITER $$

-- CREATE PROCEDURE CheckIfActiveClient(
--     IN client_email VARCHAR(200),
--     OUT isActive BOOL
-- )
-- BEGIN
--     SET isActive = (
--         SELECT active
-- 			FROM sakila.customer
-- 			WHERE email = client_email
-- 		);
-- 	END $$

-- 	DELIMITER ;

-- 	SELECT @ActiveStatus;
-- 	CALL CheckIfActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
-- 	SELECT @ActiveStatus;
