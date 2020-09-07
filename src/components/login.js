import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


var CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#964c22',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#964c22',
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
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: 'auto',
    backgroundColor: 'green',
    color: 'white',
  },
}));

export default function SignIn(props) {
  let [email, setEmail] = useState()
  let [errors, setErrors] = useState()
  const handleSubmit = event => {
    event.preventDefault()
  }
  const handleChange = event => {
    const emailInput = event.target.value;
    if (emailInput.length < 4) {
      CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'red',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'red',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'red',
            },
          },
        },
      })(TextField);
      setErrors("Invalid Email")
    } else {
      CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#964c22',
            },
            '&:hover fieldset': {
              borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#964c22',
            },
          },
        },
      })(TextField);
      setErrors("")
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              //value={email}
              //autoComplete="email"
              onChange={handleChange}
            />
            <small style={{ color: "red" }}> {errors}</small>
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" style={{ color: "#964c22" }} />}
              label="Remember me"
              style={{ color: "green" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2" style={{ color: 'darkblue', cursor: 'pointer' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" style={{ color: 'darkblue', cursor: 'pointer' }}>
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
            {'Copyright © Refactory '}{new Date().getFullYear()}{'.'}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}









// class Login extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       email: null,
//       password: null,
//     };
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div id="div">

//         <h1>Log in<span id="period">.</span></h1>

//         <form id="loginForm">

//           <label htmlFor="email" id="emailLabel">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//           />

//           <span id="forgotPasswordText"><Link to="/">Forgot password?</Link></span>

//           <button>LOGIN</button>

//           <span id="signUpText">Don't have an account? <Link to="/signup">Sign up!</Link></span>

//         </form>

//         <footer id="loginFooter">
//           Refactory &copy; 2020. All rights reserved.
//         </footer>

//         {/* <img id="loginImg" src={bg} alt="_._._!" /> */}

//       </div>
//     );
//   }
// }

// export default Login;
