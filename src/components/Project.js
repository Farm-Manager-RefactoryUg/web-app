import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
import MenuListComposition from "./Avatar";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";

const Buttonn = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'green',
      opacity: '0.9',
      color: "white",
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
    marginTop: theme.spacing(16),
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
    marginTop: '50px',
    backgroundColor: 'green',
    color: 'white',
  },
  appBar: {
    backgroundColor: "green",
    minHeight: "50px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: "48px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SignIn() {
  let [[fullNamee, desce], setErrors] = useState(["", ""])

  const handleSubmit = event => {
    event.preventDefault()
  }
  const handleChange = event => {
    const { name, value } = event.target
    //let [fullNamee, desce] = [fullNamee, desce]
    const nameRegex = /^[a-zA-Z]+\s*[a-zA-Z ]*$/

    switch (name) {
      case "fullName":
        (!nameRegex.test(value)) ?
          setErrors(["Should contain only characters e.g. Project II", desce]) : setErrors(["", desce])
        break;
      case "description":
        (value.length < 10) ?
          setErrors([fullNamee, "Description should be more than 120 characters"]) : setErrors([fullNamee, ""])
        break;

      default:
        break;
    }

  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar)}
      >

        <Toolbar style={{ minHeight: "48px" }} className={classes.toolbar}>

          <Typography
            variant="h6"
            href="/"
            className={classes.title}
            style={{ color: "white", fontSize: "1.0625rem", fontWeight: "600", fontFamily: "Segoe UI", }}
          >
            Tele-Farmer
          </Typography>

          <MenuListComposition />

        </Toolbar>

      </AppBar>

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>

          <Typography
            style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.57)", }}
            component="h1"
          >
            {"Create a dashboard."}
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <CssTextField
              autoComplete="fname"
              margin="normal"
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Title"
              error={fullNamee.length > 0}
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{fullNamee}</small>

            <CssTextField
              autoComplete="fname"
              margin="normal"
              name="description"
              variant="outlined"
              required
              fullWidth
              multiline
              rows={5}
              id="fullName"
              label="Description"
              error={desce.length > 0}
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{desce}</small>


            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              component='a'
              href={"/projects"}
            >
              CREATE
            </Buttonn>

          </form>
        </div>

      </Container>

    </div>
  );
}

