import { GetMovieSer, GetMoviesSer } from "../services/movieService.js";

const GetMovies = async (req, res) => {
  res.status(200).send(await GetMoviesSer());
}

const GetMovie = async (req, res) => {
  try {
    let result = await GetMovieSer(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({status: 404, message: err.message});
  }
}

export { GetMovie, GetMovies };