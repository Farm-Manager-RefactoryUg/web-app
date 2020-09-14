// import React, { Component, Fragment } from "react";
//import {  Link } from "react-router-dom";
import "../css/home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Navbar} from "react-bootstrap";
import { Nav, NavDropdown }from "react-bootstrap";
// import ButtonBase from "@material-ui/core/ButtonBase";
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Navbar collapseOnSelect expand="lg" className="nav">
        <Navbar.Brand href="/" className={classes.root}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="hreff">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Crop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className="paper-one">
            <img
              src={require("../static/images/farm/farmimage.jpg")}
              alt=""
              className="paper-one-image"
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Paper className="paper-one">
            <p>
              Agriculture is the backbone of Uganda’s economy, employing 70% of
              the population, and contributing half of Uganda’s export earnings
              and a quarter of the country’s gross domestic product (GDP). Since
              most Ugandans live in rural areas and practice farming, raising
              agriculture incomes a centrepiece of Uganda’s National Development
              Plan is critical to reducing poverty, boosting prosperity and
              creating jobs, especially for women and youth. Most of the medium
              to large scale farmers (tele-farmers) live and work in cities or
              major towns in the country and coordinate farm activities via
              phone calls and messaging applications.
            </p>

            <p>
              The application is intended to provide the tele-farmer with real
              time information of what is happening on their farm. It will
              narrow the information gap between the tele-farmer and the
              on-ground farm manager. The application will also help the farmer
              to analyse the collected data to view the trend to help make
              informed decisions about the farm.
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}>
            <h4>Finances</h4>
            <p>
              The farm manager application helps you plan, monitor and analyze
              all activities on your farm easily. Tillage, planting, crop
              protection, fertilization, irrigation, harvesting and all other
              activities are managed with a few clicks. Plus, you can track
              input usage quantities, costs and work hours for every activity.
              With a knowledge-base of best practice processes for over a
              variety of crops, start improving your productivity and managing
              your farm finances now .
            </p>
          </Paper>
        </Grid> */}
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
            href="/login"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="white"
            className={classes.menuButton}
            size="small"
            href="/sign"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
      {/* <ButtonAppBar /> */}
      {/* </Grid> */}
      {/* function Home() {
  return (
    <>
      <ButtonAppBar />

    </>
    
  )
}

export default Home  */}
    </div>
  );
}


