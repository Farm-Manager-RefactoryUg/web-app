import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
//import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import PieChart from "./PieChart";
import Deposits from "./Deposits";
import Requisitions from "./Requisitions";
import Bargraph from "./Bargraph";
import ProjectAppBar from "./ProjectAppBar";
import Customers from "../Customers";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Farm Manager
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacing: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    margin: "0px !important",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-evenly",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  //const [investment, setInvestment] = React.useState(3500000);
  const [investment] = React.useState(3500000);
  //const [sales, setSales] = React.useState(5000000);
  const [sales] = React.useState(1000000);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiGrid: {
            "spacing-xs-2": "-6px !important",
          },
        },
        palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          {/* <CssBaseline /> */}
          <ProjectAppBar />
          <main className={classes.content}>
            <div
              className={classes.appBarSpacer}
              style={{ minHeight: "3rem" }}
            />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={2} >
                {/* <Grid
                    container
                    style={{ marginBottom: "0.3rem" }}
                    spacing={2}
                    classes={classes.paper}
                  > */}
                <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    <Deposits
                      title="TOTAL INVESTMENT"
                      amount={investment}
                      details="Details"
                      link="/analytics"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    <Deposits
                      title="TOTAL SALES"
                      amount={sales}
                      details="Details"
                      link="/salesChart"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    <Deposits
                      title="TOTAL PROFIT"
                      amount={sales - investment}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <br></br>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={6} lg={6}>
                  <Paper style={{ borderRadius: "4px" }}>
                    <PieChart />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <Paper>
                    <Bargraph />
                  </Paper>
                </Grid>
              </Grid>
              <br></br>
          
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <Requisitions />
                </Paper>
              </Grid>
              <br></br>
              
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Customers />
                </Paper>
              </Grid>
              {/* </Grid> */}
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
