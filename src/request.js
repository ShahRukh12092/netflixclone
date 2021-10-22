const APIKEY = "0edf80f1cc1d97da3e43caa2405b3088";
/*
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&language=en-US&networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchSciencefictionmovies: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
  fetch2021Movies: `/movie/top_rated?api_key=${APIKEY}&language=en-US&primary_release_year=2021&sort_by=vote_average.desc`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
*/
const requests = [
  {
    id: 1,
    title: "Netflix Originals",
    islarge: true,
    link: `/discover/tv?api_key=${APIKEY}&language=en-US&networks=213`,
  },
  {
    id: 2,
    title: "Trending",
    islarge: false,
    link: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  },
  {
    id: 3,
    title: "Top Rated",
    islarge: false,
    link: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  },
  {
    id: 4,
    title: "2021 Popular Movies",
    islarge: false,
    link: `/movie/top_rated?api_key=${APIKEY}&language=en-US&primary_release_year=2021&sort_by=vote_average.desc`,
  },
  {
    id: 5,
    title: "Action Movies",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  },
  {
    id: 6,
    title: "Science Fiction Movies",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
  },
  {
    id: 7,
    title: "Horror Movies",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  },
  {
    id: 8,
    title: "Romantic Movies",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  },
  {
    id: 9,
    title: "Comedy Movies",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  },
  {
    id: 10,
    title: "Documentaries",
    islarge: false,
    link: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  },
];
export default requests;
