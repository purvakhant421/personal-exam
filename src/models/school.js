const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema(
    {
        school_name : {
            type : String,
            trim : true,
        },
        school_address : {
            type : String,
            trim : true,
        },
        school_time : {
            type : String,
            trim : true,
        },
        standard : {
            type : Number,
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

const School = mongoose.model("School" , schoolSchema);
module.exports = School;