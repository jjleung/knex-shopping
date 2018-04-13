exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", table => {
    table.increments("product_id");
    table.string("title");
    table.text("description");
    table.integer("inventory");
    table.decimal("price", 8, 2);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};
