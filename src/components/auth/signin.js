import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error && 'has-error'}`}>
    <label>{label}</label>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <div className="error">{error}</div>}
  </div>
);

class Signin extends Component{
    handleFormSubmit(values) {
        this.props.signInUser(values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> 
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                    />

                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="Password"
                    />
                    {this.props.errorMessage && <div className="error">{this.props.errorMessage}</div>}
                <button type="submit" className="btn btn-primary">Confirm</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.email){
        errors.email = 'Pls enter a mail adress'
    }
    if(!values.password) {
        errors.password = 'Pls enter a password'
    }

    return errors;

}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error};
}

const SignInForm = reduxForm({
    form: 'signin',
    validate
})(Signin);

export default connect(mapStateToProps, actions)(SignInForm);
