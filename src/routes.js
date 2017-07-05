import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MovieShow from './containers/MovieShow';
import MovieList from './containers/MovieList';

import App from './App';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import RequireAuth from './components/auth/require_auth';
import RequireNotAuth from './components/auth/require_not_auth';


export default (
<Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <Route path="signup" component={RequireNotAuth(Signup)}/>
    <Route path="signin" component={RequireNotAuth(Signin)} />
    <Route path="signout" component={RequireAuth(Signout)} />
    <Route path="show/:media_type/:id" component={MovieShow} />
</Route>
);
