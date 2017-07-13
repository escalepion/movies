import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/comments';

const CommentContainer= ({comment}) => {
    return (
        <div className="media">
            <div className="media-left">
            <img src="https://gif-avatars.com/img/45x45/avatar-68.gif" alt="Profile Pic" className="media-object" style = { divStyle } />
            </div>
                <div className="media-body">
                    <p>{comment.comment}</p>
                </div>
            </div>
    );
}

const divStyle = {
  width: '60px',
};

export default connect(null,actions)(CommentContainer);
 