import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Avatar from "@material-ui/core/Avatar";
import michael from "../static/images/2.jfif";
import SaveIcon from "@material-ui/icons/Save";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import API from "../api"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const Buttonn = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "green",
      opacity: "0.9",
    },
    "&:active , &:focus": {
      outline: "none",
    },
  },
})(Button);

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgba(0,0,0,0.87)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.3)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
      "&.Mui-error fieldset": {
        borderColor: "red",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: theme.spacing(2),
  },
  submit: {
    backgroundColor: "green",
    color: "white",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    textTransform: "initial",
    fontWeight: "600",
    height: "40px",
    width: "120px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    display: "none",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(16),
  },
  errorText: {
      color: "red",
      fontSize: "0.8rem",
      fontFamily: "Segoe UI",
  },
  errorIcon: {
      transform: "scale(0.7)",
  },
}));


const errorText = {
  fullName: "Only letters and numbers allowed E.g. Biyinzika Mukono 2",
  email: "Enter a valid email E.g. abc@gmail.com",
  password: "Required.",
}
// The regular expressions should be reviewed and improved
const formSchema = Yup.object()
  .shape({
      fullName: Yup.string()
          .max(25)
          .required()
          .matches(/^[0-9a-zA-Z\s]*$/, errorText.fullName),
      email: Yup.string()
          .max(30)
          .required()
          .email(errorText.email),
      password: Yup.string()
          .max(20)
          .required(errorText.password),
  });


export default function AddFarmManager() {
  let [profileImg, setImage] = useState(michael);
  const [data, setData] = useState()

  const imageHandler = (event) => {
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(API.farm)
      .then(() => {
        //setData(res.data)
        setData({
          fullName: "Wamala Emmanuel Nsubuga",
          email: "e.wamala@ciu.ac.ug",
          password: "11111111",
        })
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [setData]);
  console.log(data)

  return (
    data
    ? <Card className={classes.root}>
      <Typography
        component="h6"
        variant="h5"
        style={{
          fontWeight: "600",
          color: "rgba(0,0,0,0.87)",
          fontSize: "1.0625rem",
          fontFamily: "Segoe UI",
        }}
      >
        Update Profile
      </Typography>

      <main className={classes.container}>
        <div style={{ flex: "3" }}>

          <Formik
            initialValues={data}
            validationSchema={formSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              axios.post(API.farm, values)
                .then(() => {
                  // setOpen(!open)
                })
                .catch((error) => {
                  console.error('There was an error!', error);
                });
            }}
          >

            {({ errors, touched, isSubmitting }) => (
              <Form
                className={classes.form}
                noValidate>

                <Field
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Username"
                  margin="normal"
                  error={errors.fullName && touched.fullName}
                  helperText={errors.fullName
                      && touched.fullName
                      && (<span>
                          <ErrorOutlineIcon
                              className={classes.errorIcon}
                          />
                          <span
                              className={classes.errorText}>
                              {errorText.fullName}
                          </span>
                      </span>)
                  }
                  as={CssTextField}
                />


                <Field
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  name="email"
                  margin="normal"
                  error={errors.email && touched.email}
                  helperText={errors.email
                      && touched.email
                      && (<span>
                          <ErrorOutlineIcon
                              className={classes.errorIcon}
                          />
                          <span
                              className={classes.errorText}>
                              {errorText.email}
                          </span>
                      </span>)
                  }
                  as={CssTextField}
                />

                <Field
                  variant="outlined"
                  required
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={errors.password && touched.password}
                  helperText={errors.password
                      && touched.password
                      && (<span>
                          <ErrorOutlineIcon
                              className={classes.errorIcon}
                          />
                          <span
                              className={classes.errorText}>
                              {errorText.password}
                          </span>
                      </span>)
                  }
                  as={CssTextField}
                />

                <Buttonn
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  className={classes.submit}
                  startIcon={<SaveIcon />}
                  style={{ width: "160px", marginTop: "35px" }}
                >
                  Save changes
            </Buttonn>
          </Form>
            )}
          </Formik>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: "3",
            marginLeft: "35px",
          }}
        >
          <Avatar alt="Michael" src={profileImg} className={classes.large} />

          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={imageHandler}
          />

          <label htmlFor="contained-button-file">
            <Buttonn
              variant="contained"
              className={classes.submit}
              startIcon={<CloudUploadIcon />}
              component="span"
            >
              Upload
            </Buttonn>
          </label>

          <small
            style={{
              fontFamily: "Segoe UI",
              fontSize: "0.8125rem",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            For best results, use an image at least 128px by 128px in .jpg
            format
          </small>
        </div>
      </main>
    </Card>
    : null
  );
}
