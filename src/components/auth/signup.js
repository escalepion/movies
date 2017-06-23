import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';
import '../../css/signup.css';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${touched && error && 'has-error'}`}>
    <label>{label}</label>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <div className="error">{error}</div>}
  </div>
);
class Signup extends Component {
    handleFormSubmit(values) {
        this.props.signUpUser(values);
    }
    componentWillUnmount() {
        this.props.clearFormError();
    }
    render() {
        const { handleSubmit} = this.props;
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

                    <Field
                        name="passwordConfirm"
                        type="password"
                        component={renderField}
                        label="Confirm Password"
                    />
                    {this.props.errorMessage && <div className="error">{this.props.errorMessage}</div>}
                <button type="submit" className="btn btn-primary">Confirm</button>
            </form>
        );
    }
 }

 function validate(formProps) {
     const errors = {};

     if(!formProps.email) {
        errors.email = 'Pls enter a valid mail adress';
     }
     if(formProps.password !== formProps.passwordConfirm ){
         errors.passwordConfirm = 'Password must match!';
     }

     return errors;
 }

function mapStateToProps(state) {
    return {errorMessage: state.auth.error};
}

 const signUpForm = reduxForm({
     form: 'signup',
     validate
 })(Signup);

 export default connect(mapStateToProps, actions)(signUpForm);