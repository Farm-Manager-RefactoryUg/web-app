import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProjectAppBar from "./ProjectAppBar";
import Divider from "@material-ui/core/Divider";
import AddFarmManager from "./AddFarmManager";
import AddTeleFarmer from "./AddTeleFarmer";
import UpdateDashboard from "./UpdateDashboard";


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
  const currentUrl = useLocation();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

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



  useEffect(() => {
    document.title = "Dashboard Settings"
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>

          <ProjectAppBar location={currentUrl} />
          <main className={classes.content}>
            <div
              className={classes.appBarSpacer}
              style={{ minHeight: "3rem" }}
            />

            <Container style={{ marginTop: "40px", paddingLeft: theme.spacing(3), }}>

              <Typography
                style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
                component="h1"
              >
                {"Dashboard Settings"}
              </Typography>

              <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

              <Grid container spacing={6} style={{ marginBottom: "20px", }}>

                <Grid item xs={12} sm={12} lg={7}>
                  <UpdateDashboard />
                </Grid>

                <Grid item xs={12} sm={12} lg={12}>
                  <AddTeleFarmer />
                </Grid>

                <Grid item xs={12} sm={12} lg={12}>
                  <AddFarmManager />
                </Grid>

              </Grid>

            </Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
