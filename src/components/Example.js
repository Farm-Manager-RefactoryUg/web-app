import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Table } from "react-bootstrap";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Example() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    
//   const [items ,setItem] = useState({});

//   useEffect(() =>
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(response => this.setState({ items:response }))
//   );
  return (
    <div>
      <Button variant="success" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h5 className="card-heading">CUSTOMER DETAILS</h5>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-left">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone number</th>
                          <th>Location</th>
                          <th>Product purchased</th>
                          <th>Amount</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      {/* {items.name((items) => ( */}
                      <tbody>
                        <tr>
                          {/* <td key={items.id}>{items.name}</td> */}
                          <td>Name</td>
                          <td>Email</td>
                          <td>Phone number</td>
                          <td>Location</td>
                          <td>Product</td>
                          <td>Amount</td>
                          <td>
                            <Button variant="secondary">Options</Button>
                          </td>
                        </tr>
                      </tbody>
                      {/* ))} */}
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="danger">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
