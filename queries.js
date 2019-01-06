const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'node-api-postgres',
})

const getComments = (request, response) => {
  pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { text, author } = request.body

  pool.query('INSERT INTO comments (text, author) VALUES ($1, $2)', [text, author], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Comment added with ID: ${results.insertId}`)
})
}

module.exports = {
  getComments,
  createComment
}
