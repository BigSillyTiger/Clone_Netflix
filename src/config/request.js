const API_KEY = "4467ca68399159811ca6b79fb9fea630";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const logo1 = {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158",
    alt: "Netflix Logo",
};

export const logo2 = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmkPWc6K2mtHvAOOWdXqTdCO2riSJ9knK1_J8UqQ&s",
    alt: "avatar",
};

export const img_url = "https://image.tmdb.org/t/p/original/";

export default requests;
