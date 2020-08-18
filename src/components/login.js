import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import bg from '../css/bg6.jpg'
import '../css/login.css'

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   Object.values(formErrors).forEach(val =>
//     val.length > 0 && (valid = false))

//   Object.values(rest).forEach(val => {
//     val === null && (valid = false)
//   })

//   return valid;
// }

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: "",
      }
    };

  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'email':
        formErrors.email =
          value.length < 3 ? <Fragment></Fragment>
            : "";
        break;
      case 'password':
        formErrors.password =
          value.length < 6 ? "Minimum required 6 characters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value })
  }

  render() {
    const { formErrors } = this.state
    return (
      <div id="div">
        <form noValidate onSubmit={this.handleSubmit}>
          <h1>Farm Manager<span id="period">.</span></h1>
          <label htmlFor="email">Email</label>
          <input
            className={formErrors.email.length > 0 ? "error" : null}
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            onChange={this.handleChange}
          />
          {formErrors.email.length > 0 && (
            <small style={{ color: "red" }}>{formErrors.email}</small>
          )}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
          />
          {formErrors.password.length > 0 && (
            <small style={{ color: "red" }}>{formErrors.password}</small>
          )}
          <span id="forgotPasswordText"><Link to="/">Forgot password?</Link></span>
          <button>LOGIN</button>
          <span id="signUpText">Don't have an account? <Link to="/signup">Sign up!</Link></span>
          <footer>
            Refactory &copy; 2020. All rights reserved.
          </footer>
        </form>
        <img src={bg} alt="_._._!" />
      </div>
    );
  }
}

export default Login;
