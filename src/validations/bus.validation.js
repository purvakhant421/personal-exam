const Joi = require("joi");

/** create Bus */
const createBus = {
  body: Joi.object().keys({
    bus_name: Joi.string().required().trim(),
    bus_number: Joi.string().required().trim(),
    bus_stop: Joi.string().required().trim(),
    travel_date: Joi.string().required().trim(),
  }),
};

module.exports = {
    createBus
}