const { movieService } = require("../services");

/** create movie */
const createMovie = async (req, res) => {
  try {
    const reqBody = req.body;

    // const movieExists = await movieService.getMovieByEmail(reqBody.email);
    // if (movieExists) {
    //   throw new Error("Movie already created by this email!");
    // }

    const movie = await movieService.createMovie(reqBody);
    if (!movie) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Movie create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get movie list */
const getMovieList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { movie_name: { $regex: search, $options: "i" } },
        { movie_cast : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await movieService.getMovieList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get movie list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete movie */
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.MovieId;
    const movieExists = await movieService.getMovieById(movieId);
    if (!movieExists) {
      throw new Error("Movie not found!");
    }
    await movieService.deleteMovie(movieId);

    res.status(200).json({
      success: true,
      message: "Movie delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update movie */
const updateMovie = async (req, res) => {
  try {
    const reqBody = req.body;
    const movieId = req.params.movieId;
    const movieExists = await movieService.getMovieById(movieId);
    if (!movieExists) {
      throw new Error("movie not found!");
    }
    await movieService.updateMovie(movieId,reqBody);

    res.status(200).json({
      success: true,
      message: "movie update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMovie,
  getMovieList,
  deleteMovie,
  updateMovie
};