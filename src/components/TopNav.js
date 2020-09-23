import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import "../topnav.css";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     backgroundColor: "green",
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "white",
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#964c22",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
    color: "white",
    outline: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: "auto",
    backgroundColor: "green",
    color: "white",
    },
  
    // a: {
    // color:"white"
    // },
}));

export default function TopNav() {
 
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.root}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" href="/" className={classes.title}>
              <a href="/" id="a">
                Tele-Farmer
              </a>
            </Typography>
            <Typography variant="h6" href="/" className={classes.title}>
              <a href="/dashboard" id="a">
                Dashboard
              </a>
            </Typography>
            <Button
              variant="outlined"
              color="white"
              className={classes.menuButton}
              size="small"
              href="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="white"
              className={classes.menuButton}
              size="small"
              href="/signup"
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}