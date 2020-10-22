import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../static/images/tree.svg'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
    }
}));

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

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>

                    <div className={classes.titleDiv}>
                        <img src={Logo} alt="logo" width="25px" height="25px" />
                        <h4 className={classes.navBrand}>Tele-Farmer</h4>
                    </div>


                    <Typography component="h1" variant="h5" className={classes.pageTitle}>
                        Password recovery
                    </Typography>

                    <Typography component="h2" variant="h5" className={classes.pageSubTitle}>
                        Details will be sent to the registered email address related to the submitted email or phone number to help recover your account.
                    </Typography>

                    <form onSubmit={handleSubmit} className={classes.form} noValidate>

                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            autoFocus
                            required
                            fullWidth
                            id="email"
                            label="Email or Phone"
                            name="email"
                            error={emaile.length > 0}
                            autoComplete="email"
                            onChange={handleChange}
                        />
                        {emaile && <small
                            style={{
                                color: "red", fontSize: "0.8rem", fontFamily: "Segoe UI"
                            }}
                        >
                            <ErrorOutlineIcon style={{ transform: "scale(0.7)", }} />
                            {emaile}
                        </small>}

                        <Buttonn
                            type="submit"
                            variant="contained"
                            className={classes.submit}
                        >
                            Submit
                        </Buttonn>

                    </form>
                </div>
            </Container>

            <Container maxWidth="sm">
                <footer className={classes.footer}>
                    Copyright © {new Date().getFullYear()}&nbsp;| Refactory, Uganda.
                </footer>
            </Container>

        </div >
    );
}

