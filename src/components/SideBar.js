import React, { useState } from "react";
//import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import BuildIcon from "@material-ui/icons/Build";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      color: "red",
    },
    '&:active': {
      backgroundColor: "green",
    },
  },
  text: {
    fontFamily: "Segoe UI",
    color: "rgb(238, 238, 238)",
    fontSize: "0.9rem",
    fontWeight: "400",
  },
  nested: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(9),
    opacity: "0.7",
  },
  mainIcons: {
    color: "white",
  },
})
)

export default function MainListItems() {
  const classes = useStyles();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <div position="fixed">
      {/* <ListSubheader inset>Statistics</ListSubheader> */}

      <ListItem
        button
        component={Link}
        to={"/dashboard"}
        className={classes.root}
        style={{ marginTop: "20px" }}
      >
        <ListItemIcon>
          <DashboardIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Dashboard"
          className={classes.text}
        />
      </ListItem>

      <ListItem button id="a" onClick={handleClick1}>
        <ListItemIcon>
          <BarChartIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Analytics"
          className={classes.text}
        />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            to={"/login"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Monthly"
              className={classes.text}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/login"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Quarterly"
              className={classes.text}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/login"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Annual"
              className={classes.text}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button id="a" onClick={handleClick3}>
        <ListItemIcon>
          <PeopleIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Employees"
          className={classes.text}
        />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            to={"/workers"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Employees"
              className={classes.text}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/workers"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Casual workers"
              className={classes.text}
            />
          </ListItem>
        </List>
      </Collapse>
      
      <Link to="/tools">
        <ListItem button>
          <ListItemIcon>
            <BuildIcon className={classes.mainIcons} />
          </ListItemIcon>

          <ListItemText
            disableTypography
            primary="Tools"
            className={classes.text}
          />
        </ListItem>
      </Link>
      <ListItem
        button
        component={Link}
        to={"/analytics"}
        className={classes.root}
      >
        <ListItemIcon>
          <BarChartIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Decision support"
          className={classes.text}
        />
      </ListItem>

      <ListItem button id="a" onClick={handleClick2}>
        <ListItemIcon>
          <AttachMoneyIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Finances"
          className={classes.text}
        />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            to={"/requisitions"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Requisitions"
              className={classes.text}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/suppliers"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Suppliers"
              className={classes.text}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/customers"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Customers"
              className={classes.text}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        component={Link}
        to={"/projects"}
        className={classes.root}
      >
        <ListItemIcon>
          <LayersIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Projects"
          className={classes.text}
        />
      </ListItem>

      <ListItem
        button
        component={Link}
        to={"/settings"}
        className={classes.root}
      >
        <ListItemIcon>
          <SettingsIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Settings"
          className={classes.text}
        />
      </ListItem>
    </div>
  );
}


