import {
    ADD_COMMENT_FEEDBACK
} from '../actions/types';

const INITIAL_STATE = {
    feedback: null
};

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_COMMENT_FEEDBACK:
            return {...state, feedback: action.payload};
        default:
            return state;
    }
}