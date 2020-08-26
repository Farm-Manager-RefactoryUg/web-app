import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Typography from "@material-ui/core/Typography";
import Deposits from "./materialDesign/Deposits";
// import Orders from "./materialDesign/Orders";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: "green",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: 180,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "29vh",
    // overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
    color: "black",
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Router>
        <Link color="inherit" href="https://material-ui.com/">
          Farm Manager
        </Link>
      </Router>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Reports() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [totalCapital] = useState(150000);
  const [totalSales] = useState(50000);
  const [totalIncome] = useState(
    `${totalCapital - totalSales}`
  );

  return (
    <>
      {/* <Navbar /> */}
      <div className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} lg={9}>
              <Paper item xs className={fixedHeightPaper}>
                <Deposits
                  title="Current Season Capital"
                  amount={totalCapital}
                  details="View details"
                  link="./expenditurechart"
                />
              </Paper>
            </Grid>
            <Grid item xs={4} md={4} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Deposits
                  title="Current Season Sales"
                  amount={totalSales}
                  details="View details"
                  link='./saleschart'
                />
              </Paper>
            </Grid>
            <Grid item xs={4} md={4} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Deposits title="Current Season Profits" amount={totalIncome} />
              </Paper>
            </Grid>

            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          </Grid>
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </div>
    </>
  );
}

export default Reports;
