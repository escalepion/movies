import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import MovieShow from './containers/MovieShow';
import MovieList from './containers/MovieList';

import App from './App';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : browserHistory.push('/some/path')}
    />
  )
}
export default (
<Route path="/" component={App}>
    <IndexRoute component={MovieList} />
    <PublicRoute authed={true} path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="show/:media_type/:id" component={MovieShow} />
</Route>
);
