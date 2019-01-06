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

module.exports = {
  getComments
}
