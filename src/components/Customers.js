import React, { useEffect, useState } from "react";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "./ProjectAppBar";
import CustomersDetails from "./CustomersDetails";

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "green",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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

export default function Customers() {
  // let url = "/";
  const classes = useStyles();
  const [items, setItems] = useState("");

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/customer")
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
            <br></br>
            <br></br>
            <br></br>
            <Paper className={classes.root2}>
              <h5 align="left" style={{ marginLeft: "0.5rem", color: "green" }}>
                Recent Customers
              </h5>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left" component="th" scope="row">
                        No.
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                      >
                        Name
                      </StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">
                        Telephone
                      </StyledTableCell>
                      <StyledTableCell align="center">Location</StyledTableCell>
                      <StyledTableCell align="center">Details</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {items &&
                    items.map((item) => (
                      <TableBody key={item.id}>
                        <StyledTableCell align="left">
                          {item.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.telephone1}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.location}
                        </StyledTableCell>
                        <CustomersDetails />
                      </TableBody>
                    ))}
                </Table>
              </TableContainer>
            
            </Paper>
            <Box pt={4}>
              <Copyright />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
