import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Header from './components/header';
import { userLoggedIn, userLoggedOut } from './actions/auth';
import { connect } from 'react-redux';

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
          loading: false
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
    return this.state.loading ? <h1>Loading</h1> : (
      <div>
      <Header />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {userLogged: state.auth.userLogged};
}
export default connect(mapStateToProps, {userLoggedIn, userLoggedOut})(App);
