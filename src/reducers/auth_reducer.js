import {
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_LOGGED_IN
} from '../actions/types';

const INITIAL_STATE = {
    error: null,
    userLogged: false
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case USER_LOGGED_IN:
            return {...state, userLogged: true};
        case USER_SIGNUP_FAIL:
            return {...state, error: action.payload};
        case USER_SIGNUP_SUCCESS:
            return {...state, error: 'Created account successfully'};
        default:
         return state;
    }
}  