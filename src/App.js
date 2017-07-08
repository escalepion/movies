import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { userLoggedIn, userLoggedOut } from './actions/auth';
import { connect } from 'react-redux';
import Header from './components/header';
import RightUserBox from './components/right_user_box';

class App extends Component {
state = {
    loading: true
  }
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyDJcXKuZI13TUWzKK6kXdZA3Gxu1XuvMNk",
    authDomain: "movies-a4783.firebaseapp.com",
    databaseURL: "https://movies-a4783.firebaseio.com",
    projectId: "movies-a4783",
    storageBucket: "movies-a4783.appspot.com",
    messagingSenderId: "790483019248"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.userLoggedIn();
        this.setState({
          loading: false,
          uid: user.uid
        });
      } else {
        this.props.userLoggedOut();
        this.setState({
          loading:false
        });
      }
    });
}

  render() {
    firebase.auth().currentUser ? console.log(firebase.auth().currentUser.uid) : console.log('no user');
    return this.state.loading ? <h1>Loading</h1> : (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-md-9">
            {this.props.children}
          </div>
          <div className="hidden-xs col-sm-3 col-md3">
            <RightUserBox loggedIn={this.props.userLogged}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {userLogged: state.auth.userLogged};
}
export default connect(mapStateToProps, {userLoggedIn, userLoggedOut})(App);
