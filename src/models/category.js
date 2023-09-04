const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        category_name : {
            type : String,
            trim : true,
        },
        category_description : {
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

const Category = mongoose.model("Category" , categorySchema);
module.exports = Category;