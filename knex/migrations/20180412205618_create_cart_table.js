exports.up = function(knex, Promise) {
  return knex.schema.createTable("cart", table => {
    table.increments("cart_id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user_id", "products");
    table.integer("product_id").unsigned();
    table.foreign("product_id").references("product_id", "products");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cart");
};
