const express = require("express");
const { mobileValidation } = require("../validations");
const { mobileController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Mobile */
router.post(
  "/create-mobile",
  validate(mobileValidation.createMobile),
  mobileController.createMobile
);

/** Get Mobile list */
router.get(
  "/mobile-list",
  mobileController.getMobileList
);

/** Delete Mobile */
router.delete(
  "/delete-mobile/:mobileId",
  mobileController.deleteMobile
);

/** Update Mobile */
router.put(
  "/update-mobile/:mobileId",
  validate(mobileValidation.createMobile),
  mobileController.updateMobile
);

/** Update Mobile status */
router.put(
    "/update-status/:mobileId",
    validate(mobileValidation.createMobile),
    mobileController.updateMobileStatus
);

module.exports = router;
