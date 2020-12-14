import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Logo from "../static/images/tree.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleDiv: {
    display: "flex",
  },
  navBrand: {
    fontSize: "1.2rem",
    color: "rgba(0,0,0,0.87)",
    marginLeft: "5px",
  },
  pageTitle: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontWeight: "900",
    fontSize: "2.5rem",
    marginBottom: theme.spacing(1),
  },
  pageSubTitle: {
    color: "rgba(0,0,0,0.87)",
    fontFamily: "Segoe UI",
    fontSize: "1rem",
  },
}))

export default function PageNotFound() {
  const classes = useStyles()

  useEffect(() => {
    document.title = "404 - page not found"
  }, [])

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.titleDiv}>
            <img src={Logo} alt="logo" width="25px" height="25px" />
            <h4 className={classes.navBrand}>Tele-Farmer</h4>
          </div>

          <Typography component="h1" variant="h5" className={classes.pageTitle}>
            Oops.. Something went wrong!
          </Typography>

          <Typography
            component="h2"
            variant="h5"
            className={classes.pageSubTitle}
          >
            <li>Check your internet connection and try again.</li>
          </Typography>
        </div>
      </Container>
    </div>
  )
}
