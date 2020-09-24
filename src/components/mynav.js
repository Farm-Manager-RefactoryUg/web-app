// import React from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListIcon from "@material-ui/icons/List";
// import ChatIcon from "@material-ui/icons/Chat";
// import BookIcon from "@material-ui/icons/Book";
// import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import GroupIcon from "@material-ui/icons/Group";
// import SettingsIcon from "@material-ui/icons/Settings";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import HomeIcon from "@material-ui/icons/Home";
// import PersonIcon from "@material-ui/icons/Person";
// import CollectionsIcon from "@material-ui/icons/Collections";
// import { BrowserRouter as  NavLink} from "react-router-dom";
// import NotificationsIcon from "@material-ui/icons/Notifications";

// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";

// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// // import MoreIcon from "@material-ui/icons/MoreVert";
// import { Dropdown } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

// import '../css/nav.css'

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   toolBar: {
//     backgroundColor: "green",
//   },
//   appBar: {
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));

// export default function PersistentDrawerLeft() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const navstyle = {
//     color: "green",
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };
  
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };
//     // const handleClose = () => {
//     //   setAnchorEl(null);
//     // };

//   // const handleClick = (event) => {
//   //   // setAnchorEl(event.currentTarget);
//   //   setAnchorEl(event);
//   // };

//   // const handleClose = () => {
//   //   setAnchorEl(null);
//   // };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={menuId}
//       keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );
//   // const StyledMenu = withStyles({
//   //   paper: {
//   //     border: '1px solid #d3d4d5',
//   //   },
//   // })((props) => (
//   //   <Menu
//   //     elevation={0}
//   //     getContentAnchorEl={null}
//   //     anchorOrigin={{
//   //       vertical: 'bottom',
//   //       horizontal: 'center',
//   //     }}
//   //     transformOrigin={{
//   //       vertical: 'top',
//   //       horizontal: 'center',
//   //     }}
//   //     {...props}
//   //   />
//   // ));
  
//   // const StyledMenuItem = withStyles((theme) => ({
//   //   root: {
//   //     '&:focus': {
//   //       backgroundColor: theme.palette.primary.main,
//   //       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//   //         color: theme.palette.common.white,
//   //       },
//   //     },
//   //   },
//   // }))(MenuItem);
  
  
//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "left" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "left" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton color="inherit">
//           <Badge color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton color="inherit">
//           <Badge color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar className={classes.toolBar}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             TeleFarmer
//           </Typography>

//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 2 new mails" color="inherit">
//               <Badge badgeContent={2} color="secondary">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 6 new notifications" color="inherit">
//               <Badge badgeContent={6} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
         
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//             <TextField
//               id="standard-bare"
//               placeholder="Search"
//               margin="normal"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment type="submit" position="start">
//                     <SearchIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <ListItem button>
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
           
//               <NavLink style={navstyle} to="/">
//                 <ListItemText primary="Home" />
//               </NavLink>
            
//             </ListItem>
//                <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <HomeIcon />
//             </IconButton>
//           </div>

//             <ListItem button>
//               <ListItemIcon>
//                 <PersonIcon />
//               </ListItemIcon>
//               <ListItemText primary="Profile" />
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <ChatIcon />
//               </ListItemIcon>
//               <ListItemText primary="Inbox" />
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <BookIcon />
//               </ListItemIcon>
             
//               <NavLink style={navstyle} to="/requisitions">
//                 <ListItemText primary="Requisitions" />
//               </NavLink>
              
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <CalendarTodayIcon />
//               </ListItemIcon>
             
//               <NavLink style={navstyle} to="/">
//                 <ListItemText primary="Calendar" />
//               </NavLink>
             
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <GroupIcon />
//               </ListItemIcon>
//               <ListItemText primary="Group" />
//             </ListItem>
//           </List>

//           <Divider />

//           <List>
//             <ListItem button>
//               <ListItemIcon>
//                 <ListIcon />
//               </ListItemIcon>
             
//               <NavLink to="/reports" style={navstyle}>
//                 <ListItemText primary="Reports" />
//               </NavLink>
             
//             </ListItem>

//             <ListItem button>
//               <ListItemIcon>
//                 <BarChartIcon />
//               </ListItemIcon>
              
//               <NavLink style={navstyle} to="/analytics">
//                 <ListItemText primary="Analytics" />
//               </NavLink>
            
//             </ListItem>

//             <ListItem button>
//               <ListItemIcon>
//                 <CollectionsIcon />
//               </ListItemIcon>
              
//                 <NavLink style={navstyle} to="/">
//                   <ListItemText primary="Media" />
//                 </NavLink>
//             </ListItem>
//             <ListItem button>
//               <ListItemIcon>
//                 <SettingsIcon />
//               </ListItemIcon>
//                   <NavLink style={navstyle} to="/">
//                     <ListItemText primary="Settings" />
//                   </NavLink>
                
            
//             </ListItem>
//           </List>
//         <Button variant="success" href="/">Home</Button>
//         <Dropdown className="dropdown">
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Finances
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item href="/reports">Reports</Dropdown.Item>
//             <Dropdown.Item href="customers">Customers</Dropdown.Item>
//             <Dropdown.Item href="/requisitions">Requisitions</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//         <Dropdown>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Stores
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item href="/reports">Reports</Dropdown.Item>
//             <Dropdown.Item href="customers">Customers</Dropdown.Item>
//             <Dropdown.Item href="/requisitions">Requisitions</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//         <Dropdown>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             Employees
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item href="/workers">Workers</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         {/* <div className={classes.drawerHeader} /> */}
//       </main>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }


















import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListIcon from "@material-ui/icons/List";
// import InboxIcon from "@material-ui/icons/Inbox";
// import BookIcon from "@material-ui/icons/Book";
// import TableChartIcon from "@material-ui/icons/TableChart";
// import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import GroupIcon from "@material-ui/icons/Group";
// import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
// import CollectionsIcon from "@material-ui/icons/Collections";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// import { Link } from "react-router-dom";
// import Collapse from '@material-ui/core/Collapse';
// import IconExpandLess from '@material-ui/icons/ExpandLess';
// import IconExpandMore from '@material-ui/icons/ExpandMore';
// import IconDashboard from '@material-ui/icons/Dashboard'
// import IconShoppingCart from '@material-ui/icons/ShoppingCart'
// import IconPeople from '@material-ui/icons/People'
// import IconBarChart from '@material-ui/icons/BarChart'
// import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import Sidebar from "./sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: "green",
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
  // menuButton: {
  //   marginRight: theme.spacing(1),
  // },

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

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
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
  const serstyle = {
    color: "white",
  };

  
  // const handleClick = () => {
  //   setOpen(!open);
  // }

  // const handleClickClose = () => {
  //   setOpen(false);
  // };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  // const [refAnchorEl, setrefAnchorEl] = React.useState(null);
  // const [invAnchorEl, setinvAnchorEl] = React.useState(null);
  // const [repoAnchorEl, setrepoAnchorEl] = React.useState(null);
  // const [proAnchorEl, setproAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const isrefOpen = Boolean(refAnchorEl);
  // const isinvOpen = Boolean(invAnchorEl);
  // const isrepoOpen = Boolean(repoAnchorEl);
  // const isproOpen = Boolean(proAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const handlerefMenuOpen = (event) => {
  //   setrefAnchorEl(event.currentTarget);
  // };

  // const handlerefMenuClose = () => {
  //   setrefAnchorEl(null);
  // };

  // const handleinvMenuOpen = (event) => {
  //   setinvAnchorEl(event.currentTarget);
  // };

  // const handleinvMenuClose = () => {
  //   setinvAnchorEl(null);
  // };

  // const handlerepoMenuOpen = (event) => {
  //   setrepoAnchorEl(event.currentTarget);
  // };

  // const handlerepoMenuClose = () => {
  //   setrepoAnchorEl(null);
  // };

  // const handleproMenuOpen = (event) => {
  //   setproAnchorEl(event.currentTarget);
  // };

  // const handleproMenuClose = () => {
  //   setproAnchorEl(null);
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

  const mobileMenuId = "";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      // anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      // keepMounted
      // transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem style={navstyle}>
        <IconButton>
          <MailIcon style={navstyle} />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton style={navstyle}>
          <Badge style={navstyle}>
            <NotificationsIcon style={navstyle} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          // aria-label="account of current user"
          // aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          style={navstyle}
        >
          <AccountCircle style={navstyle} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // const refMenuId = "primary-search-account-menu";
  // const renderrefMenu = (
  //   <Menu
  //     anchorEl={refAnchorEl}
  //     // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  //     id={refMenuId}
  //     keepMounted
  //     // transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isrefOpen}
  //     onClose={handlerefMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BarChartIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Sales</p>
  //       </Link>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BookIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Expenses</p>
  //       </Link>
  //     </MenuItem>
  //   </Menu>
  // );
  // const proMenuId = "primary-search-account-menu";
  // const renderproMenu = (
  //   <Menu
  //     anchorEl={proAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={proMenuId}
  //     keepMounted
  //     // transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isproOpen}
  //     onClose={handleproMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BarChartIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Organic</p>
  //       </Link>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BookIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Non Organic</p>
  //       </Link>
  //     </MenuItem>
  //   </Menu>
  // );

  // const invMenuId = "primary-search-account-menu";
  // const renderinvMenu = (
  //   <Menu
  //     anchorEl={invAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={invMenuId}
  //     keepMounted
  //     // transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isinvOpen}
  //     onClose={handleinvMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BarChartIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Farm goods</p>
  //       </Link>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BookIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Farm materials</p>
  //       </Link>
  //     </MenuItem>
  //   </Menu>
  // );

  // const repoMenuId = "primary-search-account-menu";
  // const renderrepoMenu = (
  //   <Menu
  //     anchorEl={repoAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={repoMenuId}
  //     keepMounted
  //     // transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isrepoOpen}
  //     onClose={handlerepoMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BarChartIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Analytics</p>
  //       </Link>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton style={navstyle}>
  //         <Badge style={navstyle}>
  //           <BookIcon />
  //         </Badge>
  //       </IconButton>
  //       <Link style={navstyle} to="/analytics">
  //         <p>Reports</p>
  //       </Link>
  //     </MenuItem>
  //   </Menu>
  // ); 

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Tele Farmer
          </Typography>

          {" "}
          <Divider/>
          {" "}
          
        <TextField
            id="standard-bare"
            placeholder="Search"
            style={serstyle}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment style={serstyle} type="submit" position="start">
                  <SearchIcon style={serstyle} />
                </InputAdornment>
              ),
            }}
          />


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

         <Sidebar /> 

        {/* <List>
          <TextField
            style={navstyle}
            id="standard-bare"
            placeholder="Search"
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment type="submit" position="start">
                  <SearchIcon style={navstyle} />
                </InputAdornment>
              ),
            }}
          /> */}

{/* <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Nested Pages" />
        {open ? <IconExpandLess /> : <IconExpandMore onClick={handleClickClose}  />}
      </ListItem>
      <Collapse in={open} unmountOnExit>
        <Divider />
        <List >
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse>

          <ListItem button style={navstyle}>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={refMenuId}
                aria-haspopup="true"
                onClick={handlerefMenuOpen}
                onClose={handleClose}
              ></IconButton>
            </div>
            <ListItemIcon
              aria-label="show more"
              aria-controls={proMenuId}
              aria-haspopup="true"
              onClick={handleproMenuOpen}
            >
              <TableChartIcon style={navstyle} />
            </ListItemIcon>
            <ListItemText primary="Farm Products" />
          </ListItem>

          <ListItem button style={navstyle}>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={refMenuId}
                aria-haspopup="true"
                onClick={handlerefMenuOpen}
                onClose={handleClose}
              ></IconButton>
            </div>
            <ListItemIcon
              aria-label="show more"
              aria-controls={refMenuId}
              aria-haspopup="true"
              onClick={handlerefMenuOpen}
            >
              <BookIcon style={navstyle} />
            </ListItemIcon>
            <ListItemText primary="Farm Economics" />
          </ListItem>

          <ListItem button style={navstyle}>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={invMenuId}
                aria-haspopup="true"
                onClick={handleinvMenuOpen}
                onClose={handleClose}
              ></IconButton>
            </div>
            <ListItemIcon
              aria-label="show more"
              aria-controls={invMenuId}
              aria-haspopup="true"
              onClick={handleinvMenuOpen}
            >
              <InboxIcon style={navstyle} />
            </ListItemIcon>
            <ListItemText primary="Farm Resources" />
          </ListItem>

          <ListItem button style={navstyle}>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={repoMenuId}
                aria-haspopup="true"
                onClick={handlerepoMenuOpen}
                onClose={handleClose}
              ></IconButton>
            </div>
            <ListItemIcon
              aria-label="show more"
              aria-controls={repoMenuId}
              aria-haspopup="true"
              onClick={handlerepoMenuOpen}
            >
              <ListIcon style={navstyle} />
            </ListItemIcon>
            <ListItemText primary="Farm Analytics" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <BookIcon style={navstyle}/>
            </ListItemIcon>
            <Link style={navstyle} to="/requisitions">
              <ListItemText primary="Requisitions" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <CalendarTodayIcon style={navstyle} />
            </ListItemIcon>
            <Link style={navstyle} to="/">
              <ListItemText primary="Calendar" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GroupIcon style={navstyle}/>
            </ListItemIcon>
            <Link style={navstyle} to="/customer/:id">
              <ListItemText primary="Customers" />
            </Link>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon>
              <CollectionsIcon style={navstyle}/>
            </ListItemIcon>
            <Link style={navstyle} to="/">
              <ListItemText primary="Media" />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={navstyle}/>
            </ListItemIcon>
            <Link style={navstyle} to="/">
              <ListItemText primary="Settings" />
            </Link>
          </ListItem>
        </List> */}

            

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      {/* {renderproMenu}
      {renderrepoMenu}
      {renderinvMenu}
      {renderrefMenu} */}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


//from sidebar

// // import React from "react";
// // // import { BrowserRouter as Switch, Route } from "react-router-dom";
// // import clsx from "clsx";
// // import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
// // import { withStyles } from '@material-ui/core/styles';
// // import Drawer from "@material-ui/core/Drawer";
// // import CssBaseline from "@material-ui/core/CssBaseline";
// // import AppBar from "@material-ui/core/AppBar";
// // import Toolbar from "@material-ui/core/Toolbar";
// // import List from "@material-ui/core/List";
// // import Typography from "@material-ui/core/Typography";
// // import Divider from "@material-ui/core/Divider";
// // import IconButton from "@material-ui/core/IconButton";
// // import MenuIcon from "@material-ui/icons/Menu";
// // import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// // import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// // import ListItem from "@material-ui/core/ListItem";
// // import ListItemIcon from "@material-ui/core/ListItemIcon";
// // import ListItemText from "@material-ui/core/ListItemText";
// // import ListIcon from "@material-ui/icons/List";
// // import Button from '@material-ui/core/Button';
// // import InboxIcon from "@material-ui/icons/Inbox";
// // import BookIcon from "@material-ui/icons/Book";
// // import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// // import GroupIcon from "@material-ui/icons/Group";
// // import SettingsIcon from "@material-ui/icons/Settings";
// // import NotificationsIcon from "@material-ui/icons/Notifications";
// // import BarChartIcon from "@material-ui/icons/BarChart";
// // import HomeIcon from "@material-ui/icons/Home";
// // import TextField from "@material-ui/core/TextField";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// // import SearchIcon from "@material-ui/icons/Search";
// // import CollectionsIcon from "@material-ui/icons/Collections";
// // import Badge from "@material-ui/core/Badge";
// // import MenuItem from "@material-ui/core/MenuItem";
// // import Menu from "@material-ui/core/Menu";
// // import AccountCircle from "@material-ui/icons/AccountCircle";
// // import MailIcon from "@material-ui/icons/Mail";
// // import MoreIcon from "@material-ui/icons/MoreVert";
// // import DraftsIcon from '@material-ui/icons/Drafts';
// // import SendIcon from '@material-ui/icons/Send';
// // import { Link } from "react-router-dom";

// // const drawerWidth = 240;

// // const useStyles = makeStyles((theme) => ({
// //   grow: {
// //     flexGrow: 1,
// //   },
// //   appBar: {
// //     background: "green",
// //     transition: theme.transitions.create(["margin", "width"], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //   },
// //   appBarShift: {
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     marginLeft: drawerWidth,
// //     transition: theme.transitions.create(["margin", "width"], {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },

// //   hide: {
// //     display: "none",
// //   },
// //   drawer: {
// //     width: drawerWidth,
// //     flexShrink: 0,
// //   },
// //   drawerPaper: {
// //     width: drawerWidth,
// //   },
// //   drawerHeader: {
// //     display: "flex",
// //     alignItems: "center",
// //     padding: theme.spacing(0, 1),
// //     // necessary for content to be below app bar
// //     ...theme.mixins.toolbar,
// //     justifyContent: "flex-end",
// //   },
// //   content: {
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create("margin", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     marginLeft: -drawerWidth,
// //   },
// //   contentShift: {
// //     transition: theme.transitions.create("margin", {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //     marginLeft: 0,
// //   },

// //   title: {
// //     display: "none",
// //     [theme.breakpoints.up("sm")]: {
// //       display: "block",
// //     },
// //   },
// //   search: {
// //     position: "relative",
// //     borderRadius: theme.shape.borderRadius,
// //     backgroundColor: fade(theme.palette.common.white, 0.15),
// //     "&:hover": {
// //       backgroundColor: fade(theme.palette.common.white, 0.25),
// //     },
// //     marginRight: theme.spacing(2),
// //     marginLeft: 0,
// //     width: "100%",
// //     [theme.breakpoints.up("sm")]: {
// //       marginLeft: theme.spacing(3),
// //       width: "auto",
// //     },
// //   },
// //   searchIcon: {
// //     padding: theme.spacing(0, 2),
// //     height: "100%",
// //     position: "absolute",
// //     pointerEvents: "none",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   inputRoot: {
// //     color: "inherit",
// //   },
// //   inputInput: {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     // vertical padding + font size from searchIcon
// //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
// //     transition: theme.transitions.create("width"),
// //     width: "100%",
// //     [theme.breakpoints.up("md")]: {
// //       width: "20ch",
// //     },
// //   },
// //   sectionDesktop: {
// //     display: "none",
// //     [theme.breakpoints.up("md")]: {
// //       display: "flex",
// //     },
// //   },
// //   sectionMobile: {
// //     display: "flex",
// //     [theme.breakpoints.up("md")]: {
// //       display: "none",
// //     },
// //   },
// // }));

// // export default function PrimarySearchAppBar() {
// //   const classes = useStyles();
// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   const navstyle = {
// //     color: "green",
// //   };
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

// //   const isMenuOpen = Boolean(anchorEl);
// //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// //   const handleProfileMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMobileMenuClose = () => {
// //     setMobileMoreAnchorEl(null);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //     handleMobileMenuClose();
// //   };

// //   const handleMobileMenuOpen = (event) => {
// //     setMobileMoreAnchorEl(event.currentTarget);
// //   };

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const menuId = "primary-search-account-menu";
// //   const renderMenu = (
// //     <Menu
// //       anchorEl={anchorEl}
// //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
// //       id={menuId}
// //       keepMounted
// //       transformOrigin={{ vertical: "top", horizontal: "right" }}
// //       open={isMenuOpen}
// //       onClose={handleMenuClose}
// //     >
// //       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
// //       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
// //     </Menu>
// //   );
// //   const StyledMenu = withStyles({
// //     paper: {
// //       border: '1px solid #d3d4d5',
// //     },
// //   })((props) => (
// //     <Menu
// //       elevation={0}
// //       getContentAnchorEl={null}
// //       anchorOrigin={{
// //         vertical: 'bottom',
// //         horizontal: 'center',
// //       }}
// //       transformOrigin={{
// //         vertical: 'top',
// //         horizontal: 'center',
// //       }}
// //       {...props}
// //     />
// //   ));

// //   const StyledMenuItem = withStyles((theme) => ({
// //     root: {
// //       '&:focus': {
// //         backgroundColor: theme.palette.primary.main,
// //         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
// //           color: theme.palette.common.white,
// //         },
// //       },
// //     },
// //   }))(MenuItem);

// //   const mobileMenuId = "primary-search-account-menu-mobile";
// //   const renderMobileMenu = (
// //     <Menu
// //       anchorEl={mobileMoreAnchorEl}
// //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
// //       id={mobileMenuId}
// //       keepMounted
// //       transformOrigin={{ vertical: "top", horizontal: "right" }}
// //       open={isMobileMenuOpen}
// //       onClose={handleMobileMenuClose}
// //     >
// //       <MenuItem>
// //         <IconButton  color="inherit">
// //           <Badge color="secondary">
// //             <MailIcon />
// //           </Badge>
// //         </IconButton>
// //         <p>Messages</p>
// //       </MenuItem>
// //       <MenuItem>
// //         <IconButton  color="inherit">
// //           <Badge  color="secondary">
// //             <NotificationsIcon />
// //           </Badge>
// //         </IconButton>
// //         <p>Notifications</p>
// //       </MenuItem>
// //       <MenuItem onClick={handleProfileMenuOpen}>
// //         <IconButton
// //           aria-label="account of current user"
// //           aria-controls="primary-search-account-menu"
// //           aria-haspopup="true"
// //           color="inherit"
// //         >
// //           <AccountCircle />
// //         </IconButton>
// //         <p>Profile</p>
// //       </MenuItem>
// //     </Menu>
// //   );

// //   return (
// //     <div className={classes.grow}>
// //       <CssBaseline />
// //       <AppBar
// //         position="static"
// //         className={clsx(classes.appBar, {
// //           [classes.appBarShift]: open,
// //         })}
// //       >
// //         <Toolbar>
// //           <IconButton
// //             edge="start"
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             className={clsx(classes.menuButton, open && classes.hide)}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography className={classes.title} variant="h6" noWrap>
// //             Tele Farmer
// //           </Typography>

// //           <div className={classes.grow} />
// //           <div className={classes.sectionDesktop}>
// //             <IconButton aria-label="show 2 new mails" color="inherit">
// //               <Badge badgeContent={2} color="secondary">
// //                 <MailIcon />
// //               </Badge>
// //             </IconButton>
// //             <IconButton aria-label="show 6 new notifications" color="inherit">
// //               <Badge badgeContent={6} color="secondary">
// //                 <NotificationsIcon />
// //               </Badge>
// //             </IconButton>
// //             <IconButton
// //               edge="end"
// //               aria-label="account of current user"
// //               aria-controls={menuId}
// //               aria-haspopup="true"
// //               onClick={handleProfileMenuOpen}
// //               color="inherit"
// //             >
// //               <AccountCircle />
// //             </IconButton>
// //           </div>
// //           <div className={classes.sectionMobile}>
// //             <IconButton
// //               aria-label="show more"
// //               aria-controls={mobileMenuId}
// //               aria-haspopup="true"
// //               onClick={handleMobileMenuOpen}
// //               color="inherit"
// //             >
// //               <MoreIcon />
// //             </IconButton>
// //           </div>
// //         </Toolbar>
// //       </AppBar>
// //       <Drawer
// //         className={classes.drawer}
// //         variant="persistent"
// //         anchor="left"
// //         open={open}
// //         classes={{
// //           paper: classes.drawerPaper,
// //         }}
// //       >
// //         <div className={classes.drawerHeader}>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === "ltr" ? (
// //               <ChevronLeftIcon />
// //             ) : (
// //               <ChevronRightIcon />
// //             )}
// //           </IconButton>
// //         </div>

// //         <Divider />

// //         <List>
// //           <TextField
// //             id="standard-bare"
// //             placeholder="Search"
// //             margin="normal"
// //             InputProps={{
// //               endAdornment: (
// //                 <InputAdornment type="submit" position="start">
// //                   <SearchIcon />
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />

// //           <ListItem button>
// //             <ListItemIcon>
// //               <HomeIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Home"  />
// //             </Link>
// //           </ListItem>

// //           <ListItem >
// //           <Button aria-controls="simple-menu"  aria-haspopup="true" onClick={handleClick}>
// //         Open Menu
// //       </Button>
// //       <Menu
// //         id="simple-menu"
// //         anchorEl={anchorEl}
// //         keepMounted
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //       >

// //         <MenuItem onClick={handleClose}>Profile</MenuItem>
// //         <MenuItem onClick={handleClose}>My account</MenuItem>
// //       </Menu>
// //           </ListItem>

// //           <ListItem button color="green">
// //             <ListItemIcon>
// //               <HomeIcon />
// //             </ListItemIcon>
// //             <ListItemText primary="Home" color="green" onClick={handleClick} />
// //             <Menu
// //             anchorEl={anchorEl}
// //             open={Boolean(anchorEl)}
// //             onClose={handleClose}
// //           >
// //             <MenuItem onClick={handleClose}>
// //             <ListItem >
// //             <ListItemIcon>
// //               <InboxIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Inventory" />
// //             </Link>
// //           </ListItem>
// //             </MenuItem>
// //             <MenuItem onClick={handleClose}>
// //             <ListItem >
// //             <ListItemIcon>
// //               <BookIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/requisitions" >
// //             <ListItemText primary="Requisitions"  />
// //             </Link>
// //           </ListItem>
// //             </MenuItem>
// //           </Menu>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <BookIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/requisitions" >
// //             <ListItemText primary="Requisitions"  />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <InboxIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Inventory" />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <CalendarTodayIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Calendar" />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <GroupIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to= "/customer/:id">
// //             <ListItemText primary="Customers" />
// //             </Link>
// //           </ListItem>

// //         </List>

// //         <Divider />

// //          <List>

// //          <Button
// //         aria-controls="customized-menu"
// //         aria-haspopup="true"
// //         variant="contained"
// //         color="primary"
// //         onClick={handleClick}
// //       >
// //         Open Menu
// //       </Button>
// //       <StyledMenu
// //         id="customized-menu"
// //         anchorEl={anchorEl}
// //         keepMounted
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //       >
// //         <StyledMenuItem>
// //           <ListItemIcon>
// //             <SendIcon fontSize="small" />
// //           </ListItemIcon>
// //           <ListItemText primary="Sent mail" />
// //         </StyledMenuItem>
// //         <StyledMenuItem>
// //           <ListItemIcon>
// //             <DraftsIcon fontSize="small" />
// //           </ListItemIcon>
// //           <ListItemText primary="Drafts" />
// //         </StyledMenuItem>
// //         <StyledMenuItem>
// //           <ListItemIcon>
// //             <InboxIcon fontSize="small" />
// //           </ListItemIcon>
// //           <ListItemText primary="Inbox" />
// //         </StyledMenuItem>
// //       </StyledMenu>

// //          <ListItem button color="green">
// //             <ListItemIcon>
// //               <HomeIcon />
// //             </ListItemIcon>
// //             <ListItemText primary="Home" color="green" onClick={handleClick} />
// //             <Menu
// //             anchorEl={anchorEl}
// //             open={Boolean(anchorEl)}
// //             onClose={handleClose}
// //           >
// //             <MenuItem onClick={handleClose}>
// //             <ListItem button>
// //             <ListItemIcon>
// //               <BarChartIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/analytics">
// //             <ListItemText primary="Analytics" />
// //             </Link>
// //           </ListItem>
// //             </MenuItem>
// //             <MenuItem onClick={handleClose}>
// //             <ListItem button>
// //             <ListItemIcon>
// //               <ListIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/customers">
// //             <ListItemText primary="Reports" />
// //             </Link>
// //           </ListItem>
// //             </MenuItem>
// //           </Menu>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <ListIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/customers">
// //             <ListItemText primary="Reports" />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <BarChartIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/analytics">
// //             <ListItemText primary="Analytics" />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <CollectionsIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Media" />
// //             </Link>
// //           </ListItem>

// //           <ListItem button>
// //             <ListItemIcon>
// //               <SettingsIcon />
// //             </ListItemIcon>
// //             <Link style={navstyle} to="/">
// //             <ListItemText primary="Settings" />
// //             </Link>
// //           </ListItem>
// //         </List>
// //       </Drawer>
// //       <main
// //         className={clsx(classes.content, {
// //           [classes.contentShift]: open,
// //         })}
// //       >
// //         <div className={classes.drawerHeader} />
// //       </main>
// //       {renderMobileMenu}
// //       {renderMenu}
// //     </div>
// //   );
// // }

// import React from "react";
// // import { BrowserRouter as Switch, Route } from "react-router-dom";
// import clsx from "clsx";
// import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListIcon from "@material-ui/icons/List";
// import InboxIcon from "@material-ui/icons/Inbox";
// import BookIcon from "@material-ui/icons/Book";
// import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import GroupIcon from "@material-ui/icons/Group";
// import SettingsIcon from "@material-ui/icons/Settings";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import HomeIcon from "@material-ui/icons/Home";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import CollectionsIcon from "@material-ui/icons/Collections";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   appBar: {
//     background: "green",
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: "none",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-end",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },

//   title: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block",
//     },
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const navstyle = {
//     color: "green",
//   };
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton  color="inherit">
//           <Badge color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton  color="inherit">
//           <Badge  color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <CssBaseline />
//       <AppBar
//         position="static"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Tele Farmer
//           </Typography>

//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton aria-label="show 2 new mails" color="inherit">
//               <Badge badgeContent={2} color="secondary">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 6 new notifications" color="inherit">
//               <Badge badgeContent={6} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </div>

//         <Divider />

//         <List>
//           <TextField
//             id="standard-bare"
//             placeholder="Search"
//             margin="normal"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment type="submit" position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <ListItem button>
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//             <ListItemText primary="Home"  />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <BookIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/requisitions" >
//             <ListItemText primary="Requisitions"  />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <InboxIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//             <ListItemText primary="Inventory" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <CalendarTodayIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//             <ListItemText primary="Calendar" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to= "/customer/:id">
//             <ListItemText primary="Customers" />
//             </Link>
//           </ListItem>

//         </List>

//         <Divider />

//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <ListIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/customers">
//             <ListItemText primary="Reports" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <BarChartIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/analytics">
//             <ListItemText primary="Analytics" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <CollectionsIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//             <ListItemText primary="Media" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <SettingsIcon />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//             <ListItemText primary="Settings" />
//             </Link>
//           </ListItem>

//         </List>
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//       </main>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }
