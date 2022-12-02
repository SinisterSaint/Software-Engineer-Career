### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
The important differences between Python and JavaScript is that Python is for 
server-side scripting, back-end development and JavaScript is Client-side scripting, front-end
Python makes is simple to read and maintain code and JavaScript does not provide easy to read
code readability because of its flexibility

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  One way you can try to get a missing key like C is by using the function get(key,def_val), which is a method useful
  for when we have to check for a key. Another way is by using the function setdefault(key,def_val), which works similar to get(),
  but the difference is that for each key that is missing, a new key is created with the def_value with the key passed in arguments.


- What is a unit test?
A unit test is a test that checks a single componant of code, usually modularized as a function, and ensures that it performs 
as expected. 

- What is an integration test?
Integration testing is testing multiple components of an application to see if they work together.
- What is the role of web application framework, like Flask?
The role of web application framework like Flask is that it is used to make the server-side scripting easier for a developer.
It allows developers to have complete controle of the codebase. The framework enables developers to choose the components they 
want for a specific application.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  It depends on the situation and the preference of the developer. You can generally use query string parameters if you are describing the object you are on vs using the route for the object itself.

- How do you collect data from a URL placeholder parameter using Flask?
You can specify the variable in the app.route and then use that variable as a paramater in the routing function.

- How do you collect data from the query string using Flask?
With a query string the data can be found in the request.args dictionary.

- How do you collect data from the body of the request using Flask?
You can get the data form a post request in the body using the request.form dictionary

- What is a cookie and what kinds of things are they commonly used for?
A cookie is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time.

- What is the session object in Flask?
The session object in Flasks is built up by the use of cookies. It enables to server to create multiple things(cookies) in the 
session for the client without having to create many cookies in one session.

- What does Flask's `jsonify()` do?
Jsonify will take JSON serializeable data in python and convert it to a JSON string.
