import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
//import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "../components/ProjectAppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "#f7f9fc",
  },
  root1: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    color: "black",
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
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: "60px",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-evenly",
    maxHeight: 440,
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: "green",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


export default function Consumables() {
  const currentUrl = useLocation();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [items, setItems] = useState("");
  
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
    <div className={classes.root}>
      <React.Fragment>
        {/* <CssBaseline/> */}
        <ProjectAppBar location={currentUrl} />

          <main className={classes.content}>
            <br></br>
            <br></br>
            <br></br>
            <Paper className={classes.root2}>
              <h5 align="left" style={{ marginLeft: "0.5rem", color: "black" }}>
                Recent Suppliers
              </h5>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead style={{ backgroundColor: "#f7f9fc"}}>
                    <TableRow>
                     <StyledTableCell
                        align="left"
                        component="th"
                        scope="row"
                      >
                        Name
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        Company Name
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        Telephone
                      </StyledTableCell>
                      <StyledTableCell align="left">
                      Business Address
                      </StyledTableCell>
                    <StyledTableCell align="left">Category</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {items &&
                    items
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => (
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.companyname}</TableCell>
                          <TableCell>{item.telephone1}</TableCell>
                          <TableCell>{item.busaddress}</TableCell>
                          <TableCell>{item.category}</TableCell>
                        </TableRow>
                      ))}
                                
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
      </React.Fragment>
    </div>
  );
}
