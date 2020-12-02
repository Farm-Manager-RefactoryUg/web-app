import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import ProjectAppBar from "../components/ProjectAppBar"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"
import API from "../api"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

const drawerWidth = 240
const Buttonn = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "green",
      opacity: "0.9",
      color: "white",
    },
    "&:active , &:focus": {
      outline: "none",
    },
  },
})(Button)

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(0,0,0,0.87)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.3)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
      "&.Mui-error fieldset": {
        borderColor: "red",
      },
    },
  },
})(TextField)

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
    minHeight: "100vh",
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
  paper: {
    width: "600px",
    margin: "auto",
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 5),
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
  headerText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
    color: "white",
    outline: "none",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: "600",
    textTransform: "initial",
  },
  errorText: {
    color: "red",
    fontSize: "0.8rem",
    fontFamily: "Segoe UI",
  },
  errorIcon: {
    transform: "scale(0.7)",
  },
  snackBar: {
    marginTop: "40px",
  },
  alert: {
    fontFamily: "Segoe UI",
    fontSize: "0.8125rem",
    fontWeight: "400",
    marginLeft: theme.spacing(24),
  },
}))

const errorText = {
  title: "Only letters and numbers allowed E.g. Biyinzika Mukono 2",
  description: "Only letters and numbers allowed.",
}
// The regular expressions should be reviewed and improved
const formSchema = Yup.object().shape({
  name: Yup.string()
    .max(25)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.name),
  location: Yup.string()
    .max(20)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.location),
  address: Yup.string()
    .max(20)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.address),
  contactperson: Yup.string()
    .max(21)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.contactperson),
  phone: Yup.string()
    .required()
    .matches(/^07[0-9]{8}$/, errorText.phone),
  tin: Yup.string()
    .required()
    .matches(/^[0-9]{10}$/, errorText.tin),
})

export default function Project() {
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)")
  const currentUrl = useLocation()
  const [open, setOpen] = useState(false)

  function Alert(props) {
    return <MuiAlert elevation={1} variant="filled" {...props} />
  }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(!open)
  }

  const handleAlert = () => {
    setOpen(true)
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
    document.title = "Create a Project"
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <ProjectAppBar location={currentUrl} />

          <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            className={classes.snackBar}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              className={classes.alert}
            >
              Project created successfully!
            </Alert>
          </Snackbar>

          <main
            maxWidth="xs"
            style={{
              paddingLeft: theme.spacing(3),
              paddingRight: theme.spacing(3),
              width: "100%",
            }}
          >
            <Typography
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                fontFamily: "Segoe UI",
                color: "rgba(0, 0, 0, 0.87)",
                marginTop: theme.spacing(9),
                marginRight: "0",
                paddingRight: "0",
              }}
              component="h1"
            >
              Create Project
            </Typography>

            <Divider
              style={{
                marginTop: theme.spacing(1),
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            />

            <Card className={classes.paper}>
              <Typography className={classes.headerText} component="h1">
                Enter project details
              </Typography>

              <Formik
                initialValues={{
                  title: "",
                  description: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  setSubmitting(true)
                  setOpen(() => true)
                  // axios
                  //   .post(API.farm, values)
                  //   .then(() => {
                  //     setOpen(!open)
                  //     resetForm()
                  //   })
                  //   .catch((error) => {
                  //     console.error("There was an error!", error)
                  //   })
                }}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className={classes.form} noValidate>
                    <Field
                      autoComplete="title"
                      margin="normal"
                      size="small"
                      name="title"
                      variant="outlined"
                      required
                      fullWidth
                      error={errors.title && touched.title}
                      helperText={
                        errors.title &&
                        touched.title && (
                          <span>
                            <ErrorOutlineIcon className={classes.errorIcon} />
                            <span className={classes.errorText}>
                              {errorText.title}
                            </span>
                          </span>
                        )
                      }
                      id="title"
                      label="Title"
                      as={CssTextField}
                    />

                    <Field
                      autoComplete="description"
                      margin="normal"
                      name="description"
                      variant="outlined"
                      required
                      fullWidth
                      multiline
                      rows={5}
                      id="description"
                      label="Description"
                      error={errors.description && touched.description}
                      helperText={
                        errors.description &&
                        touched.description && (
                          <span>
                            <ErrorOutlineIcon className={classes.errorIcon} />
                            <span className={classes.errorText}>
                              {errorText.description}
                            </span>
                          </span>
                        )
                      }
                      as={CssTextField}
                    />

                    <Buttonn
                      type="submit"
                      variant="contained"
                      onClick={handleAlert}
                      className={classes.submit}
                      disabled={isSubmitting}
                    >
                      Create
                    </Buttonn>
                  </Form>
                )}
              </Formik>
            </Card>
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
