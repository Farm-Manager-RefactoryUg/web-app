import React, { useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
//import ExpenditurePieChart from "./ExpenditurePieChart";
//import SalesBarGraph from "./SalesBarGraph";
import Typography from "@material-ui/core/Typography";
import ProjectAppBar from "./ProjectAppBar";
//import Reports from "./Reports";

import "../css/workers.css";
import axios from "axios";

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
  root2: {
    width: "100%",
    padding: 20,
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

export default function Workers() {
  // let url = "/";
  const classes = useStyles();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/employee/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {/* <br></br> */}
            <Paper className={classes.root2}>
              <div className="container-fluid" id="roote">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-left">
                      <h5 className="card-heading">EMPLOYEES DETAILS</h5>

                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Details</th>
                          </tr>
                        </thead>
                        {items.map((item) => (
                          <tbody>
                            <tr>
                              <td key={item.id}>{item.fullname}</td>
                              <td>{item.email}</td>
                              <td>{item.phone1} </td>
                              <td>{item.position}</td>
                              <td>{item.department}</td>
                              <td>
                                <Link to={`/customer/${item.id}`}>
                                  <Button variant="success">Details</Button>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
            <br></br>
            <Box pt={4}>
              <Copyright />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}




