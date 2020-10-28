import React from 'react';
//import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    color: "green",
    width: "100%",
  },
  appBar:{
    boxShadow: "none",
  },
  navBrand: {
    fontFamily: "Segoe UI",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "green",
    marginLeft: theme.spacing(3),
  },
  navItems:{
    position: "fixed",
    right: "150px",
  },
  navItem: {
    '&:hover': {
      color: "green",      
      textDecoration: "none",
      borderBottom: "3px solid rgb(0,0,0)",
    },
    '&:active': {
      color: "rgba(0,0,0,0.87)",
    },
    fontFamily: "Segoe UI",
    fontWeight: "600",
    fontSize: "1rem",
    marginLeft: theme.spacing(5),
    color: "green",
  }
}));

export default function TopNav() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>

      <Toolbar className={classes.root}>

        <Typography className={classes.navBrand}>Tele-Farmer</Typography>

        {/* <div className={classes.navItems}>
          <Link to={"/login"} className={classes.navItem}>Log In</Link>
          <Link to={"/signup"} className={classes.navItem}>Sign Up</Link>
        </div> */}

      </Toolbar>

    </AppBar>
  );
}