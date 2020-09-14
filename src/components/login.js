import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    minHeight: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#964c22',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',
    color: 'white',
    outline: 'none',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: 'auto',
    backgroundColor: 'green',
    color: 'white',
  },
}));

export default function SignIn() {
  var [[ emaile, passworde ], setErrors] = useState(["", ""])

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        emaile = (!regex.test(value)) ? setErrors(["Enter valid email e.g. abc@gmail.com", passworde]) : setErrors(["", passworde])
      break;

      case "password":
        passworde = (value.length < 6) ? setErrors([emaile, "Password should be more than 6 characters"]) : setErrors([emaile, ""])
      break;

      default:
        break;
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "green" }}>
            Log in
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={emaile.length > 0}
              autoComplete="email"
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem" }}>{emaile}</small>
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
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem" }}>{passworde}</small>
            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Log In
            </Buttonn>
            <Grid container >
              <Grid item xs>
                <Link to="/" variant="body2" style={{ color: 'green', cursor: 'pointer' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" style={{ color: 'green', cursor: 'pointer' }}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" >
            © {new Date().getFullYear()} Refactory
          </Typography>
        </Container>
      </footer>
    </div >
  );
}

