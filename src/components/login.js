import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from "../css/bg6.jpg";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <nav id="navbar">
          {" "}
          <Link to="/">
            <button className="btn btn-secondary">Home</button>{" "}
          </Link>
          <Link to="/signup">
            <button className="btn btn-secondary">Create account</button>{" "}
          </Link>
          <span>
            <Link to="/reports">
              <button className="btn btn-secondary">Login</button>{" "}
            </Link>
          </span>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <form id="loginForm">
                <h1>
                  Farm Manager<span id="period">.</span>
                </h1>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <span id="forgotPasswordText">
                  <Link to="/">Forgot password?</Link>
                </span>

                <button>LOGIN</button>

                <span id="signUpText">
                  Don't have an account? <Link to="/signup">Sign up!</Link>
                </span>
              </form>
            </div>
            <div className="col">
              <img id="loginImg" src={bg} alt="_._._!" />
            </div>
          </div>
        </div>
        <br></br>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <footer id="loginFooter">
                Refactory &copy; 2020. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
