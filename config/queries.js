const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || '',
  ssl: process.env.SSL || false,
  host: process.env.PORT || 'localhost',
  database: process.env.DATABASE_URL || 'node-api-postgres'
})

const getComments = (request, response) => {
  pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCommentById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM comments WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createComment = (request, response) => {
  const { text, author } = request.body

  pool.query('INSERT INTO comments(text, author) VALUES ($1, $2)', [text, author], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Comment added with ID: ${result.insertId}`)
  })
}

const updateComment = (request, response) => {
  const id = parseInt(request.params.id)
  const { text, author } = request.body

  pool.query(
    'UPDATE comments SET text = $1, author = $2 WHERE id = $3',
    [text, author, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteComment = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM comments WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
}
