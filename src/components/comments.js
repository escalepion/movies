// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/comments';
import CommentContainer from './common/comment_container';

class Comments extends Component {   
    componentWillMount() {
        this.props.fetchMovieComments(this.props.movie.id);
    }
    componentWillUnmount() {
        this.props.clearMovieComments();
    }
    listComments() {
        return this.props.comments.map((comment) => {
            return (
                <CommentContainer key={comment.uid} comment={comment} /> 
            );
        });
    }
    render() {
        console.log(this.props.comments);
        return (
            <div>
            {this.listComments()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // const comments = _.map(state.comments.movieComments, (val, uid) => {
    //     return { ...val, uid };
    // });
    const comments = state.comments.commentsArray;
    return {comments};
}

export default connect(mapStateToProps,actions)(Comments);
