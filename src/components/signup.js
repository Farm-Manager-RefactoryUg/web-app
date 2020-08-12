import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../css/signup.css'

class SignUp extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <nav>
                    <Link to="/">
                        <button className="btn btn-secondary">Log in</button>
                    </Link>
                </nav>
                <section>
                    <h1>Sign Up</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname" id="firstname" />
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="lastname" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <label htmlFor="mobilenumber">Mobile number</label>
                    <input type="text" name="mobilenumber" id="mobilenumber" />
                    <label htmlFor="farmname">Farm name</label>
                    <input type="text" name="farmname" id="farmname" />
                    <label htmlFor="farmlocation">Farm location</label>
                    <input type="text" name="farmlocation" id="farmlocation" />
                    <button className="btn btn-secondary">Sign Up</button>
                </section>
            </Fragment>
        );
    }
}

export default SignUp;