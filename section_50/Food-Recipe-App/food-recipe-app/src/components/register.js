const express = require('express');
const router = express.Router();

// post/register
router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }
  
    return res.status(200).json({ message: 'User registered successfully.' });
  });
  
  module.exports = router;