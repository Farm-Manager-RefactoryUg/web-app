import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

const drawerWidth = 240;

function AppMenu() {
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({
      appMenu: {
        width: "100%",
      },
      navList: {
        width: drawerWidth,
      },
      menuItem: {
        width: drawerWidth,
      },
      menuItemIcon: {
        color: "#97c05c",
      },
    })
  );

  const classes = useStyles();
  const navstyle = {
    color: "green",
  };
  function handleClick() {
    setOpen(!open);
  }
  function handleClicky() {
    setOpen(!open);
  }

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      <ListItem style={navstyle} button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconDashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem style={navstyle} button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem style={navstyle} button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconPeople />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>

      <ListItem style={navstyle} button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconBarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>

      <ListItem
        style={navstyle}
        button
        onClick={handleClick}
        className={classes.menuItem}
      >
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Farm Analytics" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button style={navstyle} className={classes.menuItem}>
            <ListItemText inset primary="Reports" />
          </ListItem>
          <ListItem button  style={navstyle}className={classes.menuItem}>
            <ListItemText inset primary="Analytics" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        style={navstyle}
        button
        onClick={handleClicky}
        className={classes.menuItem}
      >
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Farm Resources" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button style={navstyle} className={classes.menuItem}>
            <ListItemText inset primary="Sales" />
          </ListItem>
          <ListItem  style={navstyle} button className={classes.menuItem}>
            <ListItemText inset primary="Expenses" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default AppMenu;
