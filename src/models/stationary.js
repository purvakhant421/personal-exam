const mongoose = require("mongoose");
const stationarySchema = new mongoose.Schema(
    {
        stationary_name : {
            type : String,
            trim : true,
        },
        stationary_item : {
            type : String,
            trim : true,
        },
        stationary_item_price : {
            type : Number,
            default : 0,
        },
        stationary_address : {
            type : String,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Stationary = mongoose.model("Stationary" , stationarySchema);
module.exports = Stationary;