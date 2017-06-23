import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import firebase from 'firebase';

class Header extends Component{
    state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
    render() {
        console.log(firebase.auth().currentUser);
        return (
            <nav className="navbar navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Home</Link>
            </div>
                <ul className="nav navbar-nav">
                   <li><a href="#"> {this.state.authed ? 'authed' : 'not outhed'}</a></li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {userLogged: state.auth.userLogged};
}

export default connect(mapStateToProps)(Header);