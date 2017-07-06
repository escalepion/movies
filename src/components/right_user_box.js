import React from 'react';
import { Link } from 'react-router';

const RightUserBox = ({loggedIn}) => {
    if (loggedIn) {
        return (
            <pre>
                Hello user
            </pre>
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

export default RightUserBox;
