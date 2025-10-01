--1. Get the top 5 highest paid employees.
SELECT id, name, department, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;  


--2. Count employees per department.
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
ORDER BY employee_count DESC;


--3. Find employees not assigned to any project.
SELECT emp.id, emp.name, emp.department
FROM employees emp
LEFT JOIN employee_projects ep ON emp.id = ep.id
WHERE ep.project_id IS NULL;


--4. List employees working on more than 2 projects.
SELECT emp.id, emp.name, COUNT(ep.project_id) AS project_count
FROM employees emp
INNER JOIN employee_projects ep ON emp.id = ep.id
GROUP BY emp.id, emp.name
HAVING COUNT(ep.project_id) > 2;
