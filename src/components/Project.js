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
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import API from "../endPoints"

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
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(12),
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
  headerText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
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
  errorText: {
    color: "red",
    fontSize: "0.8rem",
    fontFamily: "Segoe UI"
  },
  errorIcon: {
    transform: "scale(0.7)",
  },
  lastErrorText: {
    marginBottom: "10px"
  }
}));


export default function Dashboard() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const currentUrl = useLocation();
  const [form, setForm] = useState({
    name: "",
    location: "",
    address: "",
    contactperson: "",
    phone: "",
    tin: "",
  })
  const [errorMessages, setErrors] = useState({
    name: "",
    location: "",
    address: "",
    contactperson: "",
    phone: "",
    tin: "",
  })

  const handleFormSubmit = (event) => {
    axios.post(API.farm, form)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error('There was an error!', error);
      });
    event.preventDefault();
  }

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
    const nameRegex = /^[a-zA-Z]+[ a-zA-Z]*$/
    const contactPersonRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/
    const mobileRegex = /^07[0-9]{8}$/
    const alphaNumRegex = nameRegex
    //const numberRegex = /^[0-9]*$/

    switch (name) {
      case "name":
        (!nameRegex.test(value))
          ? setErrors({ ...errorMessages, name: "Only letters and numbers allowed E.g. BIyinizika 2" })
          : setErrors({ ...errorMessages, name: "" });
        setForm({ ...form, name: value })
        break;
      case "location":
        (!alphaNumRegex.test(value))
          ? setErrors({ ...errorMessages, location: "Enter valid address E.g. Muyenga, Bukasa" })
          : setErrors({ ...errorMessages, location: "" });
        setForm({ ...form, location: value })
        break;
      case "address":
        (!alphaNumRegex.test(value))
          ? setErrors({ ...errorMessages, address: "Enter valid address E.g. Muyenga, Bukasa" })
          : setErrors({ ...errorMessages, address: "" });
        setForm({ ...form, address: value })
        break;
      case "contactperson":
        (!contactPersonRegex.test(value))
          ? setErrors({ ...errorMessages, contactperson: "At least two names E.g. John Doe" })
          : setErrors({ ...errorMessages, contactperson: "" });
        setForm({ ...form, contactperson: value })
        break;
      case "phone":
        (!mobileRegex.test(value))
          ? setErrors({ ...errorMessages, phone: "Enter valid number E.g. 0773763258" })
          : setErrors({ ...errorMessages, phone: "" });
        setForm({ ...form, phone: value })
        break;
      case "tin":
        (value.length !== 10)
          ? setErrors({ ...errorMessages, tin: "Enter valid tin" })
          : setErrors({ ...errorMessages, tin: "" });
        setForm({ ...form, tin: value })
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    document.title = "Create a Project"
  }, []);


  return (
    <>
      <ThemeProvider
        theme={theme}>
        <div
          className={classes.root}
        >

          <ProjectAppBar
            location={currentUrl}
          />

          <main
            maxWidth="xs"
            style={{ margin: "auto" }}
          >
            <Card
              className={classes.paper}
            >

              <Typography
                className={classes.headerText}
                component="h1"
              >
                Create Project
              </Typography>

              <form
                className={classes.form}
                onSubmit={handleFormSubmit}
                noValidate>

                <CssTextField
                  autoComplete="name"
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

                {errorMessages.name &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.name}
                  </small>
                }

                <CssTextField
                  autoComplete="location"
                  margin="normal"
                  name="location"
                  variant="outlined"
                  required
                  value={form.location}
                  fullWidth
                  id="location"
                  label="Location"
                  onChange={handleChange}
                />

                {errorMessages.location &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.location}
                  </small>
                }

                <CssTextField
                  autoComplete="address"
                  margin="normal"
                  name="address"
                  variant="outlined"
                  required
                  value={form.address}
                  fullWidth
                  id="address"
                  label="Address"
                  onChange={handleChange}
                />

                {errorMessages.address &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.address}
                  </small>
                }

                <CssTextField
                  autoComplete="contactperson"
                  margin="normal"
                  name="contactperson"
                  variant="outlined"
                  required
                  value={form.contactperson}
                  fullWidth
                  id="contactPerson"
                  label="Contact Person"
                  onChange={handleChange}
                />

                {errorMessages.contactperson &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.contactperson}
                  </small>
                }

                <CssTextField
                  autoComplete="phone"
                  margin="normal"
                  name="phone"
                  variant="outlined"
                  required
                  value={form.phone}
                  fullWidth
                  id="phone"
                  label="Phone"
                  onChange={handleChange}
                />

                {errorMessages.phone &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.phone}
                  </small>
                }

                <CssTextField
                  autoComplete="tin"
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

                {errorMessages.tin &&
                  <small
                    className={classes.errorText}
                  >
                    <ErrorOutlineIcon
                      className={classes.errorIcon}
                    />
                    {errorMessages.tin}
                  </small>
                }

                <Buttonn
                  type="submit"
                  variant="contained"
                  className={classes.submit}
                >
                  Send
                </Buttonn>

              </form>
            </Card>

          </main>

        </div>
      </ThemeProvider>
    </>
  );
}
