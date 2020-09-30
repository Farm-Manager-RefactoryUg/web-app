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
      color: "white",
    },
    '&:active': {
      backgroundColor: "black",
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
    color: "orange",
  },
})
)

export default function MainListItems() {
  const classes = useStyles();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }

  return (
    <div>
      {/* <ListSubheader inset>Statistics</ListSubheader> */}

      <ListItem button component={Link} to={"/dashboard"} className={classes.root} style={{ marginTop: "20px" }}>
        <ListItemIcon>
          <DashboardIcon className={classes.mainIcons}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="Dashboard" className={classes.text} />
      </ListItem>

      <ListItem button id="a" onClick={handleClick1}>
        <ListItemIcon>
          <BarChartIcon className={classes.mainIcons}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="Analytics" className={classes.text} />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Monthly" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Quarterly" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Annual" className={classes.text} />
          </ListItem>
        </List>
      </Collapse>


      <ListItem button>
        <Link to="/customers">
          <ListItemIcon>
            <PeopleIcon className={classes.mainIcons} />
          </ListItemIcon>
        </Link>
        <ListItemText disableTypography primary="Tables/Data" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/analytics"} className={classes.root}>
        <ListItemIcon>
          <BarChartIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText disableTypography primary="Decision support" className={classes.text} />
      </ListItem>

      <ListItem button id="b" onClick={handleClick2}>
        <ListItemIcon>
          <BarChartIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText disableTypography primary="Finances" className={classes.text} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Requisitions" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Balance sheets" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={clsx(classes.root, classes.nested)}>
            <ListItemText disableTypography primary="Budget" className={classes.text} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button component={Link} to={"/projects"} className={classes.root}>
        <ListItemIcon>
          <LayersIcon  className={classes.mainIcons}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="Projects" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/settings"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon className={classes.mainIcons} />
        </ListItemIcon>
        <ListItemText disableTypography primary="Settings" className={classes.text} />
      </ListItem>

    </div>
  )
}


