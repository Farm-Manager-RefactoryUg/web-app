import React from 'react';
//import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import michael from "../static/images/2.jfif";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((lightTheme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: lightTheme.spacing(2),
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

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

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
    <>
        <ThemeProvider theme={lightTheme}>
            <div className={classes.root}>
                <div>
                    <IconButton
                        color="inherit"
                        style={{ outline: "none" }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <Avatar alt="Michael" src={michael} className={classes.small} />
                    </IconButton>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement={"bottom-end"}>
                        {({ TransitionProps, }) => (
                            <Grow
                                {...TransitionProps}
                            >
                                <Paper style={{ backgroundColor: "white", }}>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem
                                                onClick={handleClose}
                                                style={{ color: "rgba(0, 0, 0, 0.87)", paddingRight: "50px", fontSize: "0.8125rem", fontWeight: "600", fontFamily: "Segoe UI" }}
                                                component="a"
                                                href={"/settings"}
                                            >
                                                Profile
                                        </MenuItem>
                                            <MenuItem
                                                onClick={handleClose}
                                                style={{ color: "rgba(0, 0, 0, 0.87)", paddingRight: "50px", fontSize: "0.8125rem", fontWeight: "600", fontFamily: "Segoe UI" }}
                                                component="a"
                                                href={"/"}
                                            >
                                                Logout
                                        </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </ThemeProvider>
    </>
    );
}