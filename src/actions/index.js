import axios from 'axios';
import {
    FETCH_MOVIES,
    CLEAR_FETCH_MOVIES,
    FETCH_ONE_MOVIE,
    CLEAR_ONE_FETCH_MOVIE
} from './types';

const ROOT_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5e8e31bfa6009b988f0b5875301bc793&query=';

export function fetchMovies(query) {
    return function(dispatch) {
        axios.get(`${ROOT_URL}${query}`)
         .then(response => dispatch({type: FETCH_MOVIES, payload: response}))
         .catch(err => console.log(err))
    }
    // const request = axios.get('https://api.themoviedb.org/3/movie/550?api_key=5e8e31bfa6009b988f0b5875301bc793');
    // const request = axios.get(`${ROOT_URL}${query}`);
    // return {
    //     type: FETCH_MOVIES,
    //     payload: request
    // };
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

export function fetchOneMovie(id,type) {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=5e8e31bfa6009b988f0b5875301bc793&language=en-US`;
    return function(dispatch) {
        axios.get(url)
         .then(response => dispatch({ type: FETCH_ONE_MOVIE, payload: response}));
    }
    // const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=5e8e31bfa6009b988f0b5875301bc793&language=en-US`;
    // const request = axios.get(url);
    // return {
    //     type: FETCH_ONE_MOVIE,
    //     payload: request
    // };
}