import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import bg from '../css/bg6.jpg'
import '../css/signup.css'

class SignUp extends Component {
  state = {}
  render() {
    return (
      <div id="div">

        <div id="images">
          <img src={bg} alt="_._._!" />
          <img src={bg} alt="_._._!" />
        </div>

        <form>
          <h1>Farm Manager<span id="period">.</span></h1>
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
          <span id="loginText">Already have an account? <Link to="/login">Login!</Link></span>
        </form>

      </div>
    );
  }
}

export default SignUp;