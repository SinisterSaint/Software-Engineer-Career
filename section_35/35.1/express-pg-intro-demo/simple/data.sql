DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    type text NOT NULL
);

INSERT INTO users (name, type) VALUES ('Juanita', 'admin');
INSERT INTO users (name, type) VALUES ('Jenny', 'staff');
INSERT INTO users (name, type) VALUES ('Jeff', 'user');
