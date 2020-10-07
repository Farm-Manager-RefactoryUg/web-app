import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopNav from "./TopNav";

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
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: 'orange',
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
    marginTop: '50px',
    backgroundColor: 'green',
    color: 'white',
  },
}));

export default function SignIn() {
  let [[fullNamee, emaile, passworde, mobilee], setErrors] = useState(["", "", "", ""])

  const handleSubmit = event => {
    event.preventDefault()
  }
  const handleChange = event => {
    const { name, value } = event.target
    // eslint-disable-next-line no-use-before-define
    let [fullNamee, emaile, passworde, mobilee] = [fullNamee, emaile, passworde, mobilee]
    const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const mobileRegex = /^07[0-9]{8}$/

    switch (name) {
      case "fullName":
        (!nameRegex.test(value)) ? 
          setErrors(["Atleast two names e.g. John Doe", emaile, passworde, mobilee]) : setErrors(["", emaile, passworde, mobilee])
        break;
      case "email":
        (!emailRegex.test(value)) ? 
          setErrors([fullNamee, "Enter valid email e.g. abc@gmail.com", passworde, mobilee]) : setErrors([fullNamee, "", passworde, mobilee])
        break;
      case "password":
        (value.length < 6) ? 
        setErrors([fullNamee, emaile, "Password should be more than 6 characters", mobilee]) : setErrors([fullNamee, emaile, "", mobilee])
        break;
      case "mobile":
        (!mobileRegex.test(value)) ? 
          setErrors([fullNamee, emaile, passworde, "Number should be 10 digits e.g. 0700123117"]) : setErrors([fullNamee, emaile, passworde, ""])
        break;
      default:
        break;
    }

  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "green" }}>
            Sign up
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <CssTextField
              autoComplete="fname"
              margin="normal"
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Fullname"
              error={fullNamee.length > 0}
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{fullNamee}</small>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              error={emaile.length > 0}
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{emaile}</small>
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
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mobile"
              label="Mobile number"
              id="mobile"
              error={mobilee.length > 0}
              onChange={handleChange}
            />
            <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem" }}>{mobilee}</small>

            <Buttonn
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign up
            </Buttonn>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2" style={{ color: 'green' }}>
                  Already have an account? Log in
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
    </div>
  );
}

