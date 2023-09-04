const { Bus } = require("../models");

// Create bus
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

// Get bus list
const getBusList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Bus.find();
  // return Bus.find({$or:[{bus_number:"ES123"},{bus_number:"MT789"}]});
};

// Get bus details by id
const getBusById = async (busId) => {
  return Bus.findById(busId);
};

// Delete bus
const deleteBus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
};

// Update bus
const updateBus = async (busId,reqBody) => {
  return Bus.findByIdAndUpdate(busId,{$set:reqBody});
};

module.exports = {
    createBus,
    getBusList,
    getBusById,
    deleteBus,
    updateBus
};