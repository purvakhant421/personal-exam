const Joi = require("joi");

// create Mobile
const createMobile = {
    body : Joi.object().keys({
        mobile_shop_name : Joi.string().required().trim(),
        mobile_model_name : Joi.string().required().trim(),
        mobile_des : Joi.string().required().trim(),
        mobile_price : Joi.number().required(),
    })
}
module.exports={
    createMobile
}