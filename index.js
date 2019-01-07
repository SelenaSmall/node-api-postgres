const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const db = require('./queries');
const cors = require('./cors');

app.use(cors());

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

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
