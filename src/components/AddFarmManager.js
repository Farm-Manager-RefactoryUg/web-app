import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BasicTable from "./BasicTable";
import Grid from "@material-ui/core/Grid";
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
  submit: {
    backgroundColor: 'green',
    color: 'white',
    textTransform: "initial",
    fontWeight: "600",
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
}));

export default function AddFarmManager() {

  const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/
  const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const classes = useStyles();
  let [[fullNamee, emaile, passworde], setErrors] = useState(["", "", ""])

  const handleSubmit = (event) => {
    if (fullNamee || emaile || passworde) {
      event.preventDefault()
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case "fullName":
        (!nameRegex.test(value)) ?
          setErrors(["Atleast two names E.g: John Doe", emaile, passworde]) : setErrors(["", emaile, passworde])
        break;
      case "email":
        (!emailRegex.test(value)) ?
          setErrors([fullNamee, "Enter valid email E.g: abc@gmail.com", passworde]) : setErrors([fullNamee, "", passworde])
        break;
      case "password":
        (value.length < 6) ?
          setErrors([fullNamee, emaile, "Password should be more than 6 characters"]) : setErrors([fullNamee, emaile, ""])
        break;

      default:
        break;
    }

  }


  return (
    <Grid container spacing={3} style={{ marginBottom: "20px", }}>

      <Grid item xs={12} sm={12} lg={8}>
        <Card style={{ padding: "16px" }}>
          <BasicTable />
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} lg={4}>
        <Card style={{ padding: "16px" }}>

          <Typography
            component="h6"
            variant="h5"
            style={{ fontWeight: "600", color: "rgba(0,0,0,0.87)", fontSize: "1.0625rem", fontFamily: "Segoe UI", }}>
            Register Farm Manager
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <CssTextField
              autoComplete="fname"
              name="fullName"
              variant="outlined"
              required
              id="fullName"
              label="Username"
              error={fullNamee.length > 0}
              onChange={handleChange}

              margin="normal"
            />
            {fullNamee && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {fullNamee}
            </small>}

            <CssTextField
              variant="outlined"
              required
              id="email"
              label="Email address"
              name="email"
              error={emaile.length > 0}
              onChange={handleChange}

              margin="normal"
            />
            {emaile && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {emaile}
            </small>}

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passworde.length > 0}
              onChange={handleChange}

            />
            {passworde && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {passworde}
            </small>}
            <br></br>

            <Buttonn
              type="submit"
              variant="contained"
              className={classes.submit}
              startIcon={<AddIcon />}
            >
              Add
            </Buttonn>

          </form>
        
        </Card>
      </Grid>

    </Grid>
  );
}

