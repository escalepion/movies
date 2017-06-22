import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import firebase from 'firebase';

class Header extends Component{
    renderLi() {
        if(firebase.auth().currentUser) {
        return <li><a href="#">Logged</a></li>
        }else{
            return <li><a href="#">Not Logged</a></li>
        }
    }
    render() {
        console.log(firebase.auth().currentUser);
        return (
            <nav className="navbar navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Home</Link>
            </div>
                <ul className="nav navbar-nav">
                    {this.renderLi()}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {userLogged: state.auth.userLogged};
}

export default connect(mapStateToProps)(Header);