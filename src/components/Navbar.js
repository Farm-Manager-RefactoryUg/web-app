// import React from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
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
//   // menuButton: {
//   //   marginRight: theme.spacing(1),
//   // },

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
//   const [refAnchorEl, setrefAnchorEl] = React.useState(null);
//   const [invAnchorEl, setinvAnchorEl] = React.useState(null);
//   const [repoAnchorEl, setrepoAnchorEl] = React.useState(null);
//   const [proAnchorEl, setproAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const isrefOpen = Boolean(refAnchorEl);
//   const isinvOpen = Boolean(invAnchorEl);
//   const isrepoOpen = Boolean(repoAnchorEl);
//   const isproOpen = Boolean(proAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handlerefMenuOpen = (event) => {
//     setrefAnchorEl(event.currentTarget);
//   };

//   const handlerefMenuClose = () => {
//     setrefAnchorEl(null);
//   };

//   const handleinvMenuOpen = (event) => {
//     setinvAnchorEl(event.currentTarget);
//   };

//   const handleinvMenuClose = () => {
//     setinvAnchorEl(null);
//   };

//   const handlerepoMenuOpen = (event) => {
//     setrepoAnchorEl(event.currentTarget);
//   };

//   const handlerepoMenuClose = () => {
//     setrepoAnchorEl(null);
//   };

//   const handleproMenuOpen = (event) => {
//     setproAnchorEl(event.currentTarget);
//   };

//   const handleproMenuClose = () => {
//     setproAnchorEl(null);
//   };

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

//   const mobileMenuId = "";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       // anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       // keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem style={navstyle}>
//         <IconButton>
//           <MailIcon style={navstyle} />
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <NotificationsIcon style={navstyle} />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           // aria-label="account of current user"
//           // aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           style={navstyle}
//         >
//           <AccountCircle style={navstyle} />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   const refMenuId = "primary-search-account-menu";
//   const renderrefMenu = (
//     <Menu
//       anchorEl={refAnchorEl}
//       // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//       id={refMenuId}
//       keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isrefOpen}
//       onClose={handlerefMenuClose}
//     >
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BarChartIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Sales</p>
//         </Link>
//       </MenuItem>
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BookIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Expenses</p>
//         </Link>
//       </MenuItem>
//     </Menu>
//   );
//   const proMenuId = "primary-search-account-menu";
//   const renderproMenu = (
//     <Menu
//       anchorEl={proAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={proMenuId}
//       keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isproOpen}
//       onClose={handleproMenuClose}
//     >
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BarChartIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Organic</p>
//         </Link>
//       </MenuItem>
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BookIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Non Organic</p>
//         </Link>
//       </MenuItem>
//     </Menu>
//   );

//   const invMenuId = "primary-search-account-menu";
//   const renderinvMenu = (
//     <Menu
//       anchorEl={invAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={invMenuId}
//       keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isinvOpen}
//       onClose={handleinvMenuClose}
//     >
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BarChartIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Farm goods</p>
//         </Link>
//       </MenuItem>
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BookIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Farm materials</p>
//         </Link>
//       </MenuItem>
//     </Menu>
//   );

//   const repoMenuId = "primary-search-account-menu";
//   const renderrepoMenu = (
//     <Menu
//       anchorEl={repoAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={repoMenuId}
//       keepMounted
//       // transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isrepoOpen}
//       onClose={handlerepoMenuClose}
//     >
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BarChartIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Analytics</p>
//         </Link>
//       </MenuItem>
//       <MenuItem>
//         <IconButton style={navstyle}>
//           <Badge style={navstyle}>
//             <BookIcon />
//           </Badge>
//         </IconButton>
//         <Link style={navstyle} to="/analytics">
//           <p>Reports</p>
//         </Link>
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
// <<<<<<< HEAD

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
// =======

//         <List>
//           <TextField
//             style={navstyle}
//             id="standard-bare"
//             placeholder="Search"
//             margin="normal"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment type="submit" position="start">
//                   <SearchIcon style={navstyle} />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <ListItem button style={navstyle}>
//             <div className={classes.sectionMobile}>

