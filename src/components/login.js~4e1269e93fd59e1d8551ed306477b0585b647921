import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import bg from '../css/bg6.jpg'
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

      </div>
    );
  }
}

export default Login;
