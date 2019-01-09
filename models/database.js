// Run this file to create and update tables in your database
// $ node models/database.js buildTables

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/node-api-postgres';
const client = new pg.Client(connectionString);

const buildTables = () => {
  client.connect();
  createCommentsTable();
  addCreatedAtAndUpdatedAtToCommentsTable();
};

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

const createCommentsTable = () => {
  clientQuery(
    `CREATE TABLE IF NOT EXISTS
      comments(
        id SERIAL PRIMARY KEY, 
        text VARCHAR(40) not null, 
        author VARCHAR(40)
      )`
  );
};

const addCreatedAtAndUpdatedAtToCommentsTable = () => {
  clientQuery(
    `ALTER TABLE IF EXISTS comments 
      ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW(),
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT NOW();`
  );
};

module.exports = {
  buildTables,
};

require('make-runnable');
