import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../static/images/tree.svg'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import API from "../api"

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
            color: 'rgba(0,0,0,0.87)',
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
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(16),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    titleDiv: {
        display: "flex",
    },
    navBrand: {
        fontSize: "1.2rem",
        color: "rgba(0,0,0,0.87)",
        marginLeft: "5px",
    },
    avatar: {
        backgroundColor: "green",
        verticalAlign: "super",
    },
    pageTitle: {
        color: "rgba(0,0,0,0.87)",
        fontFamily: "Segoe UI",
        fontWeight: "900",
        fontSize: "2.5rem",
        marginBottom: theme.spacing(1),
    },
    pageSubTitle: {
        color: "rgba(0,0,0,0.87)",
        fontFamily: "Segoe UI",
        fontSize: "1rem",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        '&:hover': {
            color: "white",
        },
        margin: theme.spacing(3, 0, 2),
        marginBottom: theme.spacing(6),
        backgroundColor: "green",
        color: "white",
        outline: "none",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontFamily: "Segoe UI",
        fontWeight: "600",
        fontSize: "1rem",
        float: "right",
    },
    links: {
        '&:hover': {
            color: "green",
        },
        color: "green",
        fontFamily: "Segoe UI",
        fontSize: "1rem",
    },
    footer: {
        position: "fixed",
        bottom: "0",
        right: "40vw",
        backgroundColor: "#fafafa",
        color: "rgba(0,0,0, 0.3)",
        fontFamily: "Segoe UI",
        fontWeight: "800",
        fontSize: "0.9rem",
    },
    errorText: {
        color: "red",
        fontSize: "0.8rem",
        fontFamily: "Segoe UI",
    },
    errorIcon: {
        transform: "scale(0.7)",
    },
})
);

const errorText = {
    email: "Enter valid email E.g: abc@gmail.com",
}

const formSchema = Yup.object()
    .shape({
        email: Yup.string()
            .max(25)
            .required()
            .email(errorText.email),
    });



export default function ForgotPassword() {
    const classes = useStyles();
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let [emaile, setErrors] = useState("")

    const handleSubmit = (event) => {
        if (emaile) {
            event.preventDefault();
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;

        (!emailRegex.test(value))
            ? setErrors("Enter valid email E.g: abc@gmail.com")
            : setErrors("");
    }

    useEffect(() => {
        document.title = "Password Recovery"
    }, []);

    return (
        <div className={classes.root}>

                <div className={classes.paper}>

                    <div
                        className={classes.titleDiv}
                    >
                        <img
                            src={Logo}
                            alt="logo"
                            width="25px"
                            height="25px"
                        />

                        <h4
                            className={classes.navBrand}
                        >
                            Tele-Farmer
                        </h4>
                    </div>


                    <Typography
                        component="h1"
                        variant="h5"
                        className={classes.pageTitle}
                    >
                        Password recovery
                    </Typography>

                    <Typography
                        component="h2"
                        variant="h5"
                        className={classes.pageSubTitle}
                    >
                        Unfortunately the resource you are looking for does not exist. Go back to the previous page and try again.
                    </Typography>

                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={formSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true)
                            axios.post(API, values)
                                .then(() => {
                                    // Add your logic that redirects an authenticated user
                                })
                                .catch((error) => {
                                    console.error('There was an error!', error);
                                });
                        }}
                    >

                        {({ errors, touched, isSubmitting }) => (

                            <Form
                                className={classes.form}
                                noValidate
                            >
                                <Field
                                    variant="outlined"
                                    margin="normal"
                                    autoFocus
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    as={CssTextField}
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
                                />

                                <Buttonn
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    className={classes.submit}
                                >
                                    Submit
                                </Buttonn>

                            </Form>
                        )}
                    </Formik>
                </div>

            <Container maxWidth="sm">
                <footer 
                className={classes.footer}>
                    Copyright © {new Date().getFullYear()}&nbsp;| Refactory, Uganda.
                </footer>
            </Container>

        </div >
    );
}

