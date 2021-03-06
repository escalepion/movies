import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS,
    FETCH_MOVIE_COMMENTS,
    CLEAR_MOVIE_COMMENTS,
    INJECT_MOVIE_COMMENT
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null,
    movieComments: null,
    commentsArray: []
};

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case INJECT_MOVIE_COMMENT:
            return {...state, commentsArray: [action.payload, ...state.commentsArray]};
        case CLEAR_MOVIE_COMMENTS:
            return {...state, movieComments: null};
        case FETCH_MOVIE_COMMENTS:
            return {...state, movieComments: action.payload };
        case ADD_COMMENT_FEEDBACK:
            return {...state, feedback: action.payload};
        case RESET_FEEDBACK_STATUS:
            return {...state, feedback: null};
        default:
            return state;
    }
}