const express = require("express");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Movie */
router.post(
  "/create-Movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);
/** Get Movie list */
router.get(
  "/Movie-list",
  movieController.getMovieList
);

/** Delete Movie */
router.delete(
  "/delete-Movie/:MovieId",
  movieController.deleteMovie
);

/** Update Movie */
router.put(
  "/update-Movie/:MovieId",
  validate(movieValidation.createMovie),
  movieController.updateMovie
)
module.exports = router;
