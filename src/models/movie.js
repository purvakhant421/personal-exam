const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
        movie_title : {
            type : String,
            trim : true,
        },
        movie_director : {
            type : String,
            trim : true,
        },
        movie_cast : {
            type : String,
            trim : true,
        },
        movie_release_date : {
            type : String,
            trim : true,
        },
        movie_duration_time : {
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

const Movie = mongoose.model("Movie" , movieSchema);
module.exports = Movie;