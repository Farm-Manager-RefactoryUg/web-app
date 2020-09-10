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
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly",
  linkText: "Continue reading…",
};

function ButtonAppBar() {
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
          <Typography variant="h6" className={classes.title}>
            Tele-Farmer
          </Typography>
          <Button
            variant="outlined"
            color="white"
            className={classes.menuButton}
            size="small"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="white"
            className={classes.menuButton}
            size="small"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <MainFeaturedPost post={mainFeaturedPost} />
    </div>
  );
}


function Home() {
  return (
    <>
      <ButtonAppBar />

    </>
    
  )
}

export default Home 