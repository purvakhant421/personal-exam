const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
    {
        music_title : {
            type : String,
            trim : true,
        },
        music_artist : {
            type : String,
            trim : true,
        },
        music_album : {
            type : String,
            trim : true,
        },
        music_release_year : {
            type : String,
            trim : true,
        },
        music_duration_time : {
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

const Music = mongoose.model("Music" , musicSchema);
module.exports = Music;