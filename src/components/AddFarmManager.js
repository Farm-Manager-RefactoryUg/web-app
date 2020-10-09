import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BasicTable from "./BasicTable";

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

    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "white",
    paddingTop: theme.spacing(3),
    paddingLeft: "40px",
    paddingRight: "40px",
    marginBottom: theme.spacing(6),
  },
  form: {
    width: '50%', // Fix IE 11 issue.
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    //marginTop: theme.spacing(1),
    textTransform: "initial",
    fontWeight: "600",
    height: "55px",
    width: "120px",
    marginTop: "35px",
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
    <div className={classes.root}>

      <Typography
        component="h6"
        variant="h5"
        style={{ fontWeight: "600", color: "rgba(0,0,0,0.87)", fontSize: "1.2rem", fontFamily: "Segoe UI", marginBottom: "30px", }}>
        FARM MANAGERS
      </Typography>

      <Typography
        component="h6"
        variant="h5"
        style={{ fontWeight: "600", color: "rgba(0,0,0,0.87)", fontSize: "1.0625rem", fontFamily: "Segoe UI" }}>
        Register
      </Typography>

      <main maxWidth="xs">
        <div className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <CssTextField
              autoComplete="fname"
              name="fullName"
              variant="outlined"
              required
              fullWidth
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
              fullWidth
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
              fullWidth
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
              fullWidth
              className={classes.submit}
            >
              Add
            </Buttonn>

          </form>
        </div>

      </main>

      <BasicTable />
    </div>
  );
}

