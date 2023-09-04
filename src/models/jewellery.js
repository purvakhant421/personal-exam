const mongoose = require("mongoose");
const jewellerySchema = new mongoose.Schema(
    {
        jewellery_name : {
            type : String,
            trim : true,
        },
        jewellery_price : {
            type : Number,
            default : 0,
        },
        jewellery_material : {
            type : String,
            trim : true,
        },
        jewellery_description : {
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

const Jewellery = mongoose.model("Jewellery" , jewellerySchema);
module.exports = Jewellery;