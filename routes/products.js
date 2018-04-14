const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById
  //   createNewProduct,
  //   updateProduct,
  //   deleteProduct
} = require("../db/DS_Products");
module.exports = router;

router.get("/", (req, res) => {
  getAllProducts()
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.log("Error");
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  getProductById(req.params.id)
    .then(product => {
      if (product) {
        return res.json(product);
      } else {
        return res.json({ message: "Product not found" });
      }
    })
    .catch(err => {
      console.log("Error");
    });
});
