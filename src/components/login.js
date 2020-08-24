<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bg from '../css/bg6.jpg'
=======
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

>>>>>>> f13ba105f80ceb0bce5a4b06fbe651b6bad5ef36
import '../css/login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div id="div">

        <form id="loginForm">
          <h1>Farm Manager<span id="period">.</span></h1>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
          />

          <span id="forgotPasswordText"><Link to="/">Forgot password?</Link></span>

          <button>LOGIN</button>

          <span id="signUpText">Don't have an account? <Link to="/signup">Sign up!</Link></span>

          <footer id="loginFooter">
            Refactory &copy; 2020. All rights reserved.
          </footer>

        </form>

        <img id="loginImg" src={bg} alt="_._._!" />

<<<<<<< HEAD
      </div>
    );
  }
=======
    render() {
        const { formErrors } = this.state
        return (
          <Fragment>
            <nav id="navbar">
              {/* <Router> */}
                <Link to="/signup">
                  <button className="btn btn-secondary">Create account</button>
                </Link>
              {/* </Router> */}
              {/* <Router> */}
                <Link to="/reports">
                  <button className="btn btn-secondary">Login</button>
                </Link>
              {/* </Router> */}
              {/* <Router> */}
                <Link to="/">
                  <button className="btn btn-secondary">Home</button>
                </Link>
              {/* </Router> */}
            </nav>
            <form noValidate onSubmit={this.handleSubmit}>
              <h1>Log in</h1>
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                type="email"
                name="email"
                id="email"
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
              <div id="checkboxDiv">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={this.handleChange}
                />
                <span>Keep me signed in</span>
                <span id="passwordRecoveryLink">
                  <a href="google.com">Forgot password?</a>
                </span>
              </div>
              <button className="btn btn-secondary">Log in</button>
            </form>
          </Fragment>
        );
    }
>>>>>>> f13ba105f80ceb0bce5a4b06fbe651b6bad5ef36
}

export default Login;
