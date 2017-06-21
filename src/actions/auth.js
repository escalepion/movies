import firebase from 'firebase';

export function signUpUser({email, password}) {
    return function (dispatch){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
        console.log('error message: ', error.message, ' error code: ' , error.code);
    });
    }
}
