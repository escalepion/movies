import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/auth';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <div className="error">{error}</div>}
    </div>
  </div>
);
class Signup extends Component {
    handleFormSubmit(values) {
        this.props.signUpUser(values);
    }
    render() {
        const { handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="form-group"> 
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                    />
                </div>
                <div className="form-group"> 
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="Password"
                    />
                </div>
                <div className="form-group"> 
                    <Field
                        name="passwordConfirm"
                        type="password"
                        component={renderField}
                        label="Confirm Password"
                    />
                </div>
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

 const signUpForm = reduxForm({
     form: 'signup',
     validate
 })(Signup);

 export default connect(null, actions)(signUpForm);