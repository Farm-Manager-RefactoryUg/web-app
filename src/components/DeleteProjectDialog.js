import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"

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
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: "40px",
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
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        size="small"
        style={{ margin: "0", padding: "0" }}
        onClick={handleClickOpen}
      >
        <DeleteOutlineIcon
          style={{
            color: "green",
            transform: "scale(0.8)",
          }}
        />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        style={{
          textAlign: "center",
        }}
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle id="form-dialog-title" onClose={handleClose}>
          Are you sure you want to delete this project?
        </DialogTitle>

        <DialogActions style={{ justifyContent: "center" }}>
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
              color: "red",
              fontSize: "0.8125rem",
              fontFamily: "Segoe UI",
            }}
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
