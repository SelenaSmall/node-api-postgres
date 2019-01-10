const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/node-api-postgres';
const client = new pg.Client(connectionString);
client.connect();

const clientQuery = (queryText) => {
  client.query(queryText)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((err) => {
      console.log(err);
      client.end();
    });
};

// Comments
clientQuery(
  `CREATE TABLE IF NOT EXISTS
    comments(
      id SERIAL PRIMARY KEY, 
      text VARCHAR(40) not null, 
      author VARCHAR(40)
    );
    ALTER TABLE IF EXISTS comments 
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW();`
);

// Users
clientQuery(
  `CREATE TABLE IF NOT EXISTS
    users(
      id SERIAL PRIMARY KEY, 
      email VARCHAR(40) NOT NULL UNIQUE, 
      password VARCHAR(40) NOT NULL,
      is_admin BOOLEAN DEFAULT FALSE
    )`
);
