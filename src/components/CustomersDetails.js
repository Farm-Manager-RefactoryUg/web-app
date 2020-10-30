import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import { Table } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function CustomersDetails() {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [open, setOpen] = React.useState(false);
  const [user, setuser] = useState({});
  const [email, setId] = useState();
  const handleClickOpen = () => {
    setOpen(true);
    setId(user.email);
  };
   const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
const handleFullWidthChange = (event) => {
  setFullWidth(event.target.checked);
};
const handleMaxWidthChange = (event) => {
  setMaxWidth(event.target.value);
};

  useEffect(() => {
    axios
      .get(`https://farmmanager-api.herokuapp.com/api/customer/${email}`)
      .then((response) => {
        setuser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  return (
    <div>
      <Button variant="success" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <h5 className="card-heading">CUSTOMER DETAILS</h5>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            ></DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            value={email}
                            onChange={(e) => setId(e.target.value)}
                            type="text"
                            placeholder="PLease Enter customer Id No"
                          />
                        </Form.Group>
                      </Form>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Delivery Address</th>
                            <th>Product purchased</th>
                            <th>Amount</th>
                            <th>Date</th>
                            {/* <th>Options</th> */}
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td key={user.id}>{user.name}</td>
                            <td>
                              <a href="emailto:{user.email} ">{user.email} </a>{" "}
                            </td>
                            <td>
                              <a href="tel:{user.phone} ">{user.telephone1} </a>{" "}
                            </td>
                            <td>{user.deliveryaddress}</td>
                            <td>Product</td>
                            <td>Amount</td>
                            <td>Date</td>
                            {/* <td>
                              <Button variant="secondary">Options</Button>
                            </td> */}
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Typography>
            </DialogContent>
          </DialogContentText>

          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </form>
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
