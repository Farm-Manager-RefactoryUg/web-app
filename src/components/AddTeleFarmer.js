import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import TeleFarmerTable from "./TeleFarmerTable";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';

const Buttonn = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'green',
      opacity: '0.9'
    },
    '&:active , &:focus': {
      outline: 'none',
    },
  },
})(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(0,0,0,0.87)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.3)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '&.Mui-error fieldset': {
        borderColor: 'red',
      },
      width: "300px",
      marginRight: "5px",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "20px 15%",
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    marginTop: theme.spacing(2),
    textTransform: "initial",
    fontWeight: "600",
    padding: theme.spacing(1),
    paddingRight: theme.spacing(3),
  },
}));


export default function AddTeleFarmer() {
  const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const classes = useStyles();
  let [emaile, setErrors] = useState("")

  const handleSubmit = event => {
    if (emaile) {
      event.preventDefault();
    }
  }

  const handleChange = (event) => {
    const { value } = event.target;

    (!emailRegex.test(value))
      ? setErrors("Enter valid email E.g: abc@gmail.com")
      : setErrors("");
  }

  return (
      <Card style={{ padding: "16px" }}>

        <Typography
          component="h6"
          variant="h5"
          style={{ fontWeight: "600", color: "rgba(0,0,0,0.87)", fontSize: "1.0625rem", fontFamily: "Segoe UI", }}>
          Manage Tele-Farmers
                </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>

          <CssTextField
            margin="normal"
            size="small"
            variant="outlined"
            required
            id="email"
            label="Email address"
            name="email"
            error={emaile.length > 0}
            onChange={handleChange}
          />

          <Buttonn
            type="submit"
            variant="contained"
            className={classes.submit}
            startIcon={<AddIcon />}
          >
            Add
            </Buttonn>
          <br></br>

          {emaile && <small
            style={{
              color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
            }}
          >
            <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
            {emaile}
          </small>}

        </form>

        <TeleFarmerTable />


      </Card>
  );
}

