//script.js

getMovieGenres().then(henk => {
  const movies = henk;
  setMovieGenres(movies);
  // console.log("hier is je data om iets mee te gaan doen:", henk);
});

const setMovieGenres = function(movieData) {
  const moviesGenres = movieData.genres;
  //console.log(moviesGenres);
  moviesGenres.forEach(movieGenre => {
    const listItem = document.createElement("li");
    const listItemContent = `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`;
    listItem.appendChild(document.createTextNode(listItemContent));
    document.getElementById("movieGenresList").append(listItem);
  });
};
