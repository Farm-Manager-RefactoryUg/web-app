import React, { useState, useEffect } from 'react';
import { Link, } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from '@material-ui/core/Divider';
import Logo from '../static/images/tree.svg'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
//import axios from "axios";

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
      color: 'rgba(0,0,0,0.87)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '&.Mui-error fieldset': {
        borderColor: 'red',
      },

    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navBrand: {
    fontSize: "1.2rem",
    color: "rgba(0,0,0,0.87)",
    marginLeft: "5px",
  },
  titleDiv: {
    display: "flex",
  },
  pageTitle: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontWeight: "900",
    fontSize: "2.5rem",
    marginBottom: theme.spacing(1),
  },
  pageSubTitle: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontSize: "1rem",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    '&:hover': {
      color: "white",
    },
    margin: theme.spacing(3, 0, 2),
    marginBottom: theme.spacing(6),
    backgroundColor: "green",
    color: "white",
    outline: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Segoe UI",
    fontWeight: "600",
    fontSize: "0.8rem",
  },
  links: {
    '&:hover': {
      color: "green",
    },
    color: "green",
    fontFamily: "Segoe UI",
    fontSize: "1rem",
  },
  footer: {
    position: "relative",
    bottom: "20px",
    backgroundColor: "#fafafa",
    color: "rgba(0,0,0, 0.3)",
    fontFamily: "Segoe UI",
    fontWeight: "800",
    fontSize: "0.9rem",
    marginTop: "100px",
    textAlign: "center"
  }
}));


export default function SignUp() {

  //let history = useHistory();
  const classes = useStyles();
  let [[fullNamee, emaile, passworde, mobilee], setErrors] = useState(["", "", "", ""])

  const handleSubmit = (event) => {
    //const url = "http://www.something.com/login";
    let { fullName, email, password, mobile } = event.target;

    if (fullName.value !== "" && email.value !== "" && password.value !== "" && mobile.value !== "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
      // axios.post(url, { fullName, email, password, mobile })
      //   .then(data => {
      //     if (data.message === "true") {
      //       history.pushState("/projects")
      //     } else {
      //       // Render error message on Login page
      //     }
      //   })
      //   .catch(() => {
      //     history.push("/pagenotfound");
      //   })
    } else {
      if (fullName.value === "" && email.value === "" && password.value === "" && mobile.value === "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
        setErrors(["At least two names e.g. John Doe", "Enter valid email E.g: abc@gmail.com", "Password should be more than 6 characters", "Enter valid mobile E.g. 0773763258"])
      }
      else if (fullName.value === "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
        setErrors(["At least two names e.g. John Doe", emaile, passworde, mobilee])
      }
      else if (email.value === "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
        setErrors([fullNamee, "Enter valid email E.g: abc@gmail.com", passworde, mobilee])
      }
      else if (password.value === "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
        setErrors([fullNamee, emaile, "Password should be more than 6 characters", mobilee])
      }
      else if (mobile.value === "" && fullNamee === "" && emaile === "" && passworde === "" && mobilee === "") {
        setErrors([fullNamee, emaile, passworde, "Enter valid mobile E.g. 0773763258"])
      }
      event.preventDefault();
    }
  }

  const handleChange = (event) => {

    const { name, value } = event.target;
    const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const mobileRegex = /^07[0-9]{8}$/

    switch (name) {
      case "fullName":
        (!nameRegex.test(value))
          ? setErrors(["At least two names E.g. John Doe", emaile, passworde, mobilee])
          : setErrors(["", emaile, passworde, mobilee]);
        break;
      case "email":
        (!emailRegex.test(value))
          ? setErrors([fullNamee, "Enter valid email E.g. abc@gmail.com", passworde, mobilee])
          : setErrors([fullNamee, "", passworde, mobilee]);
        break;
      case "password":
        (value.length < 6)
          ? setErrors([fullNamee, emaile, "Password should be more than 6 characters", mobilee])
          : setErrors([fullNamee, emaile, "", mobilee]);
        break;
      case "mobile":
        (!mobileRegex.test(value) && value.length !== 10)
          ? setErrors([fullNamee, emaile, passworde, "Enter valid mobile E.g. 0773763258"])
          : setErrors([fullNamee, emaile, passworde, ""]);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    document.title = "Sign Up"
  }, []);

  return (
    <div className={classes.root}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <div className={classes.titleDiv}>
            <img src={Logo} alt="logo" width="25px" height="25px" />
            <h4 className={classes.navBrand}>Tele-Farmer</h4>
          </div>

          <Typography component="h1" variant="h5" className={classes.pageTitle}>
            Sign Up
          </Typography>

          <Typography component="h2" variant="h5" className={classes.pageSubTitle}>
            Enter your information to stay connected and monitor your project(s) performance.
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <CssTextField
              variant="outlined"
              margin="normal"
              autoFocus
              required
              fullWidth
              id="fullName"
              label="Fullname"
              name="fullName"
              error={fullNamee.length > 0}
              onChange={handleChange}
            />
            {fullNamee && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {fullNamee}
            </small>}

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={emaile.length > 0}
              autoComplete="email"
              onChange={handleChange}
            />
            {emaile && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {emaile}
            </small>}

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              error={passworde.length > 0}
              type="password"
              onChange={handleChange}

            />
            {passworde && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {passworde}
            </small>}

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              name="mobile"
              error={mobilee.length > 0}
              onChange={handleChange}
            />
            {mobilee && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {mobilee}
            </small>}

            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              endIcon={<ArrowRightAltIcon />}
            >
              create
            </Buttonn>

            <Divider />

            <Grid container>
              <Grid item xs={12} md={12} lg={12} style={{ textAlign: "center", marginTop: "8px", fontFamily: "Segoe UI", fontSize: "1rem" }}>
                {"Already have an account? "}
                <Link
                  to={"/"}
                  variant="body2"
                  className={classes.links}
                >
                  Log In
                </Link>
              </Grid>
            </Grid>

          </form>

        </div>
      </Container>

      <Container maxWidth="sm">
        <footer className={classes.footer}>
          Copyright © {new Date().getFullYear()}&nbsp;| Refactory, Uganda.
        </footer>
      </Container>
    </div >

  );
}