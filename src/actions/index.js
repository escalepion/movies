import axios from 'axios';
import {
    FETCH_MOVIES,
    CLEAR_FETCH_MOVIES,
    FETCH_ONE_MOVIE,
    CLEAR_ONE_FETCH_MOVIE,
    MOVIE_LIST_LOADING,
    MOVIE_LIST_LOADING_STOP,
    MOVIE_LIST_ERROR
} from './types';

const ROOT_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5e8e31bfa6009b988f0b5875301bc793&query=';

export function fetchMovies(query) {
    return function(dispatch) {
        dispatch(movieListLoading(true));
        axios.get(`${ROOT_URL}${query}`)
         .then( function (response) {
             dispatch({type: FETCH_MOVIES, payload: response});
             dispatch(movieListLoading(false));
            })
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

export function movieListLoading (status) {
    if(status) {
        return {type: MOVIE_LIST_LOADING};
    }

    return {
        type: MOVIE_LIST_LOADING_STOP
    };
}

export function movieListError (error) {
    return {
        type: MOVIE_LIST_ERROR,
        payload: error
    };
}