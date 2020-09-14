// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
// import { Nav, NavDropdown } from "react-bootstrap";
// import bg from "../css/bg6.jpg";
// import "../css/login.css";

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: null,
//       password: null,
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <>
//         <Navbar collapseOnSelect expand="lg" className="nav">
//           <Navbar.Brand href="/" >
//             Home
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#features" className="hreff">
//                 Features
//               </Nav.Link>
//               <Nav.Link a href="#pricing">
//                 Pricing
//               </Nav.Link>
//               <NavDropdown title="Crop" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="/reports">Login</Nav.Link>
//               <Nav.Link eventKey={2} href="/signup">
//                 Signup
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-5">
//               <form id="loginForm">
//                 <h1>
//                   Farm Manager<span id="period">.</span>
//                 </h1>

//                 <label htmlFor="email">Email</label>
//                 <input type="email" name="email" id="email" />

//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" id="password" />

//                 <span id="forgotPasswordText">
//                   <Link to="/">Forgot password?</Link>
//                 </span>

//                 <button>LOGIN</button>

//                 <span id="signUpText">
//                   Don't have an account? <Link to="/signup">Sign up!</Link>
//                 </span>
//               </form>
//             </div>
//             <div className="col">
//               <img id="loginImg" src={bg} alt="_._._!" />
//             </div>
//           </div>
//         </div>
//         <br></br>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col">
//               <footer id="loginFooter">
//                 Refactory &copy; 2020. All rights reserved.
//               </footer>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Buttonn = withStyles({
  root: {
    
    '&:hover': {
      backgroundColor: 'green',
      opacity: '0.9'
    },
    '&:active , &:focus': {
      outline: 'none',
    },
  },
})(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#964c22',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#964c22',
      },
      '&.Mui-error fieldset': {
        borderColor: 'red',
      },

    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#964c22',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: 'auto',
    backgroundColor: 'green',
    color: 'white',
  },
}));

export default function SignIn() {
  let [errors, setErrors] = useState("")
  const handleSubmit = event => {
    event.preventDefault()
  }
  const handleChange = event => {
    const emailInput = event.target.value;
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!regex.test(emailInput)) {
      setErrors("Invalid email address")
    } else {
      setErrors("")
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "green" }}>
            Log in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={errors.length > 0}
              //autoComplete="email"
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px" }}>{errors}</small>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Log In
            </Buttonn>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2" style={{ color: 'darkblue', cursor: 'pointer' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" style={{ color: 'darkblue', cursor: 'pointer' }}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" >
            {'Copyright © Refactory '}{new Date().getFullYear()}{'.'}
          </Typography>
        </Container>
      </footer>
    </div >
  );
}

