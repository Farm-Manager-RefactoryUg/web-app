// import React, { Component, Fragment } from "react";
import {  Link } from "react-router-dom";
import "../css/home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MainFeaturedPost from "./MainFeaturedPost";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tele-Farmer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MainFeaturedPost/>
    </div>
  );
}

function Home() {
  return (
    <>
      <ButtonAppBar/>
      <h1>Hello</h1>
      </>
    
  )
}

export default Home