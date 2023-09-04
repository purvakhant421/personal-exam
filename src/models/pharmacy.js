const mongoose = require("mongoose");
const pharmacySchema = new mongoose.Schema(
    {
        pharmacy_name : {
            type : String,
            trim : true,
        },
        pharmacy_product : {
            type : String,
            trim : true,
        },
        pharmacy_product_price : {
            type : Number,
            default : 0,
        },
        pharmacy_address : {
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

const Pharmacy = mongoose.model("Pharmacy" , pharmacySchema);
module.exports = Pharmacy;