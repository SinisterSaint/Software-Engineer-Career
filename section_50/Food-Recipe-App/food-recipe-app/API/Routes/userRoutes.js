// module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Check if the username already exists in the database
  const checkUsernameQuery = 'SELECT * FROM users WHERE username = $1';
  db.query(checkUsernameQuery, [username])
    .then((result) => {
      if (result.rows.length > 0) {
        return res.status(409).json({ message: 'Username already exists.' });
      }

      // Hash the password
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ error: 'An error occurred while hashing the password.' });
        }

        // Insert the user into the database
        const insertUserQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';
        db.query(insertUserQuery, [username, hashedPassword])
          .then(() => {
            res.status(200).json({ message: 'User registered successfully.' });
          })
          .catch((error) => {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: 'An error occurred while registering the user.' });
          });
      });
    })
    .catch((error) => {
      console.error('Error checking username:', error);
      res.status(500).json({ error: 'An error occurred while checking the username.' });
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Check if the username exists in the database
  const checkUsernameQuery = 'SELECT * FROM users WHERE username = $1';
  db.query(checkUsernameQuery, [username])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }

      const user = result.rows[0];

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.status(500).json({ error: 'An error occurred while comparing passwords.' });
        }

        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Generate and sign a JWT token
        const token = jwt.sign({ userId: user.id }, 'your-secret-key');

        res.status(200).json({ message: 'User logged in successfully.', token });
      });
    })
    .catch((error) => {
      console.error('Error checking username:', error);
      res.status(500).json({ error: 'An error occurred while checking the username.' });
    });
});

module.exports = router;