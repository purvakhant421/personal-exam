const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema(
    {
        hotel_name : {
            type : String,
            trim : true,
        },
        hotel_address : {
            type : String,
            trim : true,
        },
        hotel_description : {
            type : String,
            trim : true,
        },
        room_Price: {
            type: Number,
            default: 0,
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

const Hotel = mongoose.model("Hotel" , hotelSchema);
module.exports = Hotel;