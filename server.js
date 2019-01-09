const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const db = require('./config/queries');
const cors = require('./config/cors');

app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API - WOOHOO' })
})

app.get('/comments', db.getComments)
app.get('/comments/:id', db.getCommentById)
app.post('/comments', db.createComment)
app.put('/comments/:id', db.updateComment)
app.delete('/comments/:id', db.deleteComment)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
