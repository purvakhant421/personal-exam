const mongoose = require("mongoose");
const busSchema = new mongoose.Schema(
    {
        bus_name : {
            type : String,
            trim : true,
        },
        bus_number : {
            type : String,
            trim : true,
        },
        bus_stop : {
            type : String,
            trim : true,
        },
        travel_date : {
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

const Bus = mongoose.model("Bus" , busSchema);
module.exports = Bus;