import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import bg from "../css/bg6.jpg";
import "../css/signup.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav">
          <Navbar.Brand href="/">Home</Navbar.Brand>
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
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <form>
                <h1>
                  Farm Manager<span id="period">.</span>
                </h1>
                <label htmlFor="username">Username*</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="firstname">First name*</label>
                <input type="text" name="firstname" id="firstname" />
                <label htmlFor="lastname">Last name*</label>
                <input type="text" name="lastname" id="lastname" />
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password*</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="mobilenumber">Mobile number*</label>
                <input type="text" name="mobilenumber" id="mobilenumber" />
                <label htmlFor="farmname">Farm name*</label>
                <input type="text" name="farmname" id="farmname" />
                <label htmlFor="farmlocation">Farm location*</label>
                <input type="text" name="farmlocation" id="farmlocation" />
                <button>SIGN UP</button>
                <span id="loginText">
                  Already have an account? <Link to="/login">Login!</Link>
                </span>
              </form>
            </div>
            <div className="col-md-7">
              <div id="images">
                <img src={bg} alt="_._._!" />
                <img src={bg} alt="_._._!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
