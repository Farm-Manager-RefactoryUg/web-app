import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../css/login.css";

class Login extends Component {
  
  render() {
   
    return (
      <Fragment>
        <nav id="navbar">
          <Link to="/signup">
            <button className="btn btn-secondary">Create account</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
            </nav>
            <div className='container-fluid'>
            <h4 className='heading4'>This wil be our landing page</h4>
            </div>
      </Fragment>
    );
  }
}

export default Login;
