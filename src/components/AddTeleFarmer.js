import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
      color: 'orange',
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
    marginBottom: theme.spacing(6),
  },
  form: {
    width: '50%',
  },
  submit: {
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    textTransform: "initial",
    fontWeight: "600",
    height: "40px",
    width: "60px",
  },
}));

export default function AddTeleFarmer() {
  let [emaile, setErrors] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
  }
  const handleChange = event => {
    const { value } = event.target
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

      (!emailRegex.test(value))
      ? setErrors("Enter valid email e.g. abc@gmail.com")
      : null

  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <Typography
        component="h6"
        variant="h5"
        style={{ fontWeight: "600", color: "green", fontSize: "1.2rem", fontFamily: "Segoe UI" }}>
        REGISTER
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
              size="small"
              margin="dense"
            />

            <Buttonn
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Add
            </Buttonn>

            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{emaile}</small>

          </form>
        </div>

      </main>

    </Card>
  );
}

