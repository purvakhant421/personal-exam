const { Music } = require("../models");

// Create Music
const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

// Get Music list
const getMusicList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Music.find();
  // return Music.find({music_release_year:{$lt:"2010"}});
};

// Get Music details by id
const getMusicById = async (MusicId) => {
  return Music.findById(MusicId);
};

// Delete Music
const deleteMusic = async (MusicId) => {
  return Music.findByIdAndDelete(MusicId);
};

// Update Music
const updateMusic = async (MusicId,reqBody) => {
  return Music.findByIdAndUpdate(MusicId,{$set:reqBody});
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicById,
    deleteMusic,
    updateMusic
};