import firebase from 'firebase';
import {
    ADD_COMMENT_FEEDBACK
} from './types';

export function addComment ({comment}, id) {
    const { currentUser } = firebase.auth();
    console.log(id);
    if(currentUser) {
    return (dispatch) => {
        firebase.database().ref(`comments/${id}`)
        .push({
            comment,
            userId: currentUser.uid
        })
        .then(dispatch({ type: ADD_COMMENT_FEEDBACK, payload: 'Succesfully created'}))
        .catch(error => {
            dispatch({ type: ADD_COMMENT_FEEDBACK});
        });
    }
}
return {
    type: ADD_COMMENT_FEEDBACK,
    payload: 'Please log in'
}
}
