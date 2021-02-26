-- 2.10 Select all the data of employees, including each employee's department's data.

SELECT a.*, b.name, b.Budget FROM praticando.Employees AS a
INNER JOIN praticando.Departments AS b 
ON a.Department = b.code;

-- 2.11 Select the name and last name of each employee, along with the name and budget of the employee's department.

SELECT a.name, a.LastName, b.name, b.Budget FROM praticando.Employees AS a
INNER JOIN praticando.Departments AS b 
ON a.Department = b.code;

-- 2.12 Select the name and last name of employees working for departments with a budget greater than $60,000.

SELECT a.name, a.LastName FROM praticando.Employees AS a
INNER JOIN praticando.Departments AS b 
ON a.Department = b.code
WHERE b.Budget > 60000;

-- també pode ser da seguinte forma (com subquery)

SELECT Name, LastName FROM praticando.Employees
  WHERE Employees.Department IN
  (SELECT Code FROM praticando.Departments WHERE Budget > 60000);
  
-- 2.14 Select the names of departments with more than two employees.

SELECT Name FROM praticando.Departments
  WHERE Code IN
  (
    SELECT Department
      FROM Employees
      GROUP BY Department
      HAVING COUNT(*) > 2
  );