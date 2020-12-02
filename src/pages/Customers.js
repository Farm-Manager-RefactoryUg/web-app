import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import TablePagination from "@material-ui/core/TablePagination"
import ProjectAppBar from "../components/ProjectAppBar"
import CustomersDetails from "./CustomersDetails"
import API from "../api"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  root2: {
    margin: theme.spacing(2.5),
    marginTop: theme.spacing(12),
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
  drawerPaper: {
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
}))

export default function Suppliers() {
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

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    axios
      .get(API.customer)
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
          <Paper className={classes.root2}>
            <Typography className={classes.title}>Recent Customers</Typography>

            <TableContainer className={classes.container}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow
                    position="static"
                    style={{ backgroundColor: "#f7f9fc" }}
                  >
                    <TableCell style={{ color: "black" }}>Name</TableCell>

                    <TableCell style={{ color: "black" }}>Email</TableCell>

                    <TableCell style={{ color: "black" }}>Telephone</TableCell>

                    <TableCell style={{ color: "black" }}>
                      Delivery Address
                    </TableCell>

                    {/* <TableCell align="center" style={{ color: "black" }}>
                      Details
                    </TableCell> */}
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
                          <TableCell>{item.name}</TableCell>

                          <TableCell>
                            <a href="emailto:{item.email} ">{item.email} </a>{" "}
                          </TableCell>

                          <TableCell>
                            {" "}
                            <a href="tel:{item.phone} ">
                              {item.telephone1}{" "}
                            </a>{" "}
                          </TableCell>

                          <TableCell>{item.deliveryaddress}</TableCell>

                          {/* <TableCell align="center">
                            <CustomersDetails />
                          </TableCell> */}
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
        </main>
      </div>
    </ThemeProvider>
  )
}
