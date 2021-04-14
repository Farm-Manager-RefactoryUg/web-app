import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import axios from "axios"
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import TablePagination from "@material-ui/core/TablePagination"
import TableContainer from "@material-ui/core/TableContainer"
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "../components/ProjectAppBar"
import { Typography } from "@material-ui/core"

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

export default function Workers() {
  const currentUrl = useLocation()
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [items, setItems] = useState([])
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)")

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiGrid: {
            "spacing-xs-2": "-6px !important",
          },
        },
        palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  )
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/employee")
      .then((response) => {
        setItems(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <ProjectAppBar location={currentUrl} />

        <main className={classes.content}>
          <Paper className={classes.root1}>
            <Typography className={classes.title}>Employee Details</Typography>

            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Qualification</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {items &&
                    items
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => (
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>{item.fullname}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.position}</TableCell>
                          <TableCell>{item.department}</TableCell>
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
    </ThemeProvider>
  )
}
