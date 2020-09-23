import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import ProjectAppBar from "./ProjectAppBar";
import Button from "@material-ui/core/Button";

// Generate Order Data
function createData(id,name, companyName, email, address, terms) {
  return { id, name, companyName, email, address, terms };
}

const rows = [
  createData(
    0,
    "Malinga Daniel",
    "Fine Millers",
    "finemillers@gmail.com",
    "Busia",
    "Seedlings"
  ),
  createData(
    1,
    "Wandira Elton",
    "Simbwe Pharmacy",
    "simbwe@gmail.com",
    "Jinja",
    "Vaccines"
  ),
  createData(
    2,
    "Wamala Emma",
    "Kaisal Vehicles",
    "kaivehicles@gmail.com",
    "Kampala",
    "Hoes"
  ),
  createData(
    3,
    "Edith Tess",
    "Zedith Irrigators",
    "zirrigators@gmail.com",
    "Kasese",
    "Irrigation materials"
  ),
  createData(
    4,
    "Tusiime Godwin",
    "Tutsi wears",
    "tutsiwears@gmail.com",
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
export default function Suppliers() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <ProjectAppBar />
        <main className={classes.content}>
          <Title>Recent Orders</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Business Address</TableCell>
                <TableCell>Terms</TableCell>
                <TableCell> Details</TableCell>
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
                  <TableCell>
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
              See more Suppliers
            </Link>
          </div>
        </main>
      </React.Fragment>
    </div>
  );
}