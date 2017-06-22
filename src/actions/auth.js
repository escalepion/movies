import firebase from 'firebase';

import { 
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_LOGGED_IN
} from './types';

export function signUpUser({email, password}) {
    return function (dispatch){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => dispatch({type: USER_SIGNUP_SUCCESS}))
    .catch(error => {
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
    });
    }
}

export function signInUser({email, password}) {
    return function (dispatch) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => dispatch({type: USER_LOGGED_IN}))
        .catch(error => {
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
             });
    }
}

