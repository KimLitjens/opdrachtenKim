const API_KEY = "2a34a2bbb57d7b6a8dee0f7f4848dc06";

const getMovieGenres = async function() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  try {
    const result = await fetch(apiUrl, {
      method: "GET"
    });
    data = await result.json();
    // console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
