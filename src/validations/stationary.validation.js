const Joi = require("joi");

/** create Stationary */
const createStationary = {
  body: Joi.object().keys({
    stationary_name: Joi.string().required().trim(),
    stationary_item: Joi.string().required().trim(),
    stationary_item_price: Joi.number().integer().required(),
    stationary_address: Joi.string().required().trim(),
  }),
};

module.exports = {
    createStationary
}