const Joi = require("joi");

/** create Grocery */
const createGrocery = {
  body: Joi.object().keys({
    grocery_name: Joi.string().required().trim(),
    grocery_product: Joi.string().required().trim(),
    grocery_product_price: Joi.number().integer().required(),
    grocery_description: Joi.string().required().trim(),
  }),
};

module.exports = {
    createGrocery
}