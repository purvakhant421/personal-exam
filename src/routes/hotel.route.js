const express = require("express");
const { hotelValidation } = require("../validations");
const { hotelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Hotel */
router.post(
  "/create-Hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);
/** Get Hotel list */
router.get(
  "/Hotel-list",
  hotelController.getHotelList
);

/** Delete Hotel */
router.delete(
  "/delete-Hotel/:HotelId",
  hotelController.deleteHotel
);

/** Update Hotel */
router.put(
  "/update-Hotel/:HotelId",
  validate(hotelValidation.createHotel),
  hotelController.updateHotel
)
module.exports = router;
