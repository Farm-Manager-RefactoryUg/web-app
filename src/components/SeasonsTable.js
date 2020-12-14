import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  table: {
    //minWidth: 650,
    backgroundColor: "white",
  },
  headerFont: {
    color: "rgba(0,0,0,0.87)",
    fontWeight: "600",
    fontFamily: "Segoe UI",
    fontSize: "0.8125rem",
  },
  tableFont: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontSize: "0.8125rem",
  },
})

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData(1, "harvesting", "06/08/2020"),
  createData(2, "spraying", "25/07/2020"),
  createData(3, "weeding", "17/07/2020"),
  createData(4, "prunning", "21/06/2020"),
  createData(5, "planting", "13/06/2020"),
]

export default function BasicTable() {
  const classes = useStyles()

  return (
    <TableContainer component="div">
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
        Table showing the start and end date of farm activities within different
        seasons.
      </Typography>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#f7f9fc",
            }}
          >
            <TableCell className={classes.headerFont}>#</TableCell>
            <TableCell className={classes.headerFont} align="left">
              Activity
            </TableCell>
            <TableCell className={classes.headerFont} align="left">
              Start Date
            </TableCell>
            <TableCell className={classes.headerFont} align="left">
              End Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableFont}
                style={{ fontWeight: "700" }}
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableFont} align="left">
                {row.calories}
              </TableCell>
              <TableCell className={classes.tableFont} align="left">
                {row.fat}
              </TableCell>
              <TableCell className={classes.tableFont} align="left">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
