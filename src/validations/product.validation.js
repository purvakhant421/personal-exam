const Joi = require("joi");

/** create product*/
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_description: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
    category : Joi.string().trim(),
  }),
};

module.exports = {
    createProduct
}