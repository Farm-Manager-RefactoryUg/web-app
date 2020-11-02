import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import { makeStyles, createMuiTheme, ThemeProvider, } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MainListItems from "./SideBar";
import NavDropDown from "./NavDropDown";
import Logo from '../static/images/tree.svg'
import Avatar from '@material-ui/core/Avatar';
import michael from "../static/images/2.jfif";


const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: "48px",
  },
  toolbarIcon: {
    minHeight: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "white",
    minHeight: "50px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "rgba(0,0,0,0.87)"
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    flexShrink: 0,
    overflow: "hidden",
    backgroundColor: "rgba(27, 36, 48, 0.9)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: {
    minHeight: "48px",
    // theme.mixins.toolbar,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: theme.spacing(3),
  },
}));


export default function ProjectAppBar(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <ThemeProvider
      theme={theme}
    >

      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar
          style={{
            minHeight: "48px"
          }}
          className={classes.toolbar}>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            href="/"
            className={classes.title}
            style={{
              color: "rgba(0,0,0,0.87)",
              fontSize: "1.2rem",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              width="25px"
              height="25px"
              style={{ marginRight: "5px" }}
            />
              Tele-Farmer
            </Typography>

          <IconButton
            color="inherit">
            <Badge
              badgeContent={4}
              color="secondary"
            >
              <NotificationsIcon
                style={{ color: "rgba(0,0,0,0.87)" }}
              />
            </Badge>
          </IconButton>

          <Avatar
            alt="Michael"
            src={michael}
            className={classes.small}
          />
          <NavDropDown />

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
        open={open}
      >
        <div
          className={classes.toolbarIcon}
          style={{ minHeight: "48px" }}
        >
          <IconButton
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <List>
          <MainListItems
            location={props.location}
          />
        </List>

      </Drawer>

    </ThemeProvider>
  );
}


