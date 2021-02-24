USE Scientists;
SELECT * FROM Scientists
WHERE name LIKE '%e%';

SELECT * FROM Projects
WHERE Name LIKE 'a%'
ORDER BY Name ASC;

SELECT DISTINCT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name ASC;

SELECT Scientist FROM AssignedTo WHERE Project in ('AeH3', 'Ast3', 'Che1');

SELECT * FROM Projects
WHERE Hours > 500;

SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;

SELECT * FROM Projects WHERE Name NOT LIKE 'A%';

SELECT DISTINCT Name FROM Projects
WHERE Code LIKE '%h%'
