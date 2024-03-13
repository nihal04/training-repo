//import model from "../models/model.js"

const GetMoviesRepo = async () => {
    return await fetch('https://dummyapi.online/api/movies')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

const GetMovieRepo = async (paramId) => {
    return await fetch(`https://www.omdbapi.com/?${paramId}`)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

export { GetMovieRepo, GetMoviesRepo };