import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import ChatIcon from "@material-ui/icons/Chat";
import BookIcon from "@material-ui/icons/Book";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CollectionsIcon from "@material-ui/icons/Collections";
import { BrowserRouter as  NavLink} from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// import MoreIcon from "@material-ui/icons/MoreVert";
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import '../css/nav.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: "green",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navstyle = {
    color: "green",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

  // const handleClick = (event) => {
  //   // setAnchorEl(event.currentTarget);
  //   setAnchorEl(event);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      // transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  // const StyledMenu = withStyles({
  //   paper: {
  //     border: '1px solid #d3d4d5',
  //   },
  // })((props) => (
  //   <Menu
  //     elevation={0}
  //     getContentAnchorEl={null}
  //     anchorOrigin={{
  //       vertical: 'bottom',
  //       horizontal: 'center',
  //     }}
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'center',
  //     }}
  //     {...props}
  //   />
  // ));
  
  // const StyledMenuItem = withStyles((theme) => ({
  //   root: {
  //     '&:focus': {
  //       backgroundColor: theme.palette.primary.main,
  //       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
  //         color: theme.palette.common.white,
  //       },
  //     },
  //   },
  // }))(MenuItem);
  
  
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            TeleFarmer
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 2 new mails" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 6 new notifications" color="inherit">
              <Badge badgeContent={6} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
         
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
            <TextField
              id="standard-bare"
              placeholder="Search"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment type="submit" position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
           
              <NavLink style={navstyle} to="/">
                <ListItemText primary="Home" />
              </NavLink>
            
            </ListItem>
               <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
          </div>

            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
             
              <NavLink style={navstyle} to="/requisitions">
                <ListItemText primary="Requisitions" />
              </NavLink>
              
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
             
              <NavLink style={navstyle} to="/">
                <ListItemText primary="Calendar" />
              </NavLink>
             
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
             
              <NavLink to="/reports" style={navstyle}>
                <ListItemText primary="Reports" />
              </NavLink>
             
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              
              <NavLink style={navstyle} to="/analytics">
                <ListItemText primary="Analytics" />
              </NavLink>
            
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <CollectionsIcon />
              </ListItemIcon>
              
                <NavLink style={navstyle} to="/">
                  <ListItemText primary="Media" />
                </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
                  <NavLink style={navstyle} to="/">
                    <ListItemText primary="Settings" />
                  </NavLink>
                
            
            </ListItem>
          </List>
        <Button variant="success" href="/">Home</Button>
        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Finances
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/reports">Reports</Dropdown.Item>
            <Dropdown.Item href="customers">Customers</Dropdown.Item>
            <Dropdown.Item href="/requisitions">Requisitions</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Stores
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/reports">Reports</Dropdown.Item>
            <Dropdown.Item href="customers">Customers</Dropdown.Item>
            <Dropdown.Item href="/requisitions">Requisitions</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Employees
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/workers">Workers</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
