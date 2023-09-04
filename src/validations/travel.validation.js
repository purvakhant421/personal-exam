const Joi = require("joi");

/** create Travel */
const createTravel = {
  body: Joi.object().keys({
    travel_destination: Joi.string().required().trim(),
    travel_Startdate: Joi.string().required().trim(),
    travel_Enddate: Joi.string().required().trim(),
    travel_by: Joi.string().required().trim(),
  }),
};

module.exports = {
    createTravel
}