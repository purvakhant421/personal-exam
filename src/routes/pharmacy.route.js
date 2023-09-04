const express = require("express");
const { pharmacyValidation } = require("../validations");
const { pharmacyController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Pharmacy */
router.post(
  "/create-Pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);
/** Get Pharmacy list */
router.get(
  "/Pharmacy-list",
  pharmacyController.getPharmacyList
);

/** Delete Pharmacy */
router.delete(
  "/delete-Pharmacy/:PharmacyId",
  pharmacyController.deletePharmacy
);

/** Update Pharmacy */
router.put(
  "/update-Pharmacy/:PharmacyId",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.updatePharmacy
)
module.exports = router;
