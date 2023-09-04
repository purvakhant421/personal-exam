const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema(
    {
        grocery_name : {
            type : String,
            trim : true,
        },
        grocery_product : {
            type : String,
            trim : true,
        },
        grocery_product_price : {
            type : Number,
            default : 0,
        },
        grocery_description : {
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

const Grocery = mongoose.model("Grocery" , grocerySchema);
module.exports = Grocery;