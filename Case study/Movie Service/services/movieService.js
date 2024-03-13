import { GetMovieRepo, GetMoviesRepo } from "../repository/movieRepository.js";

const GetMoviesSer = async () => {
  let res = await GetMoviesRepo();
  return res;
}

const GetMovieSer = async (paramId) => {
  let res = await GetMovieRepo(paramId);
  if (res == null) {
    throw Error(`Movie does not exists`);
  } else {
    return res;
  }
}

export { GetMovieSer, GetMoviesSer };