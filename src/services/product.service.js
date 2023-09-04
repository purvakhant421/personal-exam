const { Product } = require("../models");

// product
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

// Get Product list
const getProductList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Product.find({$or:[{is_active:true},{product_price:200}]});
};

// Get Product by name
const getProductByName = async (product_name) => {
  return Product.findOne({ product_name });
};

// Get Product details by id
const getProductById = async (productId) => {
  return Product.findById(productId);
};

// update product
const updateDetails = async (productId, reqBody) => {
  return Product.findByIdAndUpdate(productId, { $set: reqBody });
};

// Delete product
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

module.exports = {
    createProduct,
    getProductList,
    getProductByName,
    getProductById,
    updateDetails,
    deleteProduct
}