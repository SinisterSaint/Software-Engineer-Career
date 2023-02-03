### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript? Python makes it simple to read and maintain code. Because of its flexibility, JavaScrit does not provide easy cide readability or maintainability. To run python code, you'll almost always need an interpreter. The ability to run JavaScript code is built-in to most web browsers.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

- What is a unit test? A unit test is testing a small portion of an application


- What is an integration test? Integration testing is testing the different pieces fo an application and seeing how they work together

- What is the role of web application framework, like Flask? Flask contains a list of different functions, classes and etc. that assists with defining which requests to respind to as well with how to respond with other requests.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application? The use of query strings.

- How do you collect data from a URL placeholder parameter using Flask? By specifying the variable in the app.route then use the variable as a parameter in the routing function.

- How do you collect data from the query string using Flask? request.args

- How do you collect data from the body of the request using Flask? request.form

- What is a cookie and what kinds of things are they commonly used for? A cookie stores data, storing the domain, "key", and "value" that gets sent from the server to the client.

- What is the session object in Flask? The session object it a compilation of all the cookies in a session.

- What does Flask's `jsonify()` do? jsonify will take JSON serializeable data in python and convert it to a JSON string.
