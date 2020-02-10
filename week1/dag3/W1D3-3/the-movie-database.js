var favoriteMovie = {
    title: 'The stars from 2',
    duration: 90,
    stars: ['Henk', 'Bart', 'Mathijs']
}

function theMovieDatabase(movie) {
    return(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars ' + movie.stars.join(', '))
}

console.log(theMovieDatabase(favoriteMovie))