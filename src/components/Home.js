// import React, { Component, Fragment } from "react";
 import { Link } from "react-router-dom";
import "../css/login.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav id="navbar">
        {" "}
        <Link to="/signup">
          <button className="btn btn-secondary">Create account</button>{" "}
        </Link>{" "}
        <Link to="/login">
          <button className="btn btn-secondary">Login</button>{" "}
        </Link>{" "}
      </nav>
      <Grid container spacing={2}>
         <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
        <p>
              Agriculture is the backbone of Uganda’s economy, employing 70% of the
              population, and contributing half of Uganda’s export earnings and a
              quarter of the country’s gross domestic product (GDP). Since most
              Ugandans live in rural areas and practice farming, raising agriculture
              incomes a centrepiece of Uganda’s National Development Plan is
              critical to reducing poverty, boosting prosperity and creating jobs,
              especially for women and youth. Most of the medium to large scale
              farmers (tele-farmers) live and work in cities or major towns in the
              country and coordinate farm activities via phone calls and messaging
              applications.
        </p>
            
        <p>
              The application is intended to provide the tele-farmer with real time
              information of what is happening on their farm. It will narrow the
              information gap between the tele-farmer and the on-ground farm
              manager. The application will also help the farmer to analyse the
              collected data to view the trend to help make informed decisions about
              the farm.
        </p>
          </Paper>
          </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Finances</h4>
            <p>
              Agrivi farm management software helps you plan, monitor and
              analyze all activities on your farm easily. Tillage, planting,
              crop protection, fertilization, irrigation, harvesting and all
              other activities are managed with a few clicks. Plus, you can
              track input usage quantities, costs and work hours for every
              activity. With a knowledge-base of best practice processes for
              over a 100 crops, start improving your productivity now.
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <img src={require("../static/images/farm/farm3.png")} alt="" />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <img src={require("../static/images/farm/farm3.png")} alt="" />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Stores</h4>
            <p>
              Agrivi farm management software helps you plan, monitor and
              analyze all activities on your farm easily. Tillage, planting,
              crop protection, fertilization, irrigation, harvesting and all
              other activities are managed with a few clicks. Plus, you can
              track input usage quantities, costs and work hours for every
              activity. With a knowledge-base of best practice processes for
              over a 100 crops, start improving your productivity now.
            </p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <h4>Employees</h4>
            <p>
              Agrivi farm management software helps you plan, monitor and
              analyze all activities on your farm easily. Tillage, planting,
              crop protection, fertilization, irrigation, harvesting and all
              other activities are managed with a few clicks. Plus, you can
              track input usage quantities, costs and work hours for every
              activity. With a knowledge-base of best practice processes for
              over a 100 crops, start improving your productivity now.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <img src={require("../static/images/farm/farm3.png")} alt="" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <footer>Farm manager</footer>
      </Grid>
    </div>
  );
}
