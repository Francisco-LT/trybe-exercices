USE sakila;
DELIMITER $$

CREATE FUNCTION totalPayment(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE payment_total INT;
    SELECT customer_id, COUNT(customer_id) FROM sakila.payment
	GROUP BY customer_id
    HAVING sakila.payment.customer_id = id INTO payment_total;
    RETURN payment_total;
END $$

DELIMITER ;

SELECT totalPayment(1);


