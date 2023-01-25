### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL? PostgreSQL is a free and open-source relational database management system emphasizing extensions and SQL compliance

- What is the difference between SQL and PostgreSQL? PostgresSQL isan object-relational database, while SQL Server is a relational database system.

- In `psql`, how do you connect to a database? You connect to a psql database by knowing the name of your target database, the host name and port number of the server and the username you want to connect as.

- What is the difference between `HAVING` and `WHERE`? `HAVING` is checking to see if a database has a particular item or variable while `WHERE` is selecting items that has a particular variable or value.

- What is the difference between an `INNER` and `OUTER` join? The biggest difference between INNER JOIN and OUTER JOIN is that inner join will keep only the information on both tables that's related to each other. Outer join will also keep information that is not relation to the other table in the resulting table.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join? A left outer joun contains all records on the "left" table even if it has no matches in the "right" table specified in the join. A right outer join contains all the records in the "right" table even if it has no matched in the "left" table.

- What is an ORM? What do they do? Object Relational Mapping (ORM) is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`? The main difference is on the client. With an Ajax request, the current window is unaffected.

- What is CSRF? What is the purpose of the CSRF token? A CSRF token is a secure random toekn that is used to prevent CSRF attacks. The token needs to be unique per user session and should be a large random value to make it difficult to guess. 

- What is the purpose of `form.hidden_tag()`? The form. hidden_tag() template arguement generates a hiddin field that includes a token that is used to protect the form agasint CSRF attacks. All you need to do to have the form protected is include this hiden field and have the SECRET_KEY variable defined in the FLASK configuration. 
