1.  The title of every movie.

    ```sql
    SELECT title 
      FROM movies;
    ```

2.  All information on the G-rated movies.

    ```sql
    SELECT * 
      FROM movies
      WHERE rating='G';
    ```

3.  The title and release year of every movie, ordered with the oldest movie first.

    ```sql
    SELECT title, release_year 
      FROM movies
      ORDER BY release_year;
    ```

4.  All information on the 5 longest movies.

    ```sql
    SELECT * 
      FROM movies
      ORDER BY runtime DESC
      LIMIT 5;
    ```

5.  A table with columns of `rating` and `total`, tabulating the total number of G, PG, PG-13, and R-rated movies.

    ```sql
    SELECT rating, COUNT(*) AS total
      FROM movies
      GROUP BY rating;
    ```

6.  A table with columns of `release_year` and `average_runtime`, tabulating the average runtime by year for every movie in the database. The data should be in reverse chronological order (i.e. the most recent year should be first).

    ```sql
    SELECT release_year, AVG(runtime) AS average_runtime
      FROM movies
      GROUP BY release_year
      ORDER BY release_year DESC;
    ```


7.  The first and last name of the five oldest stars.

    ```sql
    SELECT first_name, last_name 
      FROM stars
      ORDER BY birth_date
      LIMIT 5;
    ```

8.  The first and last name of the five youngest stars.

    ```sql
    SELECT first_name, last_name 
      FROM stars
      ORDER BY birth_date DESC
      LIMIT 5;
    ```

9.  A table of first names along with the number of stars having that first name, provided that this number is greater than 1.

    ```sql
    SELECT first_name, COUNT(*) FROM stars
      GROUP BY first_name
      HAVING COUNT(*) > 1;
    ```

10.  The star first name, star last name, and movie title for every matching movie and star pair in the database.

    ```sql
    SELECT s.first_name, s.last_name, m.title
      FROM stars s
      JOIN roles r ON s.id = r.star_id
      JOIN movies m ON m.id = r.movie_id;
    ```

11.  The first and last names of every star who has been in a G-rated movie.

    ```sql
    SELECT s.first_name, s.last_name
      FROM stars s
      JOIN roles r ON s.id = r.star_id
      JOIN movies m ON m.id = r.movie_id
      GROUP BY s.id 
      WHERE m.rating = 'G';
    ```

12.  The first and last names of every star along with the number of movies they have been in, in descending order by the number of movies.

    ```sql
    SELECT s.first_name, s.last_name, COUNT(*) AS count
      FROM stars s
      JOIN roles r ON s.id = r.star_id
      GROUP BY s.id
      ORDER BY count DESC;
    ```

13.  The title of every movie along with the number of stars in that movie, in descending order by the number of stars.

    ```sql
    SELECT m.title, COUNT(*) AS count
      FROM movies m
      JOIN roles r ON m.id = r.movie_id
      GROUP BY m.id
      ORDER BY count DESC;
    ```

14.  The first and last names of the five stars whose movies have the longest average runtime.

    ```sql
    SELECT s.first_name, s.last_name, AVG(m.runtime) AS average
      FROM stars s
      JOIN roles r ON s.id = r.star_id
      JOIN movies m ON m.id = r.movie_id
      GROUP BY s.id
      ORDER BY average DESC
      LIMIT 5;
    ```

15.  The first and last names of the five stars whose movies have the longest average runtime, among stars who have more than one movie in the database.

    ```sql
    SELECT s.first_name, s.last_name, AVG(m.runtime) AS average
      FROM stars s
      JOIN roles r ON s.id = r.star_id
      JOIN movies m ON m.id = r.movie_id
      GROUP BY s.id
      HAVING COUNT(*) > 1
      ORDER BY average DESC
      LIMIT 5;
    ```

16.  The titles of all movies that don't feature any stars in our database.

    ```sql
    SELECT m.title 
      FROM movies m
      LEFT JOIN roles r ON m.id = r.movie_id
      WHERE r.id IS NULL;
    ```

17.  The first and last names of all stars that don't appear in any movies in our database.

    ```sql
    SELECT s.first_name, s.last_name
      FROM roles r
      RIGHT JOIN stars s ON s.id = r.star_id
      WHERE r.id IS NULL;
    ```

18.  The first names, last names, and titles corresponding to every role in the database, along with every movie title that doesn't have a star, and the first and last names of every star not in a movie.

    ```sql
    SELECT s.first_name, s.last_name, m.title
      FROM stars s
      FULL JOIN roles r ON r.star_id = s.id
      FULL JOIN movies m on m.id = r.movie_id;
    ```
