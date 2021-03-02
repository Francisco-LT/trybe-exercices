-- 3.7 Select the code of each box, along with the name of the city the box is located in.

SELECT a.code, b.location FROM praticando.Boxes AS a
INNER JOIN praticando.Warehouses AS b 
ON a.Warehouse = b.code;

-- 3.8 Select the warehouse codes, along with the number of boxes in each warehouse. 
-- Optionally, take into account that some warehouses are empty (i.e., the box count should show up as zero, instead of omitting the warehouse from the result).

-- SELECT code, (SELECT COUNT(Warehouse) FROM praticando.Boxes
-- GROUP BY Warehouse) FROM praticando.Warehouses;

select Warehouse, count(*) 
from praticando.Boxes 
group by warehouse;

-- 3.9 Select the codes of all warehouses that are saturated (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).

SELECT Code
   FROM praticando.Warehouses
   WHERE Capacity <
   (
     SELECT COUNT(*)
       FROM praticando.Boxes
       WHERE Warehouse = Warehouses.Code
   );
   
   -- 3.10 Select the codes of all the boxes located in Chicago.
   
    SELECT Code
   FROM praticando.Boxes
   WHERE Warehouse IN
   (
     SELECT Code
       FROM praticando.Warehouses
       WHERE Location = 'Chicago'
   );