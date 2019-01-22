// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/node-api-postgres'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
