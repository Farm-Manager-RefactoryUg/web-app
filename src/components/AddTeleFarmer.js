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
      width: "300px",
      marginRight: "5px",

    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "white",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: "40px",
    paddingRight: "40px",
    marginBottom: theme.spacing(1),
  },
  form: {
    width: '50%',
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    textTransform: "initial",
    fontWeight: "600",
    height: "55px",
    width: "70px",
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
    <div className={classes.root}>

      {/* <Typography
        component="h6"
        variant="h5"
        style={{ fontWeight: "400", color: "rgba(0,0,0,0.87)", fontSize: "1.2rem", fontFamily: "Segoe UI", marginBottom: "30px", }}>
        TELE-FARMERS
      </Typography> */}

      <Typography
        component="h6"
        variant="h5"
        style={{ fontWeight: "400", color: "rgba(0,0,0,0.87)", fontSize: "1.0125rem", fontFamily: "Segoe UI" }}>
        REGISTER TELE-FARMER
      </Typography>

      <main maxWidth="xs">
        <div className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>

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

            <Buttonn
              type="submit"
              variant="contained"
              className={classes.submit}
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
        </div>
      </main>

      <BasicTable />
    </div>
  );
}

