import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MovieShow from './containers/MovieShow';
import MovieList from './containers/MovieList';

import App from './App';
import Signup from './components/auth/signup';

export default (
<Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="signup" component={Signup} />
    <Route path="show/:media_type/:id" component={MovieShow} />
</Route>
);
