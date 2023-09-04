const express = require("express");
const { musicValidation } = require("../validations");
const { musicController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Music */
router.post(
  "/create-Music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);

/** Get Music list */
router.get(
  "/Music-list",
  musicController.getMusicList
);

/** Delete Music */
router.delete(
  "/delete-Music/:MusicId",
  musicController.deleteMusic
);

/** Update Music */
router.put(
  "/update-Music/:MusicId",
  validate(musicValidation.createMusic),
  musicController.updateMusic
)
module.exports = router;
