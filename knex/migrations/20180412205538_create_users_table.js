exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("email");
    table.string("password");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
