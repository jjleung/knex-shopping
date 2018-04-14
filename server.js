const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const knex = require("./knex/knex.js");

const users = require("./routes/users");
const products = require("./routes/products");
// const cart = require("./routes/cart");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(users);
app.use("/products", products);
// app.use(cart);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
