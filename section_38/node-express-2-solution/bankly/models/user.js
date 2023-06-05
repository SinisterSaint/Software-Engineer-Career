const bcrypt = require("bcrypt");
const db = require("../db");
const ExpressError = require("../helpers/expressError");
const sqlForPartialUpdate = require("../helpers/partialUpdate");
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {
  /** Register user with data. Returns new user data. */

  static async register(data) {
    const duplicateCheck = await db.query(
      `SELECT username 
        FROM users 
        WHERE username = $1`,
      [data.username]
    );

    if (duplicateCheck.rows[0]) {
      throw new ExpressError(
        `There already exists a user with username '${data.username}'`,
        400
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users 
          (username, password, first_name, last_name, email, phone) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING username, password, first_name, last_name, email, phone`,
      [
        data.username,
        hashedPassword,
        data.first_name,
        data.last_name,
        data.email,
        data.phone
      ]
    );

    return result.rows[0];
  }

  /** Is this username + password combo correct?
   *
   * Return all user data if true, throws error if invalid
   *
   * */

  static async authenticate(username, password) {
    const result = await db.query(
      `SELECT username,
                password,
                first_name,
                last_name,
                email,
                phone,
                admin
            FROM users 
            WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new ExpressError("Cannot authenticate", 401);
    }
  }

  /** Returns list of user info:
   *
   * [{username, first_name, last_name, email, phone}, ...]
   *
   * */

  static async getAll(username, password) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                email,
                phone
            FROM users 
            ORDER BY username`
    );
    return result.rows;
  }

  /** Returns user info: {username, first_name, last_name, email, phone}
   *
   * If user cannot be found, should raise a 404.
   *
   **/

  static async get(username) {
    const result = await db.query(
      `SELECT username,
                first_name,
                last_name,
                email,
                phone
         FROM users
         WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (!user) {
      // bug: doesn't throw error
      // new ExpressError("No such user", 404);
      throw new ExpressError("No such user", 404);
    }

    return user;
  }

  /** Selectively updates user from given data.
   *
   * Returns all data about user.
   *
   * If user cannot be found, should raise a 404.
   *
   **/

  static async update(username, data) {
    let { query, values } = sqlForPartialUpdate(
      "users",
      data,
      "username",
      username
    );

    const result = await db.query(query, values);
    const user = result.rows[0];

    if (!user) {
      throw new ExpressError("No such user", 404);
    }

    return user;
  }

  /** Delete user. Returns true.
   *
   * If user cannot be found, should raise a 404.
   *
   **/

  static async delete(username) {
    const result = await db.query(
      "DELETE FROM users WHERE username = $1 RETURNING username",
      [username]
    );
    const user = result.rows[0];

    if (!user) {
      throw new ExpressError("No such user", 404);
    }

    return true;
  }
}

module.exports = User;
