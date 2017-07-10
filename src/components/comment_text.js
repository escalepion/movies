import React, { Component } from 'react';
import { reset, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/comments';

const renderField = ({ input, label, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error && 'has-error'}`}>
    <label>{label}</label>
      <textarea className="form-control" {...input} placeholder={label} />
      {touched && error && <div className="error">{error}</div>}
  </div>
);

class CommentText extends Component {
    handleFormSubmit(values){
       this.props.addComment(values, this.props.movie.id);
    }
    render() {
        const { handleSubmit, addCommentFeedback } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field
                        name="comment"
                        component={renderField}
                        label="Ad a comment"
                    />
                    <button type="submit" className="btn btn-primary">Confirm</button>
                    {addCommentFeedback && <div className="error">{addCommentFeedback}</div>}
            </form>
        );
    }
}
const afterSubmit = (result, dispatch) =>{
  dispatch(reset('addCommentForm'));
}

function validate (values) {
    const errors = {};
    if(!values.comment) {
        errors.comment = 'Pls enter a comment';
    }

    return errors;
}

const addCommentForm = reduxForm({
    form: 'addCommentForm',
    onSubmitSuccess: afterSubmit,
    validate
})(CommentText)

function mapStateToProps(state) {
    return {addCommentFeedback: state.comments.feedback};
}

export default connect(mapStateToProps,actions)(addCommentForm);
