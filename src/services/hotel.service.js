const { Hotel } = require("../models");

// Create Hotel
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

// Get Hotel list
const getHotelList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Hotel.find();
  // return Hotel.find({$or:[{room_Price:300}]});
};

// Get Hotel details by id
const getHotelById = async (HotelId) => {
  return Hotel.findById(HotelId);
};

// Delete Hotel
const deleteHotel = async (HotelId) => {
  return Hotel.findByIdAndDelete(HotelId);
};

// Update Hotel
const updateHotel = async (HotelId,reqBody) => {
  return Hotel.findByIdAndUpdate(HotelId,{$set:reqBody});
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelById,
    deleteHotel,
    updateHotel
};