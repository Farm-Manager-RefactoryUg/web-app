import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect, useState } from "react";
import axios from "axios";
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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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

const projects = [{
    id:1,
    name:"diciri",
    location:"Muyenga",
    address:"Nakabugo-Bbira",
    contactsperson:"Seth",
    phone: 734567332,
    tin: 12345,
},
{
    id:2,
    name:"diciri",
    location:"Muyenga",
    address:"Nakabugo-Bbira",
    contactsperson:"Seth",
    phone: 734567332,
    tin: 12345,
},

{
    id:3,
    name:"diciri",
    location:"Muyenga",
    address:"Nakabugo-Bbira",
    contactsperson:"Seth",
    phone: 734567332,
    tin: 12345,
},
{
    id:4,
    name:"diciri",
    location:"Muyenga",
    address:"Nakabugo-Bbira",
    contactsperson:"Seth",
    phone: 734567332,
    tin: 12345,
},
{
    id:5,
    name:"diciri",
    location:"Muyenga",
    address:"Nakabugo-Bbira",
    contactsperson:"Seth",
    phone: 734567332,
    tin: 12345,
},
];

let swapper ;

if ( projects.length > 2 && projects.length %2 === 1) {swapper = projects.slice(1) }
else {swapper = projects }

let pairedprojects = [];

for (let step =0; step <= swapper.length; step =+ 2) { 
    pairedprojects.push([swapper[step],swapper[step+1]])
}



export default function Dashboard() {
    const classes = useStyles();
    const currentUrl = useLocation();
    const [ setItems] = useState([]);
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
        document.title = "Create a project"
        axios
      .get("https://farmmanager-api.herokuapp.com/api/farm/")
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, );

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
                                {"My Projects"}
                            </Typography>

                            <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

                            {(projects.length === 1 || ( projects.length > 2 && projects.length % 2 === 1 ))? (

                                <Grid item xs={12} md={12} lg={12}>
                                
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>

                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Biyinzika Mukono C
                                                <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
                                                    <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
                                                </IconButton>
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
                            ) : projects.length === 2 ? (
                                
                                <Grid container spacing={4} style={{ marginTop: "20px", marginBottom: "20px", }}>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                Galileo goat project I
                                                <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
                                                    <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
                                                </IconButton>                                 
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
                                                <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
                                                    <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
                                                </IconButton>
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
                            
                            </Grid>
                            
                            ) 
                            :( swapper && swapper.length >2  ) ? ( 
                                pairedprojects.map(
                                    (projectpair)=>{
                                        
                               return <Grid key={new Date()} container spacing={4} style={{ marginTop: "20px", marginBottom: "20px", }}>

                                <Grid item xs={12} md={6} lg={6}>
                                    <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
                                        <CardContent style={{ paddingBottom: "8px", }}>
                                            <Typography
                                                gutterBottom
                                                component="h6"
                                                style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
                                                {projectpair[0]['name']}
                                                <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
                                                    <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
                                                </IconButton>                                 
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
                                                {projectpair[1]['name']}
                                                <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
                                                    <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
                                                </IconButton>
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
                            
                            </Grid>

                                    }
                                ) 
                            )

                    





                            : null } 

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

































































































// import { useLocation } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import ProjectAppBar from "./ProjectAppBar";
// import Chip from '@material-ui/core/Chip';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Divider from "@material-ui/core/Divider";
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         fontFamily: "Segoe UI",
//         backgroundColor: "rgb(247, 249, 252)",
//     },
//     spacing: {
//         margin: 0,
//     },
//     title: {
//         flexGrow: 1,
//     },
//     grid: {
//         margin: "0px !important",
//     },
//     drawerPaper: {
//         position: "relative",
//         flexShrink: 0,
//         whiteSpace: "nowrap",
//         width: drawerWidth,
//         transition: theme.transitions.create("width", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: "100vh",
//         overflow: "auto",
//     },
//     container: {
//         paddingTop: theme.spacing(2),
//         paddingBottom: theme.spacing(4),
//         justifyContent: "space-evenly",
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: "flex",
//         flexDirection: "column",
//     },
//     fixedHeight: {
//         height: 150,
//     },
//     label: {
//         fontSize: "0.7rem",
//         color: "white",
//     },
//     marginFb: {
//         '&:hover': {
//             backgroundColor: "	rgba(0,128,0,0.9)",
//             color: "white",
//         },
//         backgroundColor: "green",
//         color: "white",
//         margin: theme.spacing(1),
//         position: "fixed",
//         bottom: "25px",
//         right: "40px",
//     },
// }));

// const project = [{
//     id:1,
//     name:"diciri",
//     location:"Muyenga",
//     address:"Nakabugo-Bbira",
//     contactsperson:"Seth",
//     phone: 734567332,
//     tin: 12345,
// },
// {
//     id:1,
//     name:"diciri",
//     location:"Muyenga",
//     address:"Nakabugo-Bbira",
//     contactsperson:"Seth",
//     phone: 734567332,
//     tin: 12345,
// },

// ];
// export default function Dashboard() {
//     const classes = useStyles();
//     const currentUrl = useLocation();
//     const [ setItems] = useState([]);
//     //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
//     const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

//     const theme = React.useMemo(
//         () =>
//             createMuiTheme({
//                 overrides: {
//                     MuiGrid: {
//                         "spacing-xs-2": "-6px !important",
//                     },
//                 },
//                 palette: {
//                     type: prefersDarkMode ? "light" : "dark",
//                 },
//             }),
//         [prefersDarkMode]
//     );

//     useEffect(() => {
//         document.title = "Create a project"
//         axios
//       .get("https://farmmanager-api.herokuapp.com/api/farm/")
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     }, );

//     return (
//         <>
//             <ThemeProvider theme={theme}>
//                 <div className={classes.root}>

//                     <ProjectAppBar location={currentUrl} />

//                     <main className={classes.content}>
//                         <div
//                             className={classes.appBarSpacer}
//                             style={{ minHeight: "3rem" }}
//                         />

//                         <Container style={{ marginTop: "60px", }}>

//                             <Typography
//                                 style={{ fontSize: "1.5rem", fontWeight: "600", fontFamily: "Segoe UI", color: "rgba(0, 0, 0, 0.87)", }}
//                                 component="h1"
//                             >
//                                 {"My Projects"}
//                             </Typography>

//                             <Divider style={{ marginTop: "15px", backgroundColor: "rgba(0,0,0,0.2)" }} />

//                             {project.length === 0 ? null : project.length === 1 ? (

//                                 <Grid item xs={12} md={12} lg={12}>
                                
//                                     <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
//                                         <CardContent style={{ paddingBottom: "8px", }}>

//                                             <Typography
//                                                 gutterBottom
//                                                 component="h6"
//                                                 style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
//                                                 Biyinzika Mukono C
//                                                 <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
//                                                     <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
//                                                 </IconButton>
//                                             </Typography>

//                                             <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "teal", }} label="Finished" size="small" />

//                                             <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem" }}>
//                                                 {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
//                                             </Typography>

//                                             <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />

//                                             <Button
//                                                 color="primary"
//                                                 style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
//                                                 component={Link}
//                                                 to={"/dashboard"}
//                                             >
//                                                 View
//                                             </Button>

//                                         </CardContent>
//                                     </Card>
//                                 </Grid>
//                             ) : project.length === 2 ? (
                                
//                                 <Grid container spacing={4} style={{ marginTop: "20px", marginBottom: "20px", }}>

//                                 <Grid item xs={12} md={6} lg={6}>
//                                     <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
//                                         <CardContent style={{ paddingBottom: "8px", }}>
//                                             <Typography
//                                                 gutterBottom
//                                                 component="h6"
//                                                 style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
//                                                 Galileo goat project I
//                                                 <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
//                                                     <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
//                                                 </IconButton>                                 
//                                             </Typography>
//                                             <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "orange", }} label="In Progress" size="small" />
//                                             <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem", }}>
//                                                 {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
//                                                 <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
//                                                 <Button
//                                                     color="primary"
//                                                     style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
//                                                     component={Link}
//                                                     to={"/dashboard"}
//                                                 >
//                                                     View
//                                                 </Button>
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </Grid> 

//                                 <Grid item xs={12} md={6} lg={6}>
//                                     <Card style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgba(0, 0, 0, 0.87)", }}>
//                                         <CardContent style={{ paddingBottom: "8px", }}>
//                                             <Typography
//                                                 gutterBottom
//                                                 component="h6"
//                                                 style={{ fontFamily: "Segoe UI", padding: "0", fontWeight: "600", fontSize: "1.0625rem" }}>
//                                                 Biyinzika Mukono C
//                                                 <IconButton title="Delete Dashboard" color="primary" aria-label="upload picture" component="span" style={{ margin: "0", padding: "0", float: "right" }}>
//                                                     <DeleteIcon style={{ color: "green", transform: "scale(0.7)", }} />
//                                                 </IconButton>
//                                             </Typography>
//                                             <Chip classes={{ label: classes.label, }} style={{ fontFamily: "Segoe UI", backgroundColor: "teal", }} label="Finished" size="small" />
//                                             <Typography style={{ fontFamily: "Segoe UI", padding: "0px", paddingTop: "10px", color: "rgba(0, 0, 0, 0.87)", fontSize: "0.875rem" }}>
//                                                 {"If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element, and the initial focus will be placed on the selected menu item."}
//                                                 <Divider style={{ marginTop: "20px", marginBottom: "8px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
//                                                 <Button
//                                                     color="primary"
//                                                     style={{ fontSize: "0.8125rem", textTransform: "lowercase", width: "100%", color: "green" }}
//                                                     component={Link}
//                                                     to={"/dashboard"}
//                                                 >
//                                                     View
//                                                 </Button>
//                                             </Typography>
//                                         </CardContent>
//                                     </Card>
//                                 </Grid>
                            
//                             </Grid>
                            
//                             ) : null }

//                         </Container>

//                         <Fab
//                             aria-label="add"
//                             className={classes.marginFb}
//                             title="Create project"
//                             component={Link}
//                             to={"/project"}
//                         >
//                             <AddIcon />
//                         </Fab>

//                     </main>
//                 </div>
//             </ThemeProvider>
//         </>
//     );
// }
