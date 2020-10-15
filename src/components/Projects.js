import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProjectAppBar from "./ProjectAppBar";
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";

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
    appBarSpacer: theme.mixins.toolbar,
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
    marginFb: {
        '&:hover': {
            backgroundColor: "	rgba(0,128,0,0.9)",
            color: "white",
        },
        backgroundColor: "green",
        color: "white",
        margin: theme.spacing(1),
        position: "fixed",
        bottom: "25px",
        right: "40px",
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const currentUrl = useLocation();
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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

    useEffect(() => {
        document.title = "Projects"
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>

                    <ProjectAppBar location={currentUrl} />

                    <main className={classes.content}>
                        <div
                            className={classes.appBarSpacer}
                            style={{ minHeight: "3rem" }}
                        />

                        <Container style={{ marginTop: "60px", }}>

                            <Typography
                                style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
                                component="h1"
                            >
                                {"Dashboards"}
                            </Typography>

                            <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

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
                                                style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
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
                                                    style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                                </Button>
                                            </Typography>
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
                                                    style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                                </Button>
                                            </Typography>
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
                                                    style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                                </Button>
                                            </Typography>
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
                                                    style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                                </Button>
                                            </Typography>
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
                                                    style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
                                                    component={Link}
                                                    to={"/dashboard"}
                                                >
                                                    View
                                                </Button>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Container>

                        <Fab
                            aria-label="add"
                            className={classes.marginFb}
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
