const express = require("express");
const { schoolValidation } = require("../validations");
const { schoolController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create School */
router.post(
  "/create-School",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);
/** Get School list */
router.get(
  "/School-list",
  schoolController.getSchoolList
);

/** Delete School */
router.delete(
  "/delete-School/:SchoolId",
  schoolController.deleteSchool
);

/** Update School */
router.put(
  "/update-School/:SchoolId",
  validate(schoolValidation.createSchool),
  schoolController.updateSchool
)
module.exports = router;
