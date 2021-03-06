import React, { useEffect, useState } from "react"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
})

export default function Tools() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [items, setItems] = useState([])
  // const rows = [{ items }];
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/tool/")
      .then((response) => {
        setItems(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Paper className={classes.root}>
      <h5 align="left" style={{ marginLeft: "0.5rem", color: "green" }}>
        Tools
      </h5>
      <TableContainer className={classes.container}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow
              position="static"
              style={{ backgroundColor: "#f7f9fc", color: "white" }}
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
              items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.toolname}</TableCell>
                    <TableCell>{item.purpose}</TableCell>
                    <TableCell>{item.mainuser}</TableCell>
                    <TableCell align="center">{item.condition}</TableCell>
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
  )
}
