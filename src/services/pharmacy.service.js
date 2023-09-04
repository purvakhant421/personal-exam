const { Pharmacy } = require("../models");

// Create Pharmacy
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

// Get Pharmacy list
const getPharmacyList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
   return Pharmacy.find();
  // return Pharmacy.find({pharmacy_product_price:{$gt:120}});
};

// Get Pharmacy details by id
const getPharmacyById = async (PharmacyId) => {
  return Pharmacy.findById(PharmacyId);
};

// Delete Pharmacy
const deletePharmacy = async (PharmacyId) => {
  return Pharmacy.findByIdAndDelete(PharmacyId);
};

// update Pharmacy
const updatePharmacy = async (PharmacyId,reqBody) => {
  return Pharmacy.findByIdAndUpdate(PharmacyId,{$set:reqBody});
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyById,
    deletePharmacy,
    updatePharmacy
};