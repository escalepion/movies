import { FETCH_MOVIES, 
        CLEAR_FETCH_MOVIES, 
        FETCH_ONE_MOVIE,
        CLEAR_ONE_FETCH_MOVIE    
     } from '../actions/index';

const INITIAL_STATE = { all: [], movie: null};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case CLEAR_FETCH_MOVIES:
             return {...state, all:[]};   
        case FETCH_MOVIES:
            return { ...state, all: action.payload.data.results};  
        case FETCH_ONE_MOVIE:
            return {...state, movie: action.payload.data};
        case CLEAR_ONE_FETCH_MOVIE:
            return {...state, movie: null}
        default:
            return state;
    }
}