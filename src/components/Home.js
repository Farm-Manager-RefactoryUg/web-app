// import React, { Component, Fragment } from "react";
//import {  Link } from "react-router-dom";
import "../css/home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import {Navbar} from "react-bootstrap";
// import { Nav, NavDropdown }from "react-bootstrap";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MainFeaturedPost from "./MainFeaturedPost";
import TopNav from "./TopNav";

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
  title: {
    flexGrow: 1,
  },
  appBar: {
    height: "3.3rem",
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <TopNav />
     
    </div>
  );
}


