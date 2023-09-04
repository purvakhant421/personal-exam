const express = require("express");
const { productValidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

/** product list */
router.get(
  "/list",
  productController.getProductList
)

router.delete(
  "/delete/:productId",
  productController.deleteProduct
)

router.put(
  "/update-product/:productId",
  productController.updateProduct
)

module.exports = router;