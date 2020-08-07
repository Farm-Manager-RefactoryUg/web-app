import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css'

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    Object.values(formErrors).forEach(val =>
        val.length > 0 && (valid = false))

    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    })

        return valid;
}

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

        if(formValid(this.state)) {
            console.log(`
            ---SUBMITTING---
            Email: ${this.state.email},
            Password: ${this.state.password}`);
        } else {
            console.log('ERROR!');
        }
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

        this.setState({ formErrors, [name]: value})
    }

    render() {
        const { formErrors } = this.state
        return (
            <Fragment>
                <nav id="navbar">
                    <Link to="/signup">
                        <button className="btn btn-secondary">Create account</button>
                    </Link>
                </nav>
                <form noValidate onSubmit={this.handleSubmit}>
                    <h1>Log in</h1>
                    <label htmlFor="email">Email</label>
                    <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange} />
                    {formErrors.email.length > 0 && <small style={{color: "red"}}>{formErrors.email}</small>}
                    <label htmlFor="password">Password</label> 
                    <input type="password" name="password" id="password" onChange={this.handleChange} />
                    {formErrors.password.length > 0 && <small style={{color: "red"}}>{formErrors.password}</small>}
                    <div id="checkboxDiv">
                        <input type="checkbox" name="checkbox" id="checkbox" onChange={this.handleChange} />
                        <span>Keep me signed in</span>
                        <span id="passwordRecoveryLink"><a href="google.com">Forgot password?</a></span>
                    </div>
                    <button className="btn btn-secondary">Log in</button>
                </form>
            </Fragment>
        );
    }
}

export default Login;
