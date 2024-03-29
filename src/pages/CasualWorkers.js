import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TablePagination from "@material-ui/core/TablePagination"
import TableContainer from "@material-ui/core/TableContainer"
import ProjectAppBar from "../components/ProjectAppBar"
import API from "../api"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "#f7f9fc",
  },
  paper: {
    padding: 20,
    backgroundColor: "white",
    color: "rgba(0,0,0,0.87)",
    margin: theme.spacing(2.5),
  },
  spacing: {
    margin: 0,
  },
  title: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontWeight: "600",
    fontSize: "1.2rem",
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
  fixedHeight: {
    height: 150,
  },
  tableRow: {
    backgroundColor: "#dff8fa;",
    fontWeight: "bold",
  },
}))

export default function CasualWorkers() {
  const currentUrl = useLocation()
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [items, setItems] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    axios
      .get(API.casual)
      .then((response) => {
        setItems(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className={classes.root}>
      <ProjectAppBar location={currentUrl} />

      <main className={classes.content}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            Casual Workers Details
          </Typography>

          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow position="static" className={classes.tableRow}>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Reason for Hire</TableCell>
                  
                </TableRow>
              </TableHead>

              <TableBody>
                {items &&
                  items
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.phone1}</TableCell>
                        <TableCell>{item.postion}</TableCell>
                        <TableCell>{item.department}</TableCell>
                        
                      </TableRow>
                    ))}
              </TableBody>
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
  )
}
