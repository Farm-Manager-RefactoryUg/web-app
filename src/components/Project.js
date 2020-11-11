import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProjectAppBar from "./ProjectAppBar";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";


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

export default function Dashboard() {

  const classes = useStyles();
  const currentUrl = useLocation();
  //let [[fullNamee, desce], setErrors] = useState(["", ""])
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

 

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

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      name: "Emilly",
      location: "Kasanga",
      address: "Nakabugo-Bbira",
      contactperson: "Seth",
      phone: 734567332,
      tin: 123456,
    };
      axios
        .post("https://farmmanager-api.herokuapp.com/api/farm/", user)
        .then(
          (response) => {
            console.log(response);
            // window.location = "/";
          },
          (error) => {
            console.log(error);
          }
        );
  };
  

  const handleChange = (event) => {
    //const { value } = event.target
  }

  useEffect(() => {
    document.title = "Create a Project"
     
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <ProjectAppBar location={currentUrl} />

          <main maxWidth="xs" style={{ margin: "auto" }}>
            <Card className={classes.paper}>
              <Typography
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  fontFamily: "Segoe UI",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
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
                  // required
                  fullWidth
                  id="title"
                  label="Name"
                  //error={titlee.length > 0}
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="title"
                  variant="outlined"
                  // required
                  fullWidth
                  id="title"
                  label="Location"
                  //error={titlee.length > 0}
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="title"
                  variant="outlined"
                  // required
                  fullWidth
                  id="title"
                  label="Address"
                  //error={titlee.length > 0}
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="title"
                  variant="outlined"
                  // required
                  fullWidth
                  id="title"
                  label="Contact Person"
                  //error={titlee.length > 0}
                  onChange={handleChange}
                />
                <CssTextField
                  autoComplete="title"
                  margin="normal"
                  autoFocus
                  name="title"
                  variant="outlined"
                  // required
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
                  // required
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
                  // component='a'
                  // href={"/projects"}
                >
                  Complete Step I
                </Buttonn>
              </form>
            </Card>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
