import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import firebase from 'firebase';

class Header extends Component{
    render() {
        console.log(firebase.auth().currentUser);
        return (
            <nav className="navbar navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Home</Link>
            </div>
                <ul className="nav navbar-nav">
                  {this.props.userLogged
                    ?<li><Link to="signout">Signout</Link></li>
                   :<span>
                   <li><Link to="signin">Signin</Link></li>
                   <li><Link to="signup">Sign Up</Link></li>
                   </span>
                  }
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {userLogged: state.auth.userLogged};
}

export default connect(mapStateToProps)(Header);