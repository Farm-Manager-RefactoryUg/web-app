import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import Typography from "@material-ui/core/Typography";
import TablePagination from "@material-ui/core/TablePagination";
import ProjectAppBar from "../components/ProjectAppBar";


const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "rgba(0,0,0,0.87)",
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
    margin: theme.spacing(2.5),
    marginTop: theme.spacing(12),
    padding: "20px",
  },
  spacing: {
    margin: 0,
  },
  title: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontWeight: "600",
    fontSize: "1.2rem",
    marginBottom: "10px"
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
  tableRow: {
    backgroundColor: "#fafafa",
    fontWeight: "bold",
  },
}));


export default function Suppliers() {
  const currentUrl = useLocation();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [items, setItems] = useState([]);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/supplier")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <ThemeProvider
      theme={theme}
    >
      <div className={classes.root}>

        <ProjectAppBar
          location={currentUrl}
        />

        <main className={classes.content}>

          <Paper className={classes.root2}>

            <Typography
              className={classes.title}
            >
              Recent suppliers
            </Typography>

            <TableContainer component={Paper}>

              <Table
                className={classes.table}
                aria-label="customized table">

                <TableHead style={{ backgroundColor: "#f7f9fc" }}>

                  <TableRow
                    className={classes.tableRow}
                  >
                    <StyledTableCell
                      align="left"
                      component="th"
                      scope="row"
                    >
                      No.
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                      component="th"
                      scope="row"
                    >
                      Name
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                    >
                      Company Name
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                    >
                      Telephone
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                    >
                      Business Address
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                    >
                      Category
                    </StyledTableCell>

                  </TableRow>
                </TableHead>

                {items
                  && items
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((item) => (
                      <TableBody key={item.id}>
                        <StyledTableCell align="left">
                          {item.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.companyname}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.telephone1}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.busaddress}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {item.category}
                        </StyledTableCell>
                      </TableBody>
                    ))
                }

              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />

          </Paper>

        </main>
      </div>
    </ThemeProvider>
  );
}