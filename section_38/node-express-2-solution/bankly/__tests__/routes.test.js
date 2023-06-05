// Set ENV VAR to test before we load anything, so our app's config will use
// testing settings

process.env.NODE_ENV = 'test';

const app = require('../app');
const request = require('supertest');
const db = require('../db');
const bcrypt = require('bcrypt');
const createToken = require('../helpers/createToken');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

// tokens for our sample users
const tokens = {};

/** before each test, insert u1, u2, and u3  [u3 is admin] */

beforeEach(async function() {
  async function _pwd(password) {
    return await bcrypt.hash(password, 1);
  }

  let sampleUsers = [
    ['u1', 'fn1', 'ln1', 'email1', 'phone1', await _pwd('pwd1'), false],
    ['u2', 'fn2', 'ln2', 'email2', 'phone2', await _pwd('pwd2'), false],
    ['u3', 'fn3', 'ln3', 'email3', 'phone3', await _pwd('pwd3'), true]
  ];

  for (let user of sampleUsers) {
    await db.query(
      `INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      user
    );
    tokens[user[0]] = createToken(user[0], user[6]);
  }
});

describe("POST /auth/register", function() {
  test("should allow a user to register in", async function() {
    const response = await request(app)
      .post("/auth/register")
      .send({
        username: "new_user",
        password: "new_password",
        first_name: "new_first",
        last_name: "new_last",
        email: "new@newuser.com",
        phone: "1233211221"
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ token: expect.any(String) });

    let { username, admin } = jwt.verify(response.body.token, SECRET_KEY);
    expect(username).toBe("new_user");
    expect(admin).toBe(false);
  });

  test("should not allow a user to register with an existing username", async function() {
    const response = await request(app)
      .post("/auth/register")
      .send({
        username: "u1",
        password: "pwd1",
        first_name: "new_first",
        last_name: "new_last",
        email: "new@newuser.com",
        phone: "1233211221"
      });
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      status: 400,
      message: `There already exists a user with username 'u1'`
    });
  });
});

describe('POST /auth/login', function() {
  it('should allow a correct username/password to log in', async function() {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'u1',
        password: 'pwd1'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ token: expect.any(String) });

    let { username, admin } = jwt.verify(response.body.token, SECRET_KEY);
    expect(username).toBe('u1');
    expect(admin).toBe(false);
  });

  // start: failing-to-login-tests

  it('disallow bad-username to log in', async function() {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'u1',
        password: 'pwd1'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ token: expect.any(String) });
  });

  it('should disallow deny good-user/bad-password to log in', async function() {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'not-a-user',
        password: 'not-the-password'
      });
    expect(response.statusCode).toBe(401);
  });

  // end
});

describe('GET /users', function() {
  it('should deny access if no token provided', async function() {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(401);
  });

  // start: check-signature

  it('should deny access if token signature is wrong', async function() {
    const response = await request(app)
      .get('/users')
      .send({ _token: tokens.u1 + 'bad-addition-to-signature' });
    expect(response.statusCode).toBe(401);
  });

  // end

  // start: better-list-all-users-test

  it('should list all users', async function() {
    const response = await request(app)
      .get('/users')
      .send({ _token: tokens.u1 });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      users: [
        {
          username: 'u1',
          first_name: 'fn1',
          last_name: 'ln1'
        },
        {
          username: 'u2',
          first_name: 'fn2',
          last_name: 'ln2'
        },
        {
          username: 'u3',
          first_name: 'fn3',
          last_name: 'ln3'
        }
      ]
    });
  });

  // end
});

describe('GET /users/[username]', function() {
  it('should deny access if no token provided', async function() {
    const response = await request(app).get('/users/u1');
    expect(response.statusCode).toBe(401);
  });

  it('should return data on u1', async function() {
    const response = await request(app)
      .get('/users/u1')
      .send({ _token: tokens.u1 });
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toEqual({
      username: 'u1',
      first_name: 'fn1',
      last_name: 'ln1',
      email: 'email1',
      phone: 'phone1'
    });
  });

  it('should return 404 if cannot find', async function() {
    const response = await request(app)
      .get('/users/not-a-username')
      .send({ _token: tokens.u1 });
    expect(response.statusCode).toBe(404);
  });
});

describe('PATCH /users/[username]', function() {
  it('should deny access if no token provided', async function() {
    const response = await request(app).patch('/users/u1');
    expect(response.statusCode).toBe(401);
  });

  it('should deny access if not admin/right user', async function() {
    const response = await request(app)
      .patch('/users/u1')
      .send({ _token: tokens.u2 }); // wrong user!
    expect(response.statusCode).toBe(401);
  });

  // start: new-test-for-user-patching-self

  it('should patch data if right user', async function() {
    const response = await request(app)
      .patch('/users/u1')
      .send({ _token: tokens.u1, first_name: 'new-fn1' });
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toEqual({
      username: 'u1',
      first_name: 'new-fn1',
      last_name: 'ln1',
      email: 'email1',
      phone: 'phone1',
      admin: false,
      password: expect.any(String)
    });
  });

  // end

  it('should patch data if admin', async function() {
    const response = await request(app)
      .patch('/users/u1')
      .send({ _token: tokens.u3, first_name: 'new-fn1' }); // u3 is admin
    expect(response.statusCode).toBe(200);
    expect(response.body.user).toEqual({
      username: 'u1',
      first_name: 'new-fn1',
      last_name: 'ln1',
      email: 'email1',
      phone: 'phone1',
      admin: false,
      password: expect.any(String)
    });
  });

  // start: check-legal-fields

  it('should disallowing patching not-allowed-fields', async function() {
    const response = await request(app)
      .patch('/users/u1')
      .send({ _token: tokens.u1, admin: true });
    expect(response.statusCode).toBe(401);
  });

  // end

  it('should return 404 if cannot find', async function() {
    const response = await request(app)
      .patch('/users/not-a-user')
      .send({ _token: tokens.u3, first_name: 'new-fn' }); // u3 is admin
    expect(response.statusCode).toBe(404);
  });
});

describe('DELETE /users/[username]', function() {
  it('should deny access if no token provided', async function() {
    const response = await request(app).delete('/users/u1');
    expect(response.statusCode).toBe(401);
  });

  it('should deny access if not admin', async function() {
    const response = await request(app)
      .delete('/users/u1')
      .send({ _token: tokens.u1 });
    expect(response.statusCode).toBe(401);
  });

  it('should allow if admin', async function() {
    const response = await request(app)
      .delete('/users/u1')
      .send({ _token: tokens.u3 }); // u3 is admin
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'deleted' });
  });

  // start: delete-404-test

  it('should return 404 if cannot find', async function() {
    const response = await request(app)
      .delete('/users/not-a-user')
      .send({ _token: tokens.u3 }); // u3 is admin
    expect(response.statusCode).toBe(404);
  });

  // end
});

afterEach(async function() {
  await db.query('DELETE FROM users');
});

afterAll(function() {
  db.end();
});
