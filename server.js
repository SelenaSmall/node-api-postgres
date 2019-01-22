const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

// const knex = require('knex');
// const knexDb = knex({ client: 'pg', connection: 'postgres://localhost/node-api-postgres' });
// const bookshelf = require('bookshelf');
// const securePassword = require('bookshelf-secure-password');
// const db = bookshelf(knexDb);
// db.plugin(securePassword);

const port = process.env.PORT || 5000;
const queries = require('./config/queries');
const cors = require('./config/cors');

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API - WOOHOO' })
});

app.get('/comments', queries.getComments);
app.get('/comments/:id', queries.getCommentById);
app.post('/comments', queries.createComment);
app.put('/comments/:id', queries.updateComment);
app.delete('/comments/:id', queries.deleteComment);

// TODO: create_users migration with knex
// app.get('/users', queries.getUsers);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
