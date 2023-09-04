const express = require("express");
const { stationaryValidation } = require("../validations");
const { stationaryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Stationary */
router.post(
  "/create-Stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);
/** Get Stationary list */
router.get(
  "/Stationary-list",
  stationaryController.getStationaryList
);

/** Delete Stationary */
router.delete(
  "/delete-Stationary/:StationaryId",
  stationaryController.deleteStationary
);

/** Update Stationary */
router.put(
  "/update-Stationary/:StationaryId",
  validate(stationaryValidation.createStationary),
  stationaryController.updateStationary
)
module.exports = router;
