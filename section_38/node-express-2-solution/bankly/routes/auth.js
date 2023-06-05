/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *
 */

 /** POST / {userdata}  => {token: token} */

router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    let user = await User.register({username, password, first_name, last_name, email, phone});
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    // BUG: fails to await User.authenticate
    // let user = User.authenticate(username, password);
    const user = await User.authenticate(username, password);
    const token = createTokenForUser(user.username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
