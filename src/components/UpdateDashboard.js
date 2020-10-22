import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

const CustomSelect = withStyles({
    '&.Mui-focused': {
        borderColor: "green",
    },
})(Select);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "white",
        padding: theme.spacing(2),
        marginTop: theme.spacing(3)
    },
    submit: {
        backgroundColor: 'green',
        color: 'white',
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
    formControl: {
        minWidth: "180px",
        marginTop: theme.spacing(2),
    },
}));

export default function UpdateDashboard() {
    let [[fullNamee, emaile], setErrors] = useState(["", "", ""])

    const handleSubmit = event => {
        event.preventDefault()
    }
    const handleChange = event => {
        const { name, value } = event.target
        let [fullNamee, emaile, passworde, mobilee] = []
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

            <Typography
                component="h6"
                variant="h5"
                style={{ fontWeight: "600", color: "rgba(0,0,0,0.87)", fontSize: "1.0625rem", fontFamily: "Segoe UI", }}>
                Update dashboard info
            </Typography>

            <main maxWidth="xs" className={classes.container}>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <CssTextField
                        autoComplete="title"
                        margin="normal"
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        error={fullNamee.length > 0}
                        onChange={handleChange}
                        defaultValue="Biyinzika Mukono C"
                    />
                    <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{fullNamee}</small>

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
                        defaultValue={"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                    />
                    <small style={{ color: 'red', marginLeft: "15px", fontSize: "0.75rem", }}>{emaile}</small>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                        <CustomSelect
                            native
                            label="Status"
                        >
                            <option selected value="In progress">In Progress</option>
                            <option value="Archived">Archived</option>
                        </CustomSelect>
                    </FormControl>
                    <br></br>


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
            </main>
        </Card>
    );
}

