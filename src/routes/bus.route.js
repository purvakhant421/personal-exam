const express = require("express");
const { busValidation } = require("../validations");
const { busController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Bus */
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);
/** Get Bus list */
router.get(
  "/bus-list",
  busController.getBusList
);

/** Delete Bus */
router.delete(
  "/delete-bus/:busId",
  busController.deleteBus
);

/** Update Bus */
router.put(
  "/update-bus/:busId",
  validate(busValidation.createBus),
  busController.updateBus
)
module.exports = router;
