import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

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
            color: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#964c22',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#964c22',
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
        backgroundColor: "white",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        marginBottom: theme.spacing(3),
        paddingLeft: "0",
        marginLeft: "0",
        // minHeight: '100vh',
    },
    paper: {
        paddingLeft: "0",
        marginLeft: "0",
        // display: 'flex',
        // flexDirection: 'column',
        //alignItems: 'center',
    },
    form: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        //width: '100%', // Fix IE 11 issue.
    },
    submit: {
        backgroundColor: 'green',
        color: 'white',
        outline: 'none',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        textTransform: "initial",
        fontWeight: "600",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "40px",
        paddingBottom: "40px",
    }
}));

export default function AddFarmManager() {
    let [[fullNamee, emaile, passworde], setErrors] = useState(["", "", ""])

    const handleSubmit = event => {
        event.preventDefault()
    }
    const handleChange = event => {
        const { name, value } = event.target
        let [fullNamee, emaile, passworde, mobilee] = [fullNamee, emaile, passworde, mobilee]
        const nameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+[ a-zA-Z]*$/
        const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

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

            default:
                break;
        }

    }

    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <Container component="main" maxWidth="xs" className={classes.container}>

                <div >

                    <Typography component="h6" variant="h5" style={{ marginBottom: "15px", fontWeight: "600", color: "#964c22", fontSize: "1.015rem" }}>
                        Add a farm manager to this project.
                    </Typography>

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
                            size="small"
                            margin="dense"
                            defaultValue="Wamala Emmanuel Nsubuga"
                        />
                        <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{fullNamee}</small>

                        <CssTextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email address"
                            name="email"
                            error={emaile.length > 0}
                            onChange={handleChange}
                            size="small"
                            margin="dense"
                            defaultValue={"e.wamala@ciu.ac.ug"}
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
                            size="small"
                            margin="dense"
                            defaultValue={"Abc123%"}
                        />
                        <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem" }}>{passworde}</small>

                        <Buttonn
                            type="submit"
                            variant="contained"
                            fullWidth
                            className={classes.submit}
                        >
                            Save changes
            </Buttonn>

                    </form>
                </div>

                {/* <div>

                    <Buttonn
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                        style={{ height: "40px", width: "280px" }}
                    >
                        Upload
                    </Buttonn>

                    <small>For best results, use an image at least 128px by 128px in .jpg format</small>

                </div> */}

            </Container>
        </Card>
    );
}

