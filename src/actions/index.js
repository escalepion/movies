import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CLEAR_FETCH_MOVIES = 'CLEAR_FETCH_MOVIES';
export const FETCH_ONE_MOVIE = 'FETCH_ONE_MOVIE';
export const CLEAR_ONE_FETCH_MOVIE = 'CLEAR_ONE_FETCH_MOVIE';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=5e8e31bfa6009b988f0b5875301bc793&query=';

export function fetchMovies(query) {
    // const request = axios.get('https://api.themoviedb.org/3/movie/550?api_key=5e8e31bfa6009b988f0b5875301bc793');
    const request = axios.get(`${ROOT_URL}${query}`);
    return {
        type: FETCH_MOVIES,
        payload: request
    };
}

export function clearFetchMovies() {
    return {
        type: CLEAR_FETCH_MOVIES
    }
}
export function clearOneFetchMovie() {
    return {
        type: CLEAR_ONE_FETCH_MOVIE
    }
}

export function fetchOneMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5e8e31bfa6009b988f0b5875301bc793&language=en-US`;
    const request = axios.get(url);
    return {
        type: FETCH_ONE_MOVIE,
        payload: request
    };
}