import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
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
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default App;
