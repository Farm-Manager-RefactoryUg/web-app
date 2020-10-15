import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((lightTheme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: lightTheme.spacing(2),
    },
    links: {
        '&:hover': {
            color: "rgba(0,0,0,0.87)"
        },
        fontSize: "0.8125rem", 
        fontFamily: "Segoe UI", 
        paddingRight: "60px"
    },
    userName: {
        color: "black", 
        fontSize: "0.8125rem", 
        fontFamily: "Segoe UI", 
        fontWeight: "400", 
        textTransform: "initial",
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

    const lightTheme = React.useMemo(
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={lightTheme}>
            <div className={classes.root}>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    endIcon={<ArrowDropDownIcon />}
                    className={classes.userName}
                    >
                    Wamala Emmanuel Nsubuga
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuItem component={Link} to={"/userprofile"} onClick={handleClose} className={classes.links}>Profile</MenuItem>
                    <MenuItem component={Link} to={"/"} onClick={handleClose} className={classes.links} >Logout</MenuItem>
                </Menu>
            </div>
        </ThemeProvider>
    );
}