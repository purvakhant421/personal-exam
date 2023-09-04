const { Travel } = require("../models");

// Create Travel
const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

// Get Travel list
const getTravelList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Travel.find();
  // return Travel.find({$or:[{travel_by:"Airplane"},{travel_destination:"surat"}]});
};

// Get Travel details by id
const getTravelById = async (TravelId) => {
  return Travel.findById(TravelId);
};

// Delete Travel
const deleteTravel = async (TravelId) => {
  return Travel.findByIdAndDelete(TravelId);
};

// Update Travel
const updateTravel = async (TravelId,reqBody) => {
  return Travel.findByIdAndUpdate(TravelId,{$set:reqBody});
};

module.exports = {
    createTravel,
    getTravelList,
    getTravelById,
    deleteTravel,
    updateTravel
};