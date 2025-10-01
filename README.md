DB Schema

CREATE TABLE employees (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
department VARCHAR(50),
salary DECIMAL,
hired_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE projects (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
start_date DATE,
end_date DATE
);

CREATE TABLE employee_projects (
employee_id INT REFERENCES employees(id),
project_id INT REFERENCES projects(id),
PRIMARY KEY (employee_id, project_id)
);

Queries to Write
1. Get the top 5 highest paid employees.
2. Count employees per department.
3. Find employees not assigned to any project.
4. List employees working on more than 2 projects.