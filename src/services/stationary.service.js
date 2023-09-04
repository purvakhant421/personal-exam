const { Stationary } = require("../models");

// Create Stationary
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

// Get Stationary list
const getStationaryList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Stationary.find();
  // return Stationary.find({$or:[{stationary_address:"555 Art Street"}]});
};

// Get Stationary details by id
const getStationaryById = async (StationaryId) => {
  return Stationary.findById(StationaryId);
};

// Delete Stationary
const deleteStationary = async (StationaryId) => {
  return Stationary.findByIdAndDelete(StationaryId);
};

// Update Stationary
const updateStationary = async (StationaryId,reqBody) => {
  return Stationary.findByIdAndUpdate(StationaryId,{$set:reqBody});
};

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryById,
    deleteStationary,
    updateStationary
};