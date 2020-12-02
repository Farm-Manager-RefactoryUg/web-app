import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import ProjectAppBar from "../components/ProjectAppBar"
import Chip from "@material-ui/core/Chip"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
// import API from "../api"
// import axios from "axios"

const drawerWidth = 240

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
  marginFb: {
    "&:hover": {
      backgroundColor: "	rgba(0,128,0,0.9)",
      color: "white",
    },
    backgroundColor: "green",
    color: "white",
    margin: theme.spacing(1),
    position: "fixed",
    bottom: "25px",
    right: "40px",
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const currentUrl = useLocation()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  //   const [projects, setProjects] = useState([])

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

  //   useEffect(() => {
  //     document.title = "Create a project"
  //     axios
  //       .get(API.farm)
  //       .then((response) => {
  //         setProjects(response.data)
  //         console.log(projects)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [projects])

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <ProjectAppBar location={currentUrl} />

          <main className={classes.content}>
            <div
              className={classes.appBarSpacer}
              style={{ minHeight: "3rem" }}
            />

            <Container style={{ marginTop: "60px" }}>
              <Typography
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  fontFamily: "Segoe UI",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
                component="h1"
              >
                {"My Projects"}
              </Typography>

              <Divider
                style={{
                  marginTop: "15px",
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              />

              <Grid
                container
                spacing={4}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {/* {projects.map((project) => ( */}
                <Grid item xs={12} md={6} lg={6}>
                  <Card
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent style={{ paddingBottom: "8px" }}>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {/* {project.name} */}
                        Biyinzika Mukono II
                        <IconButton
                          title="Delete Dashboard"
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          style={{
                            margin: "0",
                            padding: "0",
                            float: "right",
                          }}
                        >
                          <DeleteIcon
                            style={{
                              color: "green",
                              transform: "scale(0.7)",
                            }}
                          />
                        </IconButton>
                      </Typography>

                      <Chip
                        classes={{ label: classes.label }}
                        style={{
                          fontFamily: "Segoe UI",
                          backgroundColor: "orange",
                        }}
                        label="In progress"
                        size="small"
                      />

                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {
                          "Its a middle-sized farm which comprises of both livestock and crops. It has got buildings where different equipment such as tractors and supplies are stored."
                        }
                      </Typography>

                      <Divider
                        style={{
                          marginTop: "20px",
                          marginBottom: "8px",
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}
                      />

                      <Button
                        color="primary"
                        style={{
                          fontSize: "0.8125rem",
                          textTransform: "lowercase",
                          width: "100%",
                          color: "green",
                        }}
                        component={Link}
                        to={"/dashboard"}
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <Card
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent style={{ paddingBottom: "8px" }}>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {/* {project.name} */}
                        Robasta Fortportal
                        <IconButton
                          title="Delete Dashboard"
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          style={{
                            margin: "0",
                            padding: "0",
                            float: "right",
                          }}
                        >
                          <DeleteIcon
                            style={{
                              color: "green",
                              transform: "scale(0.7)",
                            }}
                          />
                        </IconButton>
                      </Typography>

                      <Chip
                        classes={{ label: classes.label }}
                        style={{
                          fontFamily: "Segoe UI",
                          backgroundColor: "orange",
                        }}
                        label="In progress"
                        size="small"
                      />

                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {
                          "It's a small-sized farm that deals with livestock only. It has a list of chores that must be done everyday especially the poultry houses and also swine parlors. Different activities are done on this farm; monitoring the conditions inside the different houses on the farm, collection of eggs from chicken house, monitoring the animals health and so on."
                        }
                      </Typography>

                      <Divider
                        style={{
                          marginTop: "20px",
                          marginBottom: "8px",
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}
                      />

                      <Button
                        color="primary"
                        style={{
                          fontSize: "0.8125rem",
                          textTransform: "lowercase",
                          width: "100%",
                          color: "green",
                        }}
                        component={Link}
                        to={"/dashboard"}
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <Card
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent style={{ paddingBottom: "8px" }}>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {/* {project.name} */}
                        Bukomansimbi Mixed Farm
                        <IconButton
                          title="Delete Dashboard"
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          style={{
                            margin: "0",
                            padding: "0",
                            float: "right",
                          }}
                        >
                          <DeleteIcon
                            style={{
                              color: "green",
                              transform: "scale(0.7)",
                            }}
                          />
                        </IconButton>
                      </Typography>

                      <Chip
                        classes={{ label: classes.label }}
                        style={{
                          fontFamily: "Segoe UI",
                          backgroundColor: "orange",
                        }}
                        label="In progress"
                        size="small"
                      />

                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {
                          "This farm involves running a system of livestock and arable crops being grown and raised. It involves brown Swiss dairy cows. We are able to grow upto 70% of the food required by cows and other animals in the farm to reduce on costs."
                        }
                      </Typography>

                      <Divider
                        style={{
                          marginTop: "20px",
                          marginBottom: "8px",
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}
                      />

                      <Button
                        color="primary"
                        style={{
                          fontSize: "0.8125rem",
                          textTransform: "lowercase",
                          width: "100%",
                          color: "green",
                        }}
                        component={Link}
                        to={"/dashboard"}
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <Card
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    <CardContent style={{ paddingBottom: "8px" }}>
                      <Typography
                        gutterBottom
                        component="h6"
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0",
                          fontWeight: "600",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {/* {project.name} */}
                        Galileo Goat Project
                        <IconButton
                          title="Delete Dashboard"
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                          style={{
                            margin: "0",
                            padding: "0",
                            float: "right",
                          }}
                        >
                          <DeleteIcon
                            style={{
                              color: "green",
                              transform: "scale(0.7)",
                            }}
                          />
                        </IconButton>
                      </Typography>

                      <Chip
                        classes={{ label: classes.label }}
                        style={{
                          fontFamily: "Segoe UI",
                          backgroundColor: "teal",
                        }}
                        label="Finished"
                        size="small"
                      />

                      <Typography
                        style={{
                          fontFamily: "Segoe UI",
                          padding: "0px",
                          paddingTop: "10px",
                          color: "rgba(0, 0, 0, 0.87)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {
                          "This farm involves raising and breeding of domestic goats as a branch of animal husbandry. And we principally do farm goats for their meat, milk, fibre and skins. Goats do well when allowed to roam about and browse on grass and shrubs. They love to feed on the leaves of small trees and nibble on small twigs."
                        }
                      </Typography>

                      <Divider
                        style={{
                          marginTop: "20px",
                          marginBottom: "8px",
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}
                      />

                      <Button
                        color="primary"
                        style={{
                          fontSize: "0.8125rem",
                          textTransform: "lowercase",
                          width: "100%",
                          color: "green",
                        }}
                        component={Link}
                        to={"/dashboard"}
                      >
                        View
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                {/* ))} */}
              </Grid>
            </Container>

            <Fab
              aria-label="add"
              className={classes.marginFb}
              title="Create project"
              component={Link}
              to={"/project"}
            >
              <AddIcon />
            </Fab>
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
