import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Avatar from "@material-ui/core/Avatar";
import michael from "../static/images/2.jfif";
import SaveIcon from "@material-ui/icons/Save";

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
}));

export default function AddFarmManager() {
  let [[fullNamee, emaile, passworde], setErrors] = useState(["", "", ""]);
  let [profileImg, setImage] = useState(michael);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    let [fullNamee, emaile, passworde, mobilee] = [];
    const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/;
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    switch (name) {
      case "fullName":
        !nameRegex.test(value)
          ? setErrors([
              "Atleast two names e.g. John Doe",
              emaile,
              passworde,
              mobilee,
            ])
          : setErrors(["", emaile, passworde, mobilee]);
        break;
      case "email":
        !emailRegex.test(value)
          ? setErrors([
              fullNamee,
              "Enter valid email e.g. abc@gmail.com",
              passworde,
              mobilee,
            ])
          : setErrors([fullNamee, "", passworde, mobilee]);
        break;
      case "password":
        value.length < 6
          ? setErrors([
              fullNamee,
              emaile,
              "Password should be more than 6 characters",
              mobilee,
            ])
          : setErrors([fullNamee, emaile, "", mobilee]);
        break;

      default:
        break;
    }
  };
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

  return (
    <Card className={classes.root}>
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
        Profile
      </Typography>

      <main className={classes.container}>
        <div style={{ flex: "3" }}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <CssTextField
              autoComplete="fname"
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Username"
              error={fullNamee.length > 0}
              onChange={handleChange}
              margin="normal"
              defaultValue="Wamala Emmanuel Nsubuga"
            />
            <small
              style={{ color: "red", marginLeft: "15px", fontSize: "0.75rem" }}
            >
              {fullNamee}
            </small>

            <CssTextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              error={emaile.length > 0}
              onChange={handleChange}
              margin="normal"
              defaultValue={"e.wamala@ciu.ac.ug"}
            />
            <small
              style={{ color: "red", marginLeft: "15px", fontSize: "0.75rem" }}
            >
              {emaile}
            </small>

            <CssTextField
              variant="outlined"
              required
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passworde.length > 0}
              onChange={handleChange}
              defaultValue={"Abc123%"}
            />
            <small
              style={{ color: "red", marginLeft: "15px", fontSize: "0.75rem" }}
            >
              {passworde}
            </small>

            <Buttonn
              type="submit"
              variant="contained"
              fullWidth
              className={classes.submit}
              startIcon={<SaveIcon />}
              style={{ width: "160px", marginTop: "35px" }}
            >
              Save changes
            </Buttonn>
          </form>
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
  );
}
