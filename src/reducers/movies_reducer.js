import { FETCH_MOVIES, 
        CLEAR_FETCH_MOVIES, 
        FETCH_ONE_MOVIE,
        CLEAR_ONE_FETCH_MOVIE,
        MOVIE_LIST_LOADING,
        MOVIE_LIST_LOADING_STOP,
        MOVIE_LIST_ERROR   
     } from '../actions/types';

const INITIAL_STATE = { 
    all: null, 
    movie: null, 
    loading: false,
    error: ''
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case MOVIE_LIST_ERROR:
             return {...state, error: action.payload};
        case MOVIE_LIST_LOADING:
             return {...state, loading: true};
        case MOVIE_LIST_LOADING_STOP:
             return {...state, loading: false};
        case CLEAR_FETCH_MOVIES:
             return {...state, all:null};   
        case FETCH_MOVIES:
            return { ...state, all: action.payload.data.results};  
        case FETCH_ONE_MOVIE:
            return {...state, movie: action.payload.data};
        case CLEAR_ONE_FETCH_MOVIE:
            return {...state, movie: null};
        default:
            return state;
    }
}