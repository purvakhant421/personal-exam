const { Grocery } = require("../models");

// Create Grocery
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

// Get Grocery list
const getGroceryList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Grocery.find();
  // return Grocery.find({$or:[{grocery_product:"Apple"},{grocery_name:"CVC"}]});
};

// Get Grocery details by id
const getGroceryById = async (GroceryId) => {
  return Grocery.findById(GroceryId);
};

// Delete Grocery
const deleteGrocery = async (GroceryId) => {
  return Grocery.findByIdAndDelete(GroceryId);
};

// Update Grocery
const updateGrocery = async (GroceryId,reqBody) => {
  return Grocery.findByIdAndUpdate(GroceryId,{$set:reqBody});
};

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryById,
    deleteGrocery,
    updateGrocery

};