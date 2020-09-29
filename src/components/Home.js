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
import { Carousel } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import { Card } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
//import {Copyright} from "./materialDesign/Dashboard"
import "../css/nav.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "green",
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
  title: {
    flexGrow: 1,
  },
  appBar: {
    height: "3.3rem",
  },
}));

// const mainFeaturedPost = {
//   title: "Title of a longer featured blog post",
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly",
//   linkText: "Continue reading…",
// };
// const mainFeaturedPost = {
//   title: "Earn more from your farm with Farm Manger",
//   description:
//     "Gain full control of your farm and get crucial insight to key decisions.",

// };

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Carousel>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/farm/image-slide-22.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/farm/slide-image-11.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={50}>
                <img
                  src={require("../static/images/farm/slide-image-3.jpg")}
                  alt=""
                  className="main-image"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img
              src={require("../static/images/farm/Dr-ian-Clarke.jpg")}
              alt=""
              className="main-image1"
            />
          </div>

          <div className="col-md-8">
            <p className="spn">
              I wish something like Tell Farmer would have existed when I got
              started in farming. It would have saved me lots of time and worry.
              Today’s farmers are lucky to have the chance to get started with a
              tool that powerful from the get-go.
              <br></br>
              <p id="ian-heading">
                <h3>Dr. Ian Clarke</h3> A physician, missionary, philanthropist,
                entrepreneur, and politician in Uganda.
              </p>
            </p>
          </div>
        </div>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} className="purpose-paper">
          <h1 id="purpose-heading">Purposefully built for any scale farm</h1>
          <p id="purpose-paragraph">
            Tell Farmer is an all-in-one platform that allows farmers to plan
            their crops, <br></br> keep records, manage daily operations and
            track sales, all in a user-friendly platform <br></br>available on
            any device connected to the web.
          </p>
          <button id="purpose-button">Start Your 14-day free trial</button>
          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Grid>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} className="purpose-paper2">
          <h3 id="purpose-heading2">
            Learn from your data to make the right decisions
          </h3>
          <p id="purpose-paragraph2">
            All notes, completed tasks, and records are stored for you to easily
            review, analyze, and process each season's successes and learnings.
            Using the Records and Reports features you can closely examine each
            crop and make the right decisions for your farm’s future.
          </p>
        </Grid>
        <Grid item xs={12} sm={7} className="purpose-paper2">
          <img
            src={require("../static/images/farm/home-pc.png")}
            alt=""
            className="main-image1"
          />
        </Grid>
      </Grid>
      <br></br>
      <div className="container-fluid" id="testmony-container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={require("../static/images/farm/Kabushenga.jpg")}
              alt=""
              className="main-image1"
            />
          </div>

          <div className="col-md-8">
            <p className="spn">
              I used to convert bed feet into inches, multiply it by the rows
              per bed, then divide that by the numbers of cells in the seed
              trays I would be transplanting from to figure out how many seed
              trays I would need to plant, for every crop - now I just use Tell
              farmer.
              <br></br>
              <p>
                <h4>Robert Kabushenga</h4>
              </p>
            </p>
          </div>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} className="purpose-paper">
          <p id="purpose-paragraph">
            We’re a small team of technologists, working together to help make
            local, sustainable, small scale farming more profitable without
            changing the way nature intended our produce to be.
          </p>
          <h4 id="purpose-heading">
            Read more about our story{" "}
            <a href="/" id="purpose-heading-link">
              here
            </a>
          </h4>

          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} className="who-we-are">
          <h3 id="who-we-aer-heading">
            This could be the beginning of a beautiful management of your farm.
          </h3>
          <button id="purpose-button">Start Your 14-day free trial</button>
          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} className="purpose-paper2">
          <img
            src={require("../static/images/farm/home-pc.png")}
            alt=""
            className="main-image1"
          />
        </Grid>
        <Grid item xs={12} sm={5} className="purpose-paper2">
          <h3 id="purpose-heading2">
            Learn from your data to make the right decisions
          </h3>
          <p id="purpose-paragraph2">
            All notes, completed tasks, and records are stored for you to easily
            review, analyze, and process each season's successes and learnings.
            Using the Records and Reports features you can closely examine each
            crop and make the right decisions for your farm’s future.
          </p>
        </Grid>
      </Grid>
      <footer>
        <Container maxWidth="sm">
          <Typography variant="body2">
            © {new Date().getFullYear()} Refactory
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
