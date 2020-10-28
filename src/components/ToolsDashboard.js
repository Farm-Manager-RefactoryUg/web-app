import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "16px",
    fontFamily: "Segoe UI",
    fontSize: "0.8125rem",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Tools() {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = useState("");
  const rows = [{ items }];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/tool/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        component="h6"
        variant="h5"
        style={{
          fontWeight: "600",
          color: "rgba(0,0,0,0.87)",
          fontSize: "1.0625rem",
          fontFamily: "Segoe UI",
          marginBottom: "16px",
        }}
      >
        Tools
      </Typography>

      <TableContainer className={classes.container}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow
              position="static"
              style={{
                backgroundColor: "#f7f9fc",
              }}
            >
              <TableCell style={{ color: "black" }}>Date</TableCell>
              <TableCell style={{ color: "black" }}>Tool name</TableCell>
              <TableCell style={{ color: "black" }}>Purpose</TableCell>
              <TableCell style={{ color: "black" }}>Main User</TableCell>
              <TableCell align="center" style={{ color: "black" }}>
                Condition
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.map((item) => (
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.reqno}</TableCell>
                  <TableCell>{item.purpose}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell align="right">{item.total}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

    </div>
  );
}