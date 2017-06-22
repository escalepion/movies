import {
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {error: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case USER_SIGNUP_FAIL:
            return {...state, error: action.payload};
        case USER_SIGNUP_SUCCESS:
            return {...state, error: 'Created account successfully'};
        default:
         return state;
    }
}  