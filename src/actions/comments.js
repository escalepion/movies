import firebase from 'firebase';
import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS,
    INJECT_MOVIE_COMMENT
} from './types';

export function addComment ({comment}, id) {
    const { currentUser } = firebase.auth();
    const date = Date.now();
    if(currentUser) {
    return (dispatch) => {
        firebase.database().ref(`comments/${id}`)
        .push({
            comment,
            userId: currentUser.uid,
            date
        })
        .then( function () {
            dispatch({ type: ADD_COMMENT_FEEDBACK, payload: 'Comment Added Successfuly'});
//             setTimeout(() => {
//     dispatch({ type: RESET_FEEDBACK_STATUS })
//   }, 3000);
    }
        )
        .then(setTimeout(() => {
                dispatch({ type: RESET_FEEDBACK_STATUS })
            }, 3000))
        .catch(error => {
            dispatch({ type: ADD_COMMENT_FEEDBACK, payload: error})
        });
    }
}
return {
    type: ADD_COMMENT_FEEDBACK,
    payload: 'Please log in'
}
}

export function resetFeedbackStatus () {
    return {
        type: RESET_FEEDBACK_STATUS
    }
}

export function fetchMovieComments (id) {
    const ref = firebase.database().ref(`comments/${id}`);
    return (dispatch) => {
        ref.orderByChild('date').on('child_added', function(snapshot) {
            const commentData = snapshot.val();
            commentData.uid = snapshot.key;
            const userRef = firebase.database().ref(`users/${snapshot.val().userId}`);
                    userRef.once('value', function(snap) {
                    commentData.name = snap.val().name;            
                    }).catch(err => console.log(err));
            dispatch({ type: INJECT_MOVIE_COMMENT, payload: commentData });
            dispatch({ type: FETCH_MOVIE_COMMENTS, payload: snapshot.val()});
        });
    }
}

export function clearMovieComments () {
    return {
        type: CLEAR_MOVIE_COMMENTS
    }
}
