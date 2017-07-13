import React, {Component} from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../actions/auth'

class RightUserBox extends Component {
    componentWillMount() {
        if(this.props.loggedIn){
        this.props.fetchCurrentUser(firebase.auth().currentUser.uid);
        }
    }
    render() {
    const {loggedIn} = this.props;
    if (loggedIn) {
        return (
            <div className="well">
                <strong>Hello</strong> <br/>
                {this.props.currentUser.name}
            </div>
        );
    }
    return (
            <div className="well">
                If you have an account,
                <Link to="signin">signin </Link> or want to join us,
                <Link to="signup">signup </Link>.
            </div>
    );
    }
}

function mapStateToProps (state) {
    return {currentUser: state.auth.currentUser};
}

export default connect(mapStateToProps,actions)(RightUserBox);
