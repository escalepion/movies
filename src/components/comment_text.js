import React, { Component } from 'react';
import { reduxForm, Field } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../actions/comments';

const renderField = ({ input, label, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error && 'has-error'}`}>
    <label for="comment">{label}</label>
      <textarea className="form-control" {...input} placeholder={label} />
      {touched && error && <div className="error">{error}</div>}
  </div>
);

class CommentText extends Component {
    render() {
        return (
            <form>
                    <Field
                        name="comment"
                        component={renderField}
                        label="Ad a comment"
                    />
            </form>
        );
    }
}

const addCommentForm = reduxForm({
    form: 'addComment'
})(CommentText)

export default connect(null,actions)(addCommentForm);
