// import React, { Component, Fragment } from "react";
import {  Link } from "react-router-dom";
import "../css/home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "left",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav id="navbar">
        {" "}
        {/* <Router> */}
          <Link to="/signup">
            <button className="btn btn-secondary">Create account</button>{" "}
          </Link>
        {/* </Router>*/}{" "}
        {/* <Router> */}
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>{" "}
          </Link>
        {/* </Router>{" "} */}
      </nav>

      <Grid container spacing={3}>
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
        </Grid>

        <Grid item xs={12} sm={7}>
          <Paper className="paper-two">
            <img
              src={require("../static/images/farm/farm2.png")}
              alt=""
              className="paper-two-image"
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className="paper-three">
            <img
              src={require("../static/images/farm/farm-inventory-custom_crop.jpeg")}
              alt=""
              className="paper-three-image"
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Paper className="paper-three">
            <h4>Farm Inventory</h4>
            <p>
              The different tools used at your farm may easily be put to waste
              if not properly accounted for. Farm manager application helps to
              keep track of the tools at your farm and giving accountability for
              each tool lost or bought for your farm. Don't just waste your
              money on this tools, Know what needs to be bought, what is lost
              and what is available with proper accountability.
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Paper className="paper-four">
            <h4>Employees</h4>
            <p>
              Having proper records of the different workers at your farm can
              greatly improve productivity by knowing which activity is
              performed by who, who needs to be paid and knowing how much each
              employee to be paid can help you plan well. Farm manager app comes
              with a great feature to easily track your employees' performance
              tools to help you motivate them like reminders to p[ay them on
              time.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className="paper-four">
            <img
              src={require("../static/images/farm/farm-employees.jpg")}
              alt=""
              className="paper-four-image"
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
          <footer>Farm manager</footer>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
