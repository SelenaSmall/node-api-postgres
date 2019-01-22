exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', t  => {
    t.increments('id').unsigned().primary();
    t.string('text').notNull();
    t.string('author').notNull();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
