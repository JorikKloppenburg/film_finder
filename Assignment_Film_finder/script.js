const galleryUl = document.getElementById("movies");

const getUl = document.getElementById("movies").getElementsByTagName("ul")[0];

const filmFilter = movies.map(function (movies) {
    return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
        '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
}).join('') + '</ul>';

// default
getUl.innerHTML = movies.map(function () {
    return filmFilter;
})

// filter for new movies
document.getElementById("new-movies").addEventListener("change", function () {
    getUl.innerHTML = movies.filter((movie) => {

        return movie.year >= "2014";
    }).map((movies) => {

        return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
            '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
    }).join('') + '</ul>';
})

// filter for avenger movies
document.getElementById("avenger").addEventListener("change", function () {
    getUl.innerHTML = movies.filter((movie) => {

        const nameFilter = movie.title.includes("Avenger");

        return nameFilter;
    }).map((movies) => {

        return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
            '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
    }).join('') + '</ul>';
})

// filter for x-men movies
document.getElementById("x-Men").addEventListener("change", function () {
    getUl.innerHTML = movies.filter((movie) => {

        const nameFilter1 = movie.title.includes("X-Men");

        return nameFilter1;
    }).map((movies) => {

        return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
            '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
    }).join('') + '</ul>';
})

// filter for princess movies
document.getElementById("princess").addEventListener("change", function () {
    getUl.innerHTML = movies.filter((movie) => {

        const nameFilter2 = movie.title.includes("Princess");

        return nameFilter2;
    }).map((movies) => {

        return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
            '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
    }).join('') + '</ul>';
})

// filter for batman movies
document.getElementById("batman").addEventListener("change", function () {
    getUl.innerHTML = movies.filter((movie) => {

        const nameFilter3 = movie.title.includes("Batman");

        return nameFilter3;
    }).map((movies) => {

        return '<li>' + '<a href="https://www.imdb.com/title/' + movies.imdbID +
            '">' + '<img src= ' + movies.poster + '>' + '</img>' + '</a>' + '</li>';
    }).join('') + '</ul>';
})







