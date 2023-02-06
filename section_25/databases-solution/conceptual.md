### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?

PostgreSQL is a database management system that allows us to store information in a relational manner.

- What is the difference between SQL and PostgreSQL?

SQL is the language that is used to store and query data. PostgreSQL uses this language and extends it to allow us to store information.

- In `psql`, how do you connect to a database?

\c databasename

- What is the difference between `HAVING` and `WHERE`?

HAVING is applied to groups of data and WHERE applies to individual rows. Therefore the WHERE clause filters rows before they are grouped and the HAVING clause will filter groups.


- What is the difference between an `INNER` and `OUTER` join?

INNER join is everything in the middle of a venn diagram that occurs in both tables. For example, if there is a name table connected to a workplace table and someone is unemployed then they won't show up in the join. 

- What is the difference between a `LEFT OUTER JOIN` and `RIGHT OUTER` join?

In a LEFT OUTER join that person will show up. OUTER joins can be LEFT, RIGHT, or FULL. LEFT means that data can be in the left table but not in the right and it will show up. RIGHT means that data can be in the right table but not in the left and it will show up. A FULL join will allow all data to be shown whether it shows up in both tables or not.

- What is an ORM? What do they do?

ORM is object-relational mapping. This allows us to convert data between different systems in an object oriented manner. For example SQLAlchemy can convert data in SQL into objects to be used in Python.

- What are some differences between making HTTP requests using AJAX and from the server side using a library like `requests`?

AJAX requests are asynchronous and the server is synchronous. AJAX requests must respect the single origin policy whereas server requests don't. Server requests can help keep private keys secret since they won't be in the client browser with AJAX.

- What is CSRF? What is the purpose of the CSRF token?

CSRF stands for cross-site request forgery. For example, if I made a form that posted to Facebook to delete a user I technically could make that form however it would not work due to CSRF. If however I had a token that could prove I can make the request it would go through. The CSRF token is the item that proves that I am who I say that I am and allows the request to be made.

- What is the purpose of `form.hidden_tag()`?

This will render all of the hidden input tags and is commonly used to allow values like the CSRF token to be passed through a hidden field on WTForms.