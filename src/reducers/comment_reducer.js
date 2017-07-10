import {
    ADD_COMMENT_FEEDBACK,
    RESET_FEEDBACK_STATUS
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null
};

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_COMMENT_FEEDBACK:
            return {...state, feedback: action.payload};
        case RESET_FEEDBACK_STATUS:
            return {...state, feedback: null};
        default:
            return state;
    }
}