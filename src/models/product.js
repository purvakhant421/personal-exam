const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        product_name : {
            type : String,
            trim : true,
        },
        product_description : {
            type : String,
            trim : true,
        },
        product_price : {
            type : Number,
            default : 0
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
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

const Product = mongoose.model("Product" , productSchema);
module.exports = Product;