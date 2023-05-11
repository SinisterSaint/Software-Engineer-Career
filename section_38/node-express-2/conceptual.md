### Conceptual Exercise

Answer the following questions below:

- What is a JWT? Jason Web Token 

- What is the signature portion of the JWT?  What does it do? The signature portion of a JWT is a cryptographic hash that is used to verify the validity of the token. The signature makes sure that the token has not been tampered by someone who does not have the secret key. 

- If a JWT is intercepted, can the attacker see what's inside the payload? If a JWT is intercepted by an attacker, they can decode and read the contents of the payload, but they cannot modify it without knowing the secret key used to generate the signature.

- How can you implement authentication with a JWT?  Describe how it works at a high level. You can implement authentication with JWT with user logins, server verification, client storing the JWT, server verifying the JWT, and the server granting or denying access. 

- Compare and contrast unit, integration and end-to-end tests. Test individual units or components of code in individually. Integration tests test how different units or components work together to achieve a specific functionality. End to end tests test the entire system or application, from the user interface to the database.

- What is a mock? What are some things you would mock? A mock is a simulated object or module that imitates the behavior of a real object or module in a controlled environment. 

- What is continuous integration? The practice of automating the integration of code changes from multiple contributors into a single software project

- What is an environment variable and what are they used for? Environment variables are usally set in shell scripts or configuration files. They can be set manually using operating system tools or third-party utilities. They provide a flexible and standardized way to configure software behavior across different systems and environments

- What is TDD? What are some benefits and drawbacks? Test-driven development (TDD) is a software development practice that emphasizes writing automated tests before writing the production code. Some of the benefits are better code quality, faster feedback, better design, increased confidence and easier debugging. Some of the setbacks are time consuming, steep learning curve, too much testing, flase sense of security, test maintanence. 

- What is the value of using JSONSchema for validation? JSONSchema is a vocabulary that allows us to validate JSON data against a schema definition. Some of the benefits are improved data quality, reduced errors, easier dubbing, better communication and imrproved security. 

- What are some ways to decide which code to test? Some of the ways to decide which code to test are testing critical code paths, testing complex code, testing code that changed, testing code that interacgs with external systems, testing code that is hard to reproduce in production. 

- What does `RETURNING` do in SQL? When would you use it? In SQL, the RETURNING keyword is used to return the results of a query after it has modified one or more rows in a table. We can use RETURNING in a variety of scenarios, such as when we need to retrieve the auto-generated values (such as IDs) of newly inserted rows, when we need to confirm that a DELETE operation removed the expected rows, or when we need to retrieve values that were updated by a UPDATE statement.

- What are some differences between Web Sockets and HTTP? Web Sockets and HTTP are two different protocols used for communication over the internet. Web Sockets are ideal for real-time, low-latency communication, while HTTP is better suited for request-response communication where real-time communication is not necessary.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)? I prefer using Express because I enjoy JavaScript over Python.
