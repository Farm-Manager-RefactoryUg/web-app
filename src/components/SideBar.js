import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
})
)

function MainListItem() {
  const classes = useStyles();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1)
  }
  const handleClick2 = () => {
    setOpen2(!open2)
  }
  // const handleClick = (event) => {
    // let { id } = event.target;
    // let exy;
    // switch (id) {
    //   case "a":
    //     exy = !open1
    //     break;
    //   case "b":
    //     exy = !open2
    //     break;

    //   default:
    //     break;
    // }
    // setOpen([id, exy])
  // };

  return (
    <div>
      <ListSubheader inset>Statistics</ListSubheader>
      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Dashboard" className={classes.text} />
      </ListItem>

      <ListItem button id="a" onClick={handleClick1}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Analytics" className={classes.text} />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Monthly" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Quarterly" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Annual" className={classes.text} />
          </ListItem>
        </List>
      </Collapse>


      <ListItem button>
        <Link to="/customers">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
        </Link>
        <ListItemText disableTypography primary="Tables/Data" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/analytics"} className={classes.root}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Decision support" className={classes.text} />
      </ListItem>

      <ListItem button id="b" onClick={handleClick2}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Finances" className={classes.text} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Requisitions" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Balance sheets" className={classes.text} />
          </ListItem>
          <ListItem button component={Link} to={"/login"} className={classes.root, classes.nested}>
            <ListItemText disableTypography primary="Budget" className={classes.text} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button component={Link} to={"/dashboard"} className={classes.root}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Inventory" className={classes.text} />
      </ListItem>

    </div>
  )
}
export const mainListItems = <MainListItem />;

function SecondaryListItem() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListSubheader inset>People</ListSubheader>
      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="My profile" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="User profiles" className={classes.text} />
      </ListItem>

    </div>
  )
};
export const secondaryListItems = <SecondaryListItem />;


function TertiaryListItem() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListSubheader inset>Other</ListSubheader>
      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="Help" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="About" className={classes.text} />
      </ListItem>

      <ListItem button component={Link} to={"/requisitions"} className={classes.root}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText disableTypography primary="FAQ's" className={classes.text} />
      </ListItem>

    </div>
  )
};
export const tertiaryListItems = <TertiaryListItem />;
