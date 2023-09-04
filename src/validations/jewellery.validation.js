const Joi = require("joi");

/** create Jewellery */
const createJewellery = {
  body: Joi.object().keys({
    jewellery_name: Joi.string().required().trim(),
    jewellery_price: Joi.number().integer().required(),
    jewellery_material: Joi.string().required().trim(),
    jewellery_description: Joi.string().required().trim(),
  }),
};

module.exports = {
    createJewellery
}