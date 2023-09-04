const { Movie } = require("../models");

// Create Movie
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

// Get Movie list
const getMovieList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Movie.find();
  // return Movie.find({$or:[{movie_director:"James Cameron"},{movie_title:"Pulp Fiction"}]});
};

// Get Movie details by id
const getMovieById = async (MovieId) => {
  return Movie.findById(MovieId);
};

// Delete Movie
const deleteMovie = async (MovieId) => {
  return Movie.findByIdAndDelete(MovieId);
};

// Update Movie
const updateMovie = async (MovieId,reqBody) => {
  return Movie.findByIdAndUpdate(MovieId,{$set:reqBody});
};
module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie,
    updateMovie
};