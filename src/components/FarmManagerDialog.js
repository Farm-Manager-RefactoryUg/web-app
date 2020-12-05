import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import AddIcon from "@material-ui/icons/Add"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

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
    marginBottom: theme.spacing(2),
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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Buttonn
        type="submit"
        variant="outlined"
        className={classes.submit}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New
      </Buttonn>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Update the farm manager table
        </DialogTitle>

        <Divider
          style={{
            margin: "0 0px 4px 0px",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />

        <DialogContent>
          <DialogContentText
            style={{
              color: "rgba(0,0,0,0.87)",
              fontSize: "0.8125rem",
              fontFamily: "Segoe UI",
              marginBottom: "20px",
            }}
          >
            To add a farm manager to this project, please enter a valid e-mail
            address here.
          </DialogContentText>

          <CssTextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: "gray",
              fontSize: "0.8125rem",
              fontFamily: "Segoe UI",
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleClose}
            style={{
              color: "green",
              fontSize: "0.8125rem",
              fontFamily: "Segoe UI",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
