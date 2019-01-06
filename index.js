const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/comments', db.getComments)
app.get('/comments/:id', db.getCommentById)
app.post('/comments', db.createComment)
app.put('/comments/:id', db.updateComment)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
