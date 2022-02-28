const APIKEY = "3f337f13301ce2fafa77541f1e97624e";
// const request ={fetchTrending:"https://api.themoviedb.org/3/trending/all/day?api_key=3f337f13301ce2fafa77541f1e97624e",
// fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=3f337f13301ce2fafa77541f1e97624e&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01",
// fetchTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=3f337f13301ce2fafa77541f1e97624e"
// }

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchTopActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchTopComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchTopHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchTopRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchTopDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
