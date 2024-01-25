// const API_KEY="55c896359c64d756d10940c8aff262c75";
const API_KEY=process.env.REACT_APP_API_KEY;
const requests={
fetchTrending:`/ternding/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOrigionals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28 `,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchTvShow:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
}
export default requests;




// https://api.themoviedb.org/3tv/popular?api_key=5c896359c64d756d10940c8aff262c75&language=en-US&page=1