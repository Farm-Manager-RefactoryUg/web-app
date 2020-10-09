import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import MenuListComposition from "./Avatar";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
//import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Logo from '../static/images/tree.svg'
import Card from '@material-ui/core/Card';

const Buttonn = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'green',
      opacity: '0.9',
      color: "white",
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
        borderColor: 'rgba(0,0,0,0.3)',
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
    backgroundColor: "#fafafa",
  },
  paper: {
    marginTop: theme.spacing(18),
    padding: theme.spacing(5),
    width: "600px",
    margin: "auto",
    display: 'flex',
    flexDirection: 'column',
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
    fontWeight: "600",
    textTransform: "initial",
  },
  footer: {
    padding: theme.spacing(1, 2),
    paddingBottom: 60,
    marginTop: '50px',
    backgroundColor: 'green',
    color: 'white',
  },
  appBar: {
    backgroundColor: "white",
    minHeight: "50px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: "48px",
  },
  title: {
    flexGrow: 1,
  },
}));


export default function SignIn() {

  const classes = useStyles();
  //let [[fullNamee, desce], setErrors] = useState(["", ""])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    //const { value } = event.target
  }

  useEffect(() => {
    document.title = "Create a Project"
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar)}
      >

        <Toolbar style={{ minHeight: "48px" }} className={classes.toolbar}>

          <Typography
            variant="h6"
            href="/"
            className={classes.title}
            style={{ color: "rgba(0,0,0,0.87)", fontSize: "1.2rem", marginLeft: "30px" }}
          >
            <img src={Logo} alt="logo" width="25px" height="25px" style={{ marginRight: "5px" }} />
            Tele-Farmer
          </Typography>

          <MenuListComposition />

        </Toolbar>

      </AppBar>

      <main maxWidth="xs">
        <Card className={classes.paper}>

          <Typography
            style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
            component="h1"
          >
            {"Create dashboard"}
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>

            <CssTextField
              autoComplete="title"
              margin="normal"
              autoFocus
              name="title"
              variant="outlined"
              required
              fullWidth
              id="title"
              label="Title"
              //error={titlee.length > 0}
              onChange={handleChange}
            />
            {/* {emaile && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {emaile}
            </small>} */}

            <CssTextField
              autoComplete="fname"
              margin="normal"
              name="description"
              variant="outlined"
              required
              fullWidth
              multiline
              rows={5}
              id="fullName"
              label="Description"
              //error={desce.length > 0}
              onChange={handleChange}
            />
            {/* {emaile && <small
              style={{
                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
              }}
            >
              <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
              {emaile}
            </small>} */}


            <Buttonn
              type="submit"
              variant="contained"
              className={classes.submit}
              component='a'
              href={"/projects"}
            >
              Complete Step I
          </Buttonn>

          </form>
        </Card>

      </main>

    </div>
  );
}

