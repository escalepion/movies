import firebase from 'firebase';

import { 
    USER_SIGNUP_FAIL,
    USER_SIGNUP_SUCCESS,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    CLEAR_FORM_ERROR
} from './types';

export function signUpUser({email, password, username}) {
    const db = firebase.database();
    return function (dispatch){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user){
        dispatch({type: USER_SIGNUP_SUCCESS});
        db.ref(`users/${user.uid}`).set({name: username});
        console.log('uid:',user.uid)

  //Here if you want you can sign in the user
})
    .catch(error => {
        const error_message = error.message;
        dispatch({type: USER_SIGNUP_FAIL, payload: error_message});
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

export function userLoggedIn() {
    return {
        type: USER_LOGGED_IN
    };
}
export function userLoggedOut() {
    return function(dispatch) {
        firebase.auth().signOut()
        .then(() => dispatch({type: USER_LOGGED_OUT}))
        .catch(error => console.log(error));
    }
}
export function clearFormError() {
return {
    type: CLEAR_FORM_ERROR
};
}
