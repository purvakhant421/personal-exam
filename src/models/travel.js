const mongoose = require("mongoose");
const travelSchema = new mongoose.Schema(
    {
        travel_destination : {
            type : String,
            trim : true,
        },
        travel_Startdate : {
            type : String,
            trim : true,
        },
        travel_Enddate : {
            type : String,
            trim : true,
        },
        travel_by : {
            type : String,
            trim : true,
        },
        bus: {
            type: mongoose.Types.ObjectId,
            ref: "Bus",
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

const Travel = mongoose.model("Travel" , travelSchema);
module.exports = Travel;