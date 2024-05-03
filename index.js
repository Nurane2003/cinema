const apiKey = '3e367690'

const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const card = document.querySelector('.card');

async function movies(url) {
    try {
        const response = await fetch(url)
        // console.log(response);
        const data = await response.json()
        // console.log(data);
        movieInfo(data);
        // card.innerHTML = '';

        // if (data.Search && data.Search.length > 0) {
        //     data.Search.forEach(media => {
        //         const movieCard = createMovieCard(media);
        //         // card.appendChild(movieCard);
        //     });
        // } else {
        //     card.innerHTML = '<p>No movies found</p>';
        // }
    } catch (error) {
        console.log(error);
    }
};



function act(searchInput) {
    const film = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`
    movies(film);
    // console.log(film ,'film');
};


function movieInfo(media) {
    console.log(media)

  card.innerHTML = ''

    for (let film of media.Search) {
        const movieCard = document.createElement('div');
    
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
    <h2>${film.Title}</h2>
    <p>${film.Year}</p>
    <img src="${film.Poster}" alt="${film.Title} Poster">
`;
card.appendChild(movieCard)
    }





}


searchBtn.addEventListener('click', function () {
    //  console.log('click');
    act(searchInput.value);

    // card.style.display="block"
});