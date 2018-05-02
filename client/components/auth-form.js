import React from 'react';
import {connect} from 'react-redux';
import {auth} from '../store';

const AuthForm = ({name, displayName, handleSubmit, error}) => {
  return (
    <div className="login">
      <div className="main-section">
        <h4 className="main-header">Everything New(s) allows you to see and save top stories from worldwide media outlets.</h4>
      </div>
      {displayName === "Login" ?  <h5>Enter your credentials below to log into Everything New(s): </h5> : <h5>Create an account with Everything New(s): </h5>}
      <div>
            <form onSubmit={handleSubmit} name={name}>
              <div className="login-element">
                <label htmlFor="email"><small>Email</small></label>
                <input name="email" type="email" />
              </div>
              <div className="login-element">
                <label htmlFor="password"><small>Password</small></label>
                <input name="password" type="password"  />
              </div>
              <div className="login-element" >
                <button type="submit">{displayName}</button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </form>
      </div>
    </div>
  )
}

export const mapLogin = state => ({
  name: 'login',
  displayName: 'Login',
  error: state.user.error
});

const mapSignup = state => ({
  name: 'signup',
  displayName: 'Sign Up',
  error: state.user.error
});

const mapDispatch = dispatch => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
