const { Category } = require("../models");

// category
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

// Get category list
const getCategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Category.find();
};

// Get Category by name
const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};

// Get Category details by id
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

// update Category
const updateDetails = async (categoryId, reqBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: reqBody });
};

// Delete category
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryByName,
    getCategoryById,
    updateDetails,
    deleteCategory
}