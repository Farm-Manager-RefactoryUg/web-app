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
import Features from "./Features"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "green",
    color: "white",
    height: "2rem",
    minHeight: "3rem",
  },
  
  menuButton: {
    marginRight: theme.spacing(1),
    color: "white",
    
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    height: "3.3rem",
  }
}));

const mainFeaturedPost = {
  title: "Earn more from your farm with Farm Manger",
  description:
    "Gain full control of your farm and get crucial insight to key decisions.",
  
};

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.appBar}>
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
      <Features/>
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