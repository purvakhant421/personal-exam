const express = require("express");
const { travelValidation } = require("../validations");
const { travelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Travel */
router.post(
  "/create-Travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);
/** Get Travel list */
router.get(
  "/Travel-list",
  travelController.getTravelList
);

/** Delete Travel */
router.delete(
  "/delete-Travel/:TravelId",
  travelController.deleteTravel
);

/** Update Travel */
router.put(
  "/update-Travel/:TravelId",
  validate(travelValidation.createTravel),
  travelController.updateTravel
)
module.exports = router;
