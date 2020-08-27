import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
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
        <Navbar collapseOnSelect expand="lg" className="nav">
          <Navbar.Brand href="/" >
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" className="hreff">
                Features
              </Nav.Link>
              <Nav.Link a href="#pricing">
                Pricing
              </Nav.Link>
              <NavDropdown title="Crop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/reports">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
