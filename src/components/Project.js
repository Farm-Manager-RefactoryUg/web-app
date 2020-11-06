import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProjectAppBar from "./ProjectAppBar";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const drawerWidth = 240;
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
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
    minHeight: "100vh",
  },
  spacing: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    margin: "0px !important",
  },
  drawerPaper: {
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  paper: {
    width: "600px",
    margin: "auto",
    marginTop: theme.spacing(8),
    padding: theme.spacing(1, 5),
    display: 'flex',
    flexDirection: 'column',
  },
  // fixedHeight: {
  //   height: 150,
  // },
  label: {
    fontSize: "0.7rem",
    color: "white",
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
}));

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}

export default function Dashboard() {

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const classes = useStyles();
  const [open, setOpen] = useState(false);
   
  const currentUrl = useLocation();
  
  const [form, setForm] = useState({
    name: "",
    location: "",
    address: "",
    contactperson: "",
    phone: "",
    tin: "",
  })
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    axios.post('https://farmmanager-api.herokuapp.com/api/farm/', form)
      .then((response) => setOpen(!open))

      .catch((error) => {
        console.error('There was an error!', error);
      });    
  }
   
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(!open);
  };  

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiGrid: {
            "spacing-xs-2": "-6px !important",
          },
        },    
         palette: {
          type: prefersDarkMode ? "light" : "dark",
        },
      }),
    [prefersDarkMode]
  );

      
  const handleChange = (event) => {
    const { name, value } = event.target;
   
        switch (name) {
          case "name":
            setForm({...form, name: value})
            break;

          case "location":
           setForm({...form, location: value})
            break;
          case "address":
           setForm({...form, address: value})
            break;
        case "contactperson":
           setForm({...form, contactperson: value})
            break;
        case "phone":
           setForm({...form, phone: value})
            break;
        case "tin":
           setForm({...form, tin: value})
            break;

          default:
            break;
        }
   
  }

  useEffect(() => {
    document.title = "Create a Project"
  }, []);
  const { vertical, horizontal } = state;
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>

          <ProjectAppBar location={currentUrl} />
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center" }}>
            <Alert onClose={handleClose} severity="success">
              Your Project Has been successfully created!
            </Alert>
          </Snackbar>

          <main maxWidth="xs" style={{ margin: "auto" }}>
            <Card className={classes.paper}>

              <Typography
                style={{ fontSize: "1.2rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
                component="h1"
              >
                {"Create Project"}
              </Typography>

              <form className={classes.form} href="" onSubmit={handleFormSubmit} noValidate>

                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  value={form.name}
                  id="name"
                  label="Name"
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="location"
                  variant="outlined"
                  required
                  value={form.location}
                  fullWidth
                  id="location"
                  label="Location"
                  onChange={handleChange}
                />

                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="address"
                  variant="outlined"
                  required
                  value={form.address}
                  fullWidth
                  id="address"
                  label="Address"
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="contactperson"
                  variant="outlined"
                  required
                  value={form.contactperson}
                  fullWidth
                  id="contactPerson"
                  label="Contact Person"
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="phone"
                  variant="outlined"
                  required
                  value={form.phone}
                  fullWidth
                  id="phone"
                  label="Phone"
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  name="tin"
                  variant="outlined"
                  required
                  value={form.tin}
                  fullWidth
                  id="tin"
                  label="TIN"
                  onChange={handleChange}
                />
               
                <Buttonn
                  type="Submit"
                  variant="contained"
                  className={classes.submit}     
                  
                >
                  CREATE
          </Buttonn>

              </form>
            </Card>

          </main>


        </div>
      </ThemeProvider>
    </>
  );
}
