const Joi = require("joi");

/** create Movie */
const createMovie = {
  body: Joi.object().keys({
    movie_title: Joi.string().required().trim(),
    movie_director: Joi.string().required().trim(),
    movie_cast: Joi.string().required().trim(),
    movie_release_date: Joi.string().required().trim(),
    movie_duration_time: Joi.string().required().trim(),
  }),
};

module.exports = {
    createMovie
}