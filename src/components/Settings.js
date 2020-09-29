import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import MenuListComposition from "./Avatar";
import AppBar from "@material-ui/core/AppBar";
import VerticalTabs from "./VerticalTabs";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingLeft: theme.spacing(3),
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#964c22',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: '50px',
    backgroundColor: 'green',
    color: 'white',
  },
  appBar: {
    backgroundColor: "green",
    minHeight: "50px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: "48px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Settings() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar style={{ minHeight: "48px" }} className={classes.toolbar}>

          <Typography
            variant="h6"
            href="/"
            className={classes.title}
            style={{ color: "white", fontSize: "1.0625rem", fontWeight: "600", fontFamily: "Segoe UI", }}
          >
            Tele-Farmer
          </Typography>

          <MenuListComposition />

        </Toolbar>

      </AppBar>

      <VerticalTabs />

    </div>
  );
}

