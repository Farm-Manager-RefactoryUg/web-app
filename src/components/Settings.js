// import React from 'react';
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
// import Toolbar from "@material-ui/core/Toolbar";
// import MenuListComposition from "./Avatar";
// import AppBar from "@material-ui/core/AppBar";
// //import VerticalTabs from "./VerticalTabs";
// import Logo from '../static/images/tree.svg';
// import ProjectAppBar from "./ProjectAppBar";
// import UpdateProfile from "./UpdateProfile";
// import AddTeleFarmer from "./AddTeleFarmer";
// import BasicTable from "./BasicTable";


// const useStyles = makeStyles((theme) => ({
//   root1: {
//     display: "flex",
//     flexDirection: "column",
//     fontFamily: "Segoe UI",
//     backgroundColor: "rgb(247, 249, 252)",
//   },
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     paddingLeft: theme.spacing(3),
//     fontFamily: "Segoe UI",
//     backgroundColor: "rgb(247, 249, 252)",
//   },
//   paper: {
//     marginTop: theme.spacing(12),
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: '#964c22',
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: 'green',
//     color: 'white',
//     outline: 'none',
//     paddingTop: '10px',
//     paddingBottom: '10px',
//   },
//   footer: {
//     padding: theme.spacing(1, 2),
//     paddingBottom: 60,
//     marginTop: '50px',
//     backgroundColor: 'green',
//     color: 'white',
//   },
//   appBar: {
//     backgroundColor: "white",
//     minHeight: "50px",
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//     minHeight: "48px",
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Settings() {

//   const classes = useStyles();
//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

//   const darkTheme = React.useMemo(
//     () =>
//       createMuiTheme({
//         overrides: {
//           MuiGrid: {
//             "spacing-xs-2": "-6px !important",
//           },
//         },
//         palette: {
//           type: prefersDarkMode ? "light" : "dark",
//         },
//       }),
//     [prefersDarkMode]
//   );

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <div className={classes.root1}>
//         {/* <AppBar
//         position="absolute"
//         className={classes.appBar}
//       >
//         <Toolbar style={{ minHeight: "48px" }} className={classes.toolbar}>

//           <Typography
//             variant="h6"
//             href="/"
//             className={classes.title}
//             style={{ color: "rgba(0,0,0,0.87)", fontSize: "1.2rem", marginLeft: "30px",}}
//           >
//             <img src={Logo} alt="logo" width="25px" height="25px" style={{ marginRight: "5px" }} />
//             Tele-Farmer
//           </Typography>

//           <MenuListComposition />

//         </Toolbar>

//       </AppBar> */}

//         <ProjectAppBar />
//         <UpdateProfile />
//         <AddTeleFarmer />
//         <BasicTable />

//         {/* <VerticalTabs /> */}

//       </div>
//     </ThemeProvider>
//   );
// }


import React, { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
import ProjectAppBar from "./ProjectAppBar";
import Card from '@material-ui/core/Card';
import Divider from "@material-ui/core/Divider";
import AddFarmManager from "./AddFarmManager";
import AddTeleFarmer from "./AddTeleFarmer";
import UpdateProfile from "./UpdateProfile";


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
    document.title = "Dashboard"
  }, []);

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

            <Container style={{ marginTop: "60px", paddingLeft: theme.spacing(3), }}>

              <Typography
                style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
                component="h1"
              >
                {"Settings"}
              </Typography>

              <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

              <Grid container spacing={6} style={{ marginTop: "20px", marginBottom: "20px", }}>

                <Grid item xs={12} md={12} lg={12}>
                  <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                    <UpdateProfile />
                  </Card>
                </Grid>

                <Grid item xs={12} sm={12} lg={12}>
                  <Card style={{ backgroundColor: "white" }}>
                    <AddTeleFarmer />
                  </Card>
                </Grid>

                <Grid item xs={12} sm={12} lg={12}>
                  <Card style={{ backgroundColor: "white" }}>
                    <AddFarmManager />
                  </Card>
                </Grid>

              </Grid>

            </Container>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