//               <IconButton
//                 aria-label="show more"
//                 aria-controls={mobileMenuId}
//                 aria-haspopup="true"
//                 onClick={handleMobileMenuOpen}
//                 onClose={handleClose}
//               ></IconButton>
//             </div>
//             <ListItemIcon
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//             >
//               <HomeIcon style={navstyle} />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItem>

//           <ListItem button style={navstyle}>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-label="show more"
//                 aria-controls={refMenuId}
//                 aria-haspopup="true"
//                 onClick={handlerefMenuOpen}
//                 onClose={handleClose}
//               ></IconButton>
//             </div>
//             <ListItemIcon
//               aria-label="show more"
//               aria-controls={proMenuId}
//               aria-haspopup="true"
//               onClick={handleproMenuOpen}
//             >
//               <TableChartIcon style={navstyle} />
//             </ListItemIcon>
//             <ListItemText primary="Farm Products" />
//           </ListItem>

//           <ListItem button style={navstyle}>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-label="show more"
//                 aria-controls={refMenuId}
//                 aria-haspopup="true"
//                 onClick={handlerefMenuOpen}
//                 onClose={handleClose}
//               ></IconButton>
//             </div>
//             <ListItemIcon
//               aria-label="show more"
//               aria-controls={refMenuId}
//               aria-haspopup="true"
//               onClick={handlerefMenuOpen}
//             >
//               <BookIcon style={navstyle} />
//             </ListItemIcon>
//             <ListItemText primary="Farm Economics" />
//           </ListItem>

//           <ListItem button style={navstyle}>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-label="show more"
//                 aria-controls={invMenuId}
//                 aria-haspopup="true"
//                 onClick={handleinvMenuOpen}
//                 onClose={handleClose}
//               ></IconButton>
//             </div>
//             <ListItemIcon
//               aria-label="show more"
//               aria-controls={invMenuId}
//               aria-haspopup="true"
//               onClick={handleinvMenuOpen}
//             >
//               <InboxIcon style={navstyle} />
//             </ListItemIcon>
//             <ListItemText primary="Farm Resources" />
//           </ListItem>

//           <ListItem button style={navstyle}>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-label="show more"
//                 aria-controls={repoMenuId}
//                 aria-haspopup="true"
//                 onClick={handlerepoMenuOpen}
//                 onClose={handleClose}
//               ></IconButton>
//             </div>
//             <ListItemIcon
//               aria-label="show more"
//               aria-controls={repoMenuId}
//               aria-haspopup="true"
//               onClick={handlerepoMenuOpen}
//             >
//               <ListIcon style={navstyle} />
//             </ListItemIcon>
//             <ListItemText primary="Farm Analytics" />
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <BookIcon style={navstyle}/>
//             </ListItemIcon>
//             <Link style={navstyle} to="/requisitions">
//               <ListItemText primary="Requisitions" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <CalendarTodayIcon style={navstyle} />
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//               <ListItemText primary="Calendar" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <GroupIcon style={navstyle}/>
//             </ListItemIcon>
//             <Link style={navstyle} to="/customer/:id">
//               <ListItemText primary="Customers" />
//             </Link>
//           </ListItem>
//         </List>

//         <Divider />

//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <CollectionsIcon style={navstyle}/>
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//               <ListItemText primary="Media" />
//             </Link>
//           </ListItem>

//           <ListItem button>
//             <ListItemIcon>
//               <SettingsIcon style={navstyle}/>
//             </ListItemIcon>
//             <Link style={navstyle} to="/">
//               <ListItemText primary="Settings" />
//             </Link>
//           </ListItem>
//         </List>

// >>>>>>> 59a69a702a8a503988b9791aea3703190eff16a1
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//       </main>
//       {renderproMenu}
//       {renderrepoMenu}
//       {renderinvMenu}
//       {renderrefMenu}
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }
