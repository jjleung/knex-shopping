const knex = require("../knex/knex.js");

const getAllProducts = () => {
  return knex.select().table("products");
};

const getProductById = id => {
  return knex
    .select()
    .from("products")
    .where({
      product_id: id
    })
    .then(products => {
      return products[0];
    });
};

module.exports = {
  getAllProducts,
  getProductById
  //   createNewProduct,
  //   updateProduct,
  //   deleteProduct
};
