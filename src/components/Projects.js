import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import MenuListComposition from "./Avatar";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        fontFamily: "Segoe UI",
        backgroundColor: "rgb(247, 249, 252)",
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
    //appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        justifyContent: "space-evenly",
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 150,
    },
    label: {
        fontSize: "0.7rem",
        color: "white",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        minHeight: "48px",
    },
    appBarSpacer: {
        minHeight: "48px",
    },
    appBar: {
        backgroundColor: "green",
        minHeight: "50px",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    marginFb: {
        margin: theme.spacing(1),
        position: "fixed",
        bottom: "25px",
        right: "40px",
        '&:hover': {
            color: "white",
        },
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>

                    <main className={classes.content}>
                        <div
                            className={classes.appBarSpacer}
                            style={{ minHeight: "3rem" }}
                        />
                        <AppBar
                            position="absolute"
                            className={clsx(classes.appBar)}
                        >

                            <Toolbar style={{ minHeight: "48px" }} className={classes.toolbar}>

                                <Typography
                                    variant="h6"
                                    href="/"
                                    className={classes.title}
                                    style={{ color: "white", fontSize: "1.0625rem", fontWeight: "600", fontFamily: "Segoe UI", }}
                                >
                                    Tele-Farmer
                                </Typography>

                                <MenuListComposition />

                            </Toolbar>

                        </AppBar>

                        <Container style={{ marginTop: "60px", }}>

                            <Typography
                                style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.57)", }}
                                component="h1"
                            >
                                {"Dashboards"}
                            </Typography>

                            <Divider style={{ marginTop: "15px", backgroundColor: "orange" }} />

                            <Grid container spacing={4} style={{ marginTop: "20px", marginBottom: "20px", }}>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Biyinzika Mukono C
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "teal", }} label="Finished" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem" }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                            </Typography>
                                            <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                            <Button
                                                color="primary"
                                                style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                component={Link}
                                                to={"/dashboard"}
                                            >
                                                View
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Galileo goat project I
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "orange", }} label="In Progress" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem", }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                                <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                                <Button
                                                    color="primary"
                                                    style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                            </Button>    </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Biyinzika Mukono C
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "teal", }} label="Finished" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem" }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                                <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                                <Button
                                                    color="primary"
                                                    style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                            </Button>    </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Galileo goat project I
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "orange", }} label="In Progress" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem", }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                                <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                                <Button
                                                    color="primary"
                                                    style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                            </Button>    </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Biyinzika Mukono C
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "teal", }} label="Finished" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem" }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                                <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                                <Button
                                                    color="primary"
                                                    style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                            </Button>    </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Galileo goat project I
                                            </Typography>
                                            <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "orange", }} label="In Progress" size="small" />
                                            <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem", }}>
                                                {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
                                                <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
                                                <Button
                                                    color="primary"
                                                    style={{ fontSize: "0.8125rem", fontWeight: "600", textTransform: "lowercase", width: "100%", }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                            </Button>    </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Container>

                        <Fab
                            color="secondary"
                            aria-label="add"
                            className={classes.marginFb}
                            style={{ outline: "none", }}
                            title="Create project"
                            component={Link}
                            to={"/project"}
                        >
                            <AddIcon />
                        </Fab>
                    
                    </main>

                </div>
            </ThemeProvider>
        </>
    );
}
