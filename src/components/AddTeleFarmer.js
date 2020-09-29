import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#964c22',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#964c22',
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
    paddingTop: "60px",
    paddingBottom: "60px",
    marginBottom: theme.spacing(6),
  },
  paper: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
}));

export default function AddFarmManager() {
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
      <Container component="main" maxWidth="xs">

        <div className={classes.paper}>

          <Typography component="h6" variant="h5" style={{ marginBottom: "15px", fontWeight: "600", color: "#964c22", fontSize: "1.015rem" }}>
            Add a tele-farmer to this project.
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <CssTextField
              variant="outlined"
              fullWidth
              required
              id="email"
              label="Email address"
              name="email"
              error={emaile.length > 0}
              onChange={handleChange}
              size="small"
              margin="dense"
            />

            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{emaile}</small>

            
            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Add
            </Buttonn>

          </form>
        </div>

      </Container>

    </Card>
  );
}

