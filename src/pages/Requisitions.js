import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import TablePagination from "@material-ui/core/TablePagination"
import ProjectAppBar from "../components/ProjectAppBar"
import { motion } from "framer-motion"
import API from "../api"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  root1: {
    margin: theme.spacing(2.5),
    marginTop: theme.spacing(5),
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
    marginBottom: "10px",
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
}))

export default function Requisitions() {
  const currentUrl = useLocation()
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [items, setItems] = useState([])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    axios
      .get(API.requisition)
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
        <Paper className={classes.root1}>
          <Typography className={classes.title}>Recent Orders</Typography>
          <motion.TableContainer
            className={classes.container}
            whileHover={{ scale: 1.2 }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow style={{ backgroundColor: "red", color: "white" }}>
                  <TableCell>Date</TableCell>
                  <TableCell>Requisition Number</TableCell>
                  <TableCell>Purpose</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items &&
                  items
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => (
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
          </motion.TableContainer>
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
