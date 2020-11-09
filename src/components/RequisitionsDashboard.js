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
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
    fontSize: "0.8125rem",
  },
  cell: {
    fontSize: "0.8125rem",
    fontFamily: "Segoe UI",
  },
  cellRow: {
    fontSize: "0.8125rem",
    fontWeight: "600",
    fontFamily: "Segoe UI",
  },
});

export default function Tables() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = useState([]);
  //const rows = [{ items }];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/requisition/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Typography
        component="h6"
        variant="h5"
        style={{
          fontWeight: "600",
          color: "rgba(0,0,0,0.87)",
          fontSize: "1.0625rem",
          fontFamily: "Segoe UI",
          marginBottom: "10px",
        }}
      >
        Recent orders
      </Typography>

      <TableContainer
        className={classes.container}
      >
        <Table>
          <TableHead>
            <TableRow
              position="static"
              style={{
                backgroundColor: "#f7f9fc",
              }}
            >
              <TableCell
                className={classes.cellRow}
              >
                Date
                </TableCell>
              <TableCell
                className={classes.cellRow}
              >
                Requisition Number
              </TableCell>
              <TableCell
                className={classes.cellRow}
              >
                Purpose
                </TableCell>
              <TableCell
                className={classes.cellRow}
              >
                Quantity
                </TableCell>
              <TableCell
                className={classes.cellRow}
              >
                Total Price
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items && items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}>
                  <TableCell
                    className={classes.cell}
                  >
                    {item.date}
                  </TableCell>
                  <TableCell
                    className={classes.cell}
                  >
                    {item.reqno}
                  </TableCell>
                  <TableCell
                    className={classes.cell}
                  >
                    {item.purpose}
                  </TableCell>
                  <TableCell
                    className={classes.cell}
                  >
                    {item.qty}
                  </TableCell>
                  <TableCell
                    className={classes.cell}
                  >
                    {item.total}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        classes={{
          root: classes.cell,
          caption: classes.cell
        }}
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}
