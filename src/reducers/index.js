import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import MoviesReducer from './movies_reducer';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth: AuthReducer,
  movies: MoviesReducer
});

export default rootReducer;