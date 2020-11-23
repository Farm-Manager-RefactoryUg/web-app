import React, { useEffect } from 'react';
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
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import API from "../api"


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
  },
  errorText: {
    color: "red",
    fontSize: "0.8rem",
    fontFamily: "Segoe UI",
  },
  errorIcon: {
    transform: "scale(0.7)",
  },
  supportText: {
  textAlign: "center",
  marginTop: "8px",
  fontFamily: "Segoe UI",
  fontSize: "1rem",
}
})
);

const errorText = {
  fullName: "At least two names e.g. John Doe",
  email: "Enter valid email E.g: abc@gmail.com",
  password: "Password should be more than 6 characters",
  mobile: "Enter valid mobile E.g. 0773763258"
}

const formSchema = Yup.object()
  .shape({
    fullName: Yup.string()
      .max(25)
      .required()
      .matches(/^[0-9a-zA-Z\s]*$/, errorText.fullName),
    email: Yup.string()
      .max(25)
      .required()
      .email(errorText.email),
    password: Yup.string()
      .min(6)
      .max(25)
      .required(errorText.password),
    mobile: Yup.string()
      .required()
      .matches(/^07[0-9]{8}$/, errorText.mobile),
  });


export default function SignUp() {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Sign Up"
  }, []);


  return (
    <div
      className={classes.root}>

      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />

        <div
          className={classes.paper}
        >
          <div
            className={classes.titleDiv}
          >
            <img
              src={Logo}
              alt="logo"
              width="25px"
              height="25px"
            />

            <h4
              className={classes.navBrand}
            >
              Tele-Farmer
            </h4>

          </div>

          <Typography
            component="h1"
            variant="h5"
            className={classes.pageTitle}
          >
            Sign Up
          </Typography>

          <Typography
            component="h2"
            variant="h5"
            className={classes.pageSubTitle}
          >
            Enter your information to stay connected and monitor your project(s) performance.
          </Typography>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              mobile: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              axios.post(API, values)
                .then(() => {
                  // Add your logic that redirects an authenticated user
                })
                .catch((error) => {
                  console.error('There was an error!', error);
                });
            }}
          >

            {({ errors, touched, isSubmitting }) => (

              <Form
                className={classes.form}
                noValidate
              >

                <Field
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  required
                  fullWidth
                  id="fullName"
                  label="Fullname"
                  name="fullName"
                  as={CssTextField}
                  error={errors.fullName && touched.fullName}
                  helperText={errors.fullName
                    && touched.fullName
                    && (<span>
                      <ErrorOutlineIcon
                        className={classes.errorIcon}
                      />
                      <span
                        className={classes.errorText}>
                        {errorText.fullName}
                      </span>
                    </span>)
                  }
                />

                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  as={CssTextField}
                  error={errors.email && touched.email}
                  helperText={errors.email
                    && touched.email
                    && (<span>
                      <ErrorOutlineIcon
                        className={classes.errorIcon}
                      />
                      <span
                        className={classes.errorText}>
                        {errorText.email}
                      </span>
                    </span>)
                  }
                />

                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="current-password"
                  type="password"
                  as={CssTextField}
                  error={errors.password && touched.password}
                  helperText={errors.password
                    && touched.password
                    && (<span>
                      <ErrorOutlineIcon
                        className={classes.errorIcon}
                      />
                      <span
                        className={classes.errorText}>
                        {errorText.password}
                      </span>
                    </span>)
                  }
                />

                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  as={CssTextField}
                  error={errors.mobile && touched.mobile}
                  helperText={errors.mobile
                    && touched.mobile
                    && (<span>
                      <ErrorOutlineIcon
                        className={classes.errorIcon}
                      />
                      <span
                        className={classes.errorText}>
                        {errorText.mobile}
                      </span>
                    </span>)
                  }
                />

                <Buttonn
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  disabled={isSubmitting}
                  endIcon={<ArrowRightAltIcon />}
                >
                  create
                </Buttonn>

                <Divider />

                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  className={classes.supportText}
                >
                  {"Already have an account? "}

                  <Link
                    to={"/"}
                    variant="body2"
                    className={classes.links}
                  >
                    Log In
                </Link>

                </Grid>

              </Form>
            )}
          </Formik>

        </div>
      </Container>

      <Container maxWidth="sm">
        <footer
          className={classes.footer}
        >
          Copyright © {new Date().getFullYear()}&nbsp;| Refactory, Uganda.
        </footer>
      </Container>
    </div >

  );
}
