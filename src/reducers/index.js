import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import MoviesReducer from './movies_reducer';

const rootReducer = combineReducers({
  form,
  movies: MoviesReducer
});

export default rootReducer;