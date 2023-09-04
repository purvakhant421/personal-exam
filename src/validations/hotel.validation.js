const Joi = require("joi");

/** create Hotel */
const createHotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_address: Joi.string().required().trim(),
    hotel_description: Joi.string().required().trim(),
    room_Price: Joi.number().integer().required(),
  }),
};

module.exports = {
    createHotel
}