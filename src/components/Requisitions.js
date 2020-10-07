import React, {useEffect, useState} from "react";
import axios from "axios";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "./ProjectAppBar"

// Generate Order Data

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  root1: {
    width: "100%",
  },
  // container: {
  //   maxHeight: 440,
  // },
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
// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     width: "90%",
//   },
//   container: {
//     maxHeight: 440,
//   },
// });


export default function Requisitions() {
   let url = "/requisition";
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [items, setItems] = useState("");
  const rows = [{items}];
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    useEffect(() => {
      axios
        .get("https://farmmanager-api.herokuapp.com/api/requisition")
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
        <ProjectAppBar />

        <main className={classes.content}>
          <h5 align="left" style={{ marginLeft: "0.5rem" }}>
            Recent Orders
          </h5>
          <Paper className={classes.root1}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Requisition Number</TableCell>
                    <TableCell>Purpose</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">Total Price</TableCell>
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
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <div className="">
              {/* <Router> */}
              <a href={url} color="primary">
                See more
              </a>
              {/* </Router> */}
            </div>
          </Paper>
        </main>
      </React.Fragment>
    </div>
  );
}

