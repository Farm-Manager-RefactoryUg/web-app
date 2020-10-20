import React, { useEffect, useState } from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import clsx from "clsx";
import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import PieChart from "./PieChart";
//import Deposits from "./Deposits";
import RequisitionsDashboard from "./RequisitionsDashboard";
import ToolsDashboard from "./ToolsDashboard";
//import Tables from "./Tables";
import Bargraph from "./Bargraph";
import ProjectAppBar from "./ProjectAppBar";
import CustomersDashboard from "./CustomersDashboard";
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Farm Manager!
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
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
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
    flexShrink: 0,
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
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
 
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
 // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

   const [item, setItems] = useState("");
   const [id, setId] = useState();
  
  useEffect(() => {
     setId(item.id);
     axios
       .get(`https://farmmanager-api.herokuapp.com/api/income/${id}`)
       .then((response) => {
         setItems(response.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [item.id, id], );

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
          <ProjectAppBar />

          <main className={classes.content}>
            <div
              className={classes.appBarSpacer}
              style={{ minHeight: "3rem" }}
            />

            <Container style={{ marginTop: "60px" }}>
              <Typography
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  fontFamily: "Segoe UI",
                  color: "rgba(0, 0, 0, 0.57)",
                }}
                component="h1"
              >
                {"Biyinzika Mukono C"}
              </Typography>

              <Divider
                style={{ marginTop: "15px", backgroundColor: "orange" }}
              />

              <Grid
                container
                spacing={2}
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Grid item xs={12} md={3} lg={3}>
                  <Card
                    style={{
                      // width: "250px",
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        Sales Today
                        <Chip
                          classes={{ label: classes.label }}
                          style={{
                            fontFamily: "Segoe UI",
                            float: "right",
                            backgroundColor: "purple",
                          }}
                          label="Today"
                          size="small"
                        />
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          paddingTop: "3px",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        {"2.532"}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgb(76, 175, 80)",
                          fontWeight: "700",
                        }}
                      >
                        {"+26"}%
                        <span
                          style={{
                            fontFamily: "Segoe UI",
                            marginLeft: "20px",
                            color: "rgb(117, 117, 117)",
                            fontSize: "1rem",
                            fontWeight: "400",
                          }}
                        >
                          Since last week
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Card
                    style={{
                      // width: "250px",
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        Sales Reduction
                        <Chip
                          classes={{ label: classes.label }}
                          style={{
                            fontFamily: "Segoe UI",
                            float: "right",
                            backgroundColor: "purple",
                          }}
                          label="Monthly"
                          size="small"
                        />
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          paddingTop: "3px",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        {"170.212"}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgb(244, 67, 54)",
                          fontWeight: "700",
                        }}
                      >
                        {"-14"}%
                        <span
                          style={{
                            fontFamily: "Segoe UI",
                            marginLeft: "20px",
                            color: "rgb(117, 117, 117)",
                            fontSize: "1rem",
                            fontWeight: "400",
                          }}
                        >
                          Since Last season
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Card
                    style={{
                      // width: "250px",
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        Pending Orders
                        <Chip
                          classes={{ label: classes.label }}
                          style={{
                            fontFamily: "Segoe UI",
                            float: "right",
                            backgroundColor: "purple",
                          }}
                          label="Weekly"
                          size="small"
                        />
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          paddingTop: "3px",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        {"33"}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgb(76, 175, 80)",
                          fontWeight: "700",
                        }}
                      >
                        {"+18"}%
                        <span
                          style={{
                            fontFamily: "Segoe UI",
                            marginLeft: "20px",
                            color: "rgb(117, 117, 117)",
                            fontSize: "1rem",
                            fontWeight: "400",
                          }}
                        >
                          Since last week
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                  <Card
                    style={{
                      // width: "250px",
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        Total Earnings
                        <Chip
                          classes={{ label: classes.label }}
                          style={{
                            fontFamily: "Segoe UI",
                            float: "right",
                            backgroundColor: "purple",
                          }}
                          label="Annualy"
                          size="small"
                        />
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          paddingTop: "3px",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        UGX{" 45,000,000"}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgb(244, 67, 54)",
                          fontWeight: "700",
                        }}
                      >
                        {"-9"}%
                        <span
                          style={{
                            fontFamily: "Segoe UI",
                            marginLeft: "20px",
                            color: "rgb(117, 117, 117)",
                            fontSize: "1rem",
                            fontWeight: "400",
                          }}
                        >
                          Since last week
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} sm={6} lg={7}>
                  <Card style={{ backgroundColor: "white" }}>
                    <Bargraph />
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={5}>
                  <Card style={{ backgroundColor: "white" }}>
                    <PieChart />
                  </Card>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <RequisitionsDashboard />
                </Paper>
              </Grid>
              <br></br>

              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <CustomersDashboard />
                </Paper>
              </Grid>
              <br></br>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                  <ToolsDashboard />
                </Paper>
              </Grid>
              <br></br>
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
