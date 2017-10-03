import React, { Component } from 'react';
import { connect} from 'react-redux';
import * as actions from '../../actions/auth';

class SignOut extends Component {
    componentWillMount() {
        this.props.userLoggedOut();
    }
    render() {
        return (
            <h1>
                You are logging out
            </h1>
        );
    }
}

export default connect(null,actions)(SignOut);