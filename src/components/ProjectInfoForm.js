import React, { useEffect, useState } from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"
import API from "../api"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"
import SaveIcon from "@material-ui/icons/Save"
import svgimage from "../static/images/settings.svg"
import Grid from "@material-ui/core/Grid"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

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
  },
  selectRoot: {
    "& label.Mui-focused": {
      color: "rgba(0,0,0,0.87)",
    },
    "& .MuiOutlinedInput-root": {
      width: "18ch",
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
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 2.5, 2, 2.5),
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.7rem",
    color: "white",
  },
  headerText: {
    fontSize: "1.0625rem",
    fontWeight: "600",
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginBottom: "0",
    width: "160px",
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
  },
  select: {
    display: "block",
  },
  image: {
    width: "100%",
    transform: "scale(0.9)",
  },
}))

const errorText = {
  title: "Only letters and numbers allowed E.g. Biyinzika Mukono 2",
  description: "Only letters and numbers allowed.",
}
//---Review and improve the regular expressions below---
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
  const [open, setOpen] = useState(false)
  // const [data, setData] = useState()

  //   useEffect(() => {
  //     axios
  //       .get(API.farm)
  //       //---Remove the .then chain below when the API is available---
  //       .then(() => {
  //         setData({
  //           title: "Biyinzika Mukono II",
  //           description:
  //             "If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item.",
  //           status: "inprogress",
  //         })
  //         //---Uncomment the .then chain below when the API is available---
  //         // .then((res) => {
  //         //     setData(res.data)
  //         // })
  //       })
  //       .catch((error) => {
  //         //---Review and improve the error handling logic below---
  //         console.error("There was an error!", error)
  //       })
  //   }, [setData])

  // return data ? (
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <Typography className={classes.headerText} component="h1">
              Update Project Info
            </Typography>

            <Formik
              initialValues={{
                title: "Biyinzika Mukono II",
                description:
                  "Its a middle-sized farm which comprises of both livestock and crops. It has got buildings where different equipment such as tractors and supplies are stored.",
                status: "inprogress",
              }}
              validationSchema={formSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true)
                // axios
                //   .post(API.farm, values)
                //   .then(() => {
                //     setOpen(!open)
                //   })
                //   .catch((error) => {
                //     //---Review and improve the error handling logic below---
                //     console.error("There was an error!", error)
                //   })
              }}
            >
              {({ errors, touched, isSubmitting, handleChange, values }) => (
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

                  <TextField
                    id="status"
                    variant="outlined"
                    margin="normal"
                    name="status"
                    select
                    label="Status"
                    classes={{
                      root: classes.selectRoot,
                    }}
                    className={classes.select}
                    value={values.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="inprogress">In progress</MenuItem>
                    <MenuItem value="finished">Finished</MenuItem>
                  </TextField>

                  <Buttonn
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    disabled={isSubmitting}
                    startIcon={<SaveIcon />}
                  >
                    Save changes
                  </Buttonn>
                </Form>
              )}
            </Formik>
          </Grid>

          <Grid item lg={6}>
            <img
              alt="Update project profile"
              src={svgimage}
              //height="410px"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}
