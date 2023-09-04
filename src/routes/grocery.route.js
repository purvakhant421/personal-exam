const express = require("express");
const { groceryValidation } = require("../validations");
const { groceryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Grocery */
router.post(
  "/create-Grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);
/** Get Grocery list */
router.get(
  "/Grocery-list",
  groceryController.getGroceryList
);

/** Delete Grocery */
router.delete(
  "/delete-Grocery/:GroceryId",
  groceryController.deleteGrocery
);

/** Update Grocery */
router.put(
  "/update-Grocery/:GroceryId",
  validate(groceryValidation.createGrocery),
  groceryController.updateGrocery
);

module.exports = router;
