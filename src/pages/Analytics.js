import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import ProjectAppBar from "../components/ProjectAppBar"
import Card from "@material-ui/core/Card"
import Divider from "@material-ui/core/Divider"
import SalesLineGraph from "./SalesLineGraph"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import BarChartIcon from "@material-ui/icons/BarChart"

const drawerWidth = 240
const Buttonn = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "green",
      opacity: "0.9",
    },
    "&:active , &:focus": {
      outline: "none",
    },
  },
})(Button)
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
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
  fixedHeight: {
    height: 150,
  },
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    backgroundColor: "green",
    color: "white",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    textTransform: "initial",
    fontWeight: "600",
    height: "40px",
    width: "120px",
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const currentUrl = useLocation()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)")
  const [[startDate, endDate], setSelectedDate] = useState([
    new Date(),
    new Date(),
  ])
  const [selectData1, setData1] = useState("")
  const [selectData2, setData2] = useState("")
  const [selectData3, setData3] = useState("")
  const [selectChart, setChart] = useState("")
  const [selectItems, setItems] = useState(1)
  const [on, setChartDisplay] = useState(false)

  const handleDateChange1 = (date) => {
    setSelectedDate([date, endDate])
  }

  const handleDateChange2 = (date) => {
    setSelectedDate([startDate, date])
  }

  const handleData1Change = (event) => {
    setData1(event.target.value)
  }
  const handleData2Change = (event) => {
    setData2(event.target.value)
  }
  const handleData3Change = (event) => {
    setData3(event.target.value)
  }
  const handleChartChange = (event) => {
    setChart(event.target.value)
  }
  const handleNoOfItemsChange = (event) => {
    setItems(event.target.value)
  }
  const handleSubmit = () => {
    setChartDisplay(!on)
  }

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

  useEffect(() => {
    document.title = "Analysis Page"
  }, [])

  return (
    //---Remove all inline styling and add it to the useStyles object---
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <ProjectAppBar location={currentUrl} />

        <main className={classes.content}>
          <div className={classes.appBarSpacer} style={{ minHeight: "3rem" }} />

          <Container style={{ marginTop: "40px" }}>
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                fontFamily: "Segoe UI",
                color: "rgba(0, 0, 0, 0.87)",
              }}
              component="h1"
            >
              Decision Support
            </Typography>

            <Divider
              style={{
                marginTop: "15px",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            />

            <Grid
              container
              spacing={2}
              style={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              <Grid item xs={12} sm={12} lg={12}>
                <Card style={{ paddingBottom: theme.spacing(2) }}>
                  <Typography
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: "600",
                      fontFamily: "Segoe UI",
                      color: "rgba(0, 0, 0, 0.87)",
                      margin: theme.spacing(2, 2, 0, 2),
                    }}
                    component="h1"
                  >
                    Create a chart
                  </Typography>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline1"
                      label={
                        <span
                          style={{
                            fontSize: "1.0625rem",
                            fontWeight: "600",
                            fontFamily: "Segoe UI",
                            color: "rgba(0, 0, 0, 0.87)",
                          }}
                        >
                          Start Date
                        </span>
                      }
                      value={startDate}
                      onChange={handleDateChange1}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      style={{ marginLeft: "20px" }}
                    />

                    <KeyboardDatePicker
                      disableToolbar
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline2"
                      label={
                        <span
                          style={{
                            fontSize: "1.0625rem",
                            fontWeight: "600",
                            fontFamily: "Segoe UI",
                            color: "rgba(0, 0, 0, 0.87)",
                          }}
                        >
                          End Date
                        </span>
                      }
                      value={endDate}
                      onChange={handleDateChange2}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      style={{ marginLeft: "20px" }}
                    />
                  </MuiPickersUtilsProvider>

                  <FormControl className={classes.formControl}>
                    <InputLabel
                      shrink
                      style={{
                        color: "rgba(0,0,0,0.87)",
                        fontFamily: "Segoe UI",
                        fontWeight: "600",
                        fontSize: "1.0625rem",
                      }}
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Chart
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={selectChart}
                      onChange={handleChartChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <span
                          style={{
                            color: "rgba(0,0,0,0.3)",
                          }}
                        >
                          Select
                        </span>
                      </MenuItem>
                      <MenuItem value="line">Line</MenuItem>
                      <MenuItem value="pie">Pie</MenuItem>
                      <MenuItem value="column">Column</MenuItem>
                      <MenuItem value="bar">Bar</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <InputLabel
                      shrink
                      style={{
                        color: "rgba(0,0,0,0.87)",
                        fontFamily: "Segoe UI",
                        fontWeight: "600",
                        fontSize: "1.0625rem",
                      }}
                      id="demo-simple-select-placeholder-label-label"
                    >
                      No. of items
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={selectItems}
                      onChange={handleNoOfItemsChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                  <br></br>

                  <FormControl className={classes.formControl}>
                    <InputLabel
                      shrink
                      style={{
                        color: "rgba(0,0,0,0.87)",
                        fontFamily: "Segoe UI",
                        fontWeight: "600",
                        fontSize: "1.0625rem",
                      }}
                      id="demo-simple-select-placeholder-label-label"
                    >
                      Data 1
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      value={selectData1}
                      onChange={handleData1Change}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value="">
                        <span
                          style={{
                            color: "rgba(0,0,0,0.5)",
                          }}
                        >
                          Select
                        </span>
                      </MenuItem>
                      <MenuItem value="sales">Sales</MenuItem>
                      <MenuItem value="revenue">Revenue</MenuItem>
                      <MenuItem value="expenditure">Expenditure</MenuItem>
                    </Select>
                  </FormControl>

                  {selectItems > 1 && (
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        style={{
                          color: "rgba(0,0,0,0.87)",
                          fontFamily: "Segoe UI",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Data 2
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={selectData2}
                        onChange={handleData2Change}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="revenue">Revenue</MenuItem>
                        <MenuItem value="expenditure">Expenditure</MenuItem>
                      </Select>
                    </FormControl>
                  )}

                  {selectItems === 3 && (
                    <FormControl className={classes.formControl}>
                      <InputLabel
                        shrink
                        style={{
                          color: "rgba(0,0,0,0.87)",
                          fontFamily: "Segoe UI",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Data 3
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={selectData3}
                        onChange={handleData3Change}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem disabled value="">
                          Select
                        </MenuItem>
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="revenue">Revenue</MenuItem>
                        <MenuItem value="expenditure">Expenditure</MenuItem>
                      </Select>
                    </FormControl>
                  )}

                  <br></br>

                  <Buttonn
                    type="submit"
                    variant="contained"
                    fullWidth
                    className={classes.submit}
                    startIcon={<BarChartIcon />}
                    onClick={handleSubmit}
                  >
                    Visualize
                  </Buttonn>
                </Card>
              </Grid>

              {on && (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} lg={12}>
                    <Card
                      style={{
                        paddingBottom: theme.spacing(2),
                        marginTop: theme.spacing(2),
                      }}
                    >
                      <SalesLineGraph />
                    </Card>
                  </Grid>
                </Grid>
              )}

              <br></br>
            </Grid>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  )
}
