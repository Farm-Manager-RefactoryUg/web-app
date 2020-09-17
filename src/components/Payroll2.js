import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "./materialDesign/ProjectAppBar";

import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";

// Generate Order Data
function createData(id, name, companyName, email, address, terms) {
  return { id, name, companyName, email, address, terms };
}

const rows = [
  createData(0, "Malinga Daniel", "Manager", 700000, "Busia", "Seedlings"),
  createData(
    1,
    "Wandira Elton",
    "Operations Head",
    400000,
    "Jinja",
    "Vaccines"
  ),
  createData(2, "Wamala Emma", "Mechanic", 100000, "Kampala", "Hoes"),
  createData(
    3,
    "Edith Tess",
    "Driver",
    200000,
    "Kasese",
    "Irrigation materials"
  ),
  createData(
    4,
    "Tusiime Godwin",
    "IT Specialist",
    500000,
    "Kabale",
    "Gumboots"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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

export default function Requisitions() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        {/* <CssBaseline/> */}
        <ProjectAppBar />

        <main className={classes.content}>
          <h5 align="left" style={{ marginLeft: "0.5rem" }}>
            Employees
          </h5>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Gross Salary</TableCell>
                <TableCell>Pay Period</TableCell>

                <TableCell>Tools Used</TableCell>
                <TableCell align="right">Show Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.terms}</TableCell>
                  <TableCell align="right">
                    <Popup
                      trigger={
                        <Button variant="contained" color="primary">
                          View
                        </Button>
                      }
                      modal
                      closeOnDocumentClick
                    >
                      {(close) => <div>Content here</div>}
                    </Popup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore} style={{ marginLeft: "0.5rem" }}>
            <Link color="primary" href="#" onClick={preventDefault}>
              See more orders
            </Link>
          </div>
        </main>
      </React.Fragment>
    </div>
  );
}
