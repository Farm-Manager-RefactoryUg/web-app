import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import MenuItem from "@material-ui/core/MenuItem"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"

const Buttonn = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "rgba(123, 239, 178, 0.1)",
      opacity: "0.9",
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
      width: "35ch",
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
  submit: {
    backgroundColor: "white",
    borderColor: "green",
    color: "green",
    float: "right",
    //marginBottom: theme.spacing(2),
    textTransform: "initial",
    fontWeight: "400",
    fontSize: "0.8125rem",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    // left: theme.spacing(1),
    // top: theme.spacing(1),
    color: theme.palette.grey[500],
    margin: 0,
    padding: 0,
  },
  selectRoot: {
    "& label.Mui-focused": {
      color: "rgba(0,0,0,0.87)",
    },
    "& .MuiOutlinedInput-root": {
      width: "35ch",
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
}))

const DialogTitle = withStyles()((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle
      disableTypography
      {...other}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography
        variant="h6"
        style={{
          marginTop: "16px",
          color: "rgba(0,0,0,0.87)",
          fontSize: "1.2rem",
          fontFamily: "Segoe UI",
          fontWeight: 600,
        }}
      >
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const errorText = {
  title: "Only letters and numbers allowed E.g. Biyinzika Mukono 2",
  description: "Only letters and numbers allowed.",
}
//---Review and improve the regular expressions below---
const formSchema = Yup.object().shape({
  title: Yup.string()
    .max(25)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.title),
  description: Yup.string()
    .max(25)
    .required()
    .matches(/^[0-9a-zA-Z\s]*$/, errorText.description),
})

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
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
    <div>
      <Buttonn
        type="submit"
        variant="outlined"
        className={classes.submit}
        startIcon={<EditOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Edit Project
      </Buttonn>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Update Project Details
        </DialogTitle>

        <Divider
          style={{
            margin: "0 0px 4px 0px",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
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
              <DialogContent>
                <Field
                  autoComplete="title"
                  margin="normal"
                  size="small"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                  id="title"
                  label="Title"
                  type="text"
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
                  type="text"
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
              </DialogContent>

              <DialogActions
              // style={{
              //   justifyContent: "flex-start",
              //   marginLeft: "188px",
              //   marginBottom: "16px",
              // }}
              >
                <Button
                  onClick={handleClose}
                  style={{
                    color: "gray",
                    fontSize: "0.8125rem",
                    fontFamily: "Segoe UI",
                  }}
                >
                  cancel
                </Button>

                <Button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  style={{
                    color: "green",
                    fontSize: "0.8125rem",
                    fontFamily: "Segoe UI",
                  }}
                >
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  )
  // : null
}
