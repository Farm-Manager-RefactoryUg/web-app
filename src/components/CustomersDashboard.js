import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
// import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";
import CustomersDetails from "./CustomersDetails";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function CustomerDashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = useState([]);
  // const rows = [{ items }];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/customer/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Paper className={classes.root}>
      <h5 align="left" style={{ marginLeft: "0.5rem", color: "green" }}>
        Recent Customers
      </h5>
      <TableContainer className={classes.container}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow position="static" style={{ backgroundColor: "#f7f9fc" }}>
              <TableCell style={{ color: "black" }}>Name</TableCell>
              <TableCell style={{ color: "black" }}>Email</TableCell>
              <TableCell style={{ color: "black" }}>Telephone</TableCell>
              <TableCell style={{ color: "black" }}>Delivery Address</TableCell>
              <TableCell align="center" style={{ color: "black" }}>
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <a href="emailto:{item.email} ">{item.email} </a>{" "}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <a href="tel:{item.phone} ">{item.telephone1} </a>{" "}
                    </TableCell>
                    <TableCell>{item.deliveryaddress}</TableCell>
                    <TableCell align="center">
                      <CustomersDetails />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
