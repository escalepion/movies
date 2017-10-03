import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{
    renderLi() {
      if(this.props.userLogged){
        return (
          <ul className="nav navbar-nav">
          <li><Link to="signout">Signout</Link></li>
          </ul>
          );
      }
      return (
        <ul className="nav navbar-nav">
          <li><Link to="signin">Signin</Link></li>
          <li><Link to="signup">Sign Up</Link></li>
        </ul>
      );
    }
    render() {
        return (
            <nav className="navbar navbar-default">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Home</Link>
            </div>
                {this.renderLi()}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {userLogged: state.auth.userLogged};
}

export default connect(mapStateToProps)(Header);