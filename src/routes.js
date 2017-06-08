import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MovieShow from './containers/MovieShow';
import MovieList from './containers/MovieList';

import App from './App';

export default (
<Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="show/:id" component={MovieShow} />
</Route>
);
