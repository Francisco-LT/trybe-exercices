-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.

SELECT a.*, b.name FROM praticando.Products AS a
INNER JOIN praticando.Manufacturers AS b 
ON a.manufacturer = b.code;

-- 1.11 Select the product name, price, and manufacturer name of all the products.

SELECT pro.Name, pro.Price, man.Name FROM praticando.Products AS pro
INNER JOIN praticando.Manufacturers AS man
ON pro.Manufacturer = man.Code;

-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.

SELECT AVG(Price), manufacturer FROM praticando.Products
GROUP BY manufacturer;

-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.

SELECT AVG(a.price), b.name FROM praticando.Products AS a
INNER JOIN praticando.Manufacturers AS b 
ON a.manufacturer = b.code
group by b.name;

-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.

SELECT AVG(a.price), b.name FROM praticando.Products AS a
INNER JOIN praticando.Manufacturers AS b 
ON a.manufacturer = b.code
group by b.name
HAVING AVG(a.price) > 150;