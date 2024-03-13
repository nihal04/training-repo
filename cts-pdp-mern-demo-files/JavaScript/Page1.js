const SearchMovie = () => {
    const moviename = document.getElementById('moviename').value;
    fetch(`http://www.omdbapi.com/?apikey=8266bbff&t=${moviename}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // const title = document.createElement('h1');
            // title.innerText = data.Title;
            // document.getElementById('movie').appendChild(title);
            // document.getElementById('title').innerText = data.Title;
            // document.getElementById('actors').innerText = data.Actors;
            document.querySelector('.card-img-top').src = data.Poster;
            document.querySelector('.card-title').innerHTML = data.Title;
            document.querySelector('.card-text').innerHTML = data.Actors;

        });
}

document.getElementById('submitBtn').addEventListener('click', SearchMovie);