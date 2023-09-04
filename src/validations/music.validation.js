const Joi = require("joi");

/** create Music */
const createMusic = {
  body: Joi.object().keys({
    music_title: Joi.string().required().trim(),
    music_artist: Joi.string().required().trim(),
    music_album: Joi.string().required().trim(),
    music_release_year: Joi.string().required().trim(),
    music_duration_time: Joi.string().required().trim(),
  }),
};

module.exports = {
    createMusic
}