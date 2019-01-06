const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/node-api-postgres';

const client = new pg.Client(connectionString);
client.connect();

// Create table in your database
const query = client.query(
  'CREATE TABLE comments(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, author VARCHAR(40))');
query.on('end', () => { client.end(); });
