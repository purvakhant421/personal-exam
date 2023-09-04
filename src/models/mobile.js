const mongoose = require("mongoose");
const mobileSchema = new mongoose.Schema(
    {
        mobile_shop_name : {
            type : String,
            trim : true ,
        },
        mobile_model_name : {
            type : String,
            trim : true,
        },
        mobile_des : {
            type : String,
            trim : true,
        },
        mobile_price : {
            type : Number,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
},
{
    timestamps : true,
    versionKey : false,
}
);
const Mobile = mongoose.model("Mobile" , mobileSchema);
module.exports = Mobile;