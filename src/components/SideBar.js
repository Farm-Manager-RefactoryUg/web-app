import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BuildIcon from "@material-ui/icons/Build";
import SettingsIcon from "@material-ui/icons/Settings";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      color: "white",
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
  highlight: {
    "&:hover": {
      backgroundColor: "white",
      color: "rgba(0,0,0,0.87)",
    },
    backgroundColor: "white",
    color: "rgba(0,0,0,0.87)",
  },
  highlightItems: {
    color: "rgba(27, 36, 48, 0.9)",
  },
  whiteIcon: {
    color: "white",
  },
  blackIcon: {
    color: "rgba(0,0,0,0.87)",
  },
  selectedItem: {
    fontWeight: "900",
  },
  iconColor: {
    color: "white",
  }
})
)

export default function MainListItems(props) {
  const classes = useStyles();
  const currentUrl = props.location.pathname;
  const urls = {
    dashboardUrl: "/dashboard",
    projectsUrl: "/projects",
    settingsUrl: "/settings",
    compareUrl: "/compare",
    seasonsUrl: "/seasons",
    toolsUrl: "/tools",
    consumableUrl: "/consumables",
    requisitionsUrl: "/requisitions",
    suppliersUrl: "/suppliers",
    customersUrl: "/customers",
    workersUrl: "/workers",
    casualUrl: "/casual",
  }
  const listItemHighlightItems = classes.highlightItems;
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  return (
    <div style={{ marginTop: "20px", }}>

      <ListItem
        button
        component={Link}
        to={"/dashboard"}
        className={clsx(classes.root, urls.dashboardUrl === currentUrl ? classes.highlight : "")} >
        <ListItemIcon>
          <DashboardIcon
            className={urls.dashboardUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Overview"
          className={clsx(classes.text, urls.dashboardUrl === currentUrl ? listItemHighlightItems : "")}
        />
      </ListItem>

      <ListItem
        button
        id="a"
        onClick={handleClick1}
        className={urls.compareUrl === currentUrl || urls.seasonsUrl === currentUrl ? classes.highlight : ""}
      >
        <ListItemIcon>
          <BarChartIcon
            className={urls.compareUrl === currentUrl || urls.seasonsUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Analytics"
          className={clsx(classes.text, urls.compareUrl === currentUrl || urls.seasonsUrl === currentUrl ? listItemHighlightItems : "")}
        />
        {open1
          ? <ExpandLess
            className={urls.compareUrl === currentUrl || urls.seasonsUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
          : <ExpandMore
            className={urls.compareUrl === currentUrl || urls.seasonsUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
        }
      </ListItem>

      <Collapse
        in={open1}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          <ListItem
            button
            component={Link}
            to={"/compare"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Decision Support"
              className={clsx(classes.text, urls.compareUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/seasons"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Seasons"
              className={clsx(classes.text, urls.seasonsUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        id="a"
        onClick={handleClick2}
        className={urls.requisitionsUrl === currentUrl || urls.suppliersUrl === currentUrl || urls.customersUrl === currentUrl ? classes.highlight : ""}
      >
        <ListItemIcon>
          <AttachMoneyIcon
            className={urls.requisitionsUrl === currentUrl || urls.suppliersUrl === currentUrl || urls.customersUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Finances"
          className={clsx(classes.text, urls.requisitionsUrl === currentUrl || urls.suppliersUrl === currentUrl || urls.customersUrl === currentUrl ? listItemHighlightItems : "")}
        />
        {open2
          ? <ExpandLess
            className={urls.requisitionsUrl === currentUrl || urls.suppliersUrl === currentUrl || urls.customersUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
          : <ExpandMore
            className={urls.requisitionsUrl === currentUrl || urls.suppliersUrl === currentUrl || urls.customersUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
        }
      </ListItem>

      <Collapse
        in={open2}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          <ListItem
            button
            component={Link}
            to={"/requisitions"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Requisitions"
              className={clsx(classes.text, urls.requisitionsUrl === currentUrl ? classes.selectedItem : "")}
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
              className={clsx(classes.text, urls.suppliersUrl === currentUrl ? classes.selectedItem : "")}
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
              className={clsx(classes.text, urls.customersUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        id="a"
        onClick={handleClick3}
        className={urls.workersUrl === currentUrl || urls.casualUrl === currentUrl ? classes.highlight : ""}
      >
        <ListItemIcon>
          <PeopleIcon
            className={urls.workersUrl === currentUrl || urls.casualUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Employees"
          className={clsx(classes.text, urls.workersUrl === currentUrl || urls.casualUrl === currentUrl ? listItemHighlightItems : "")}
        />
        {open1
          ? <ExpandLess
            className={urls.workersUrl === currentUrl || urls.casualUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
          : <ExpandMore
            className={urls.workersUrl === currentUrl || urls.casualUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />}
      </ListItem>

      <Collapse
        in={open3}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          <ListItem
            button
            component={Link}
            to={"/workers"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Employees"
              className={clsx(classes.text, urls.workersUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/casual"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Casual workers"
              className={clsx(classes.text, urls.casualUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        onClick={handleClick4}
        className={urls.toolsUrl === currentUrl || urls.consumableUrl === currentUrl ? classes.highlight : ""}
      >
        <ListItemIcon>
          <BuildIcon
            className={urls.toolsUrl === currentUrl || urls.consumableUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Tools"
          className={clsx(classes.text, urls.toolsUrl === currentUrl || urls.consumableUrl === currentUrl ? listItemHighlightItems : "")}
        />
        {open4
          ? <ExpandLess
            className={urls.toolsUrl === currentUrl || urls.consumableUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
          : <ExpandMore
            className={urls.consumableUrl === currentUrl || urls.toolsUrl === currentUrl ? classes.blackIcon : classes.whiteIcon}
          />
        }
      </ListItem>

      <Collapse
        in={open4}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          <ListItem
            button
            component={Link}
            to={"/tools"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Tools"
              className={clsx(classes.text, urls.toolsUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to={"/consumables"}
            className={clsx(classes.root, classes.nested)}
          >
            <ListItemText
              disableTypography
              primary="Consumable"
              className={clsx(classes.text, urls.consumableUrl === currentUrl ? classes.selectedItem : "")}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        component={Link}
        to={"/projects"}
        className={clsx(classes.root, urls.projectsUrl === currentUrl ? classes.highlight : "")}
      >
        <ListItemIcon>
          <LayersIcon
            className={urls.projectsUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary="Projects"
          className={clsx(classes.text, urls.projectsUrl === currentUrl ? listItemHighlightItems : "")}
        />
      </ListItem>

      <ListItem
        button
        component={Link}
        to={"/settings"}
        className={clsx(classes.root, urls.settingsUrl === currentUrl ? classes.highlight : "")}
      >
        <ListItemIcon>
          <SettingsIcon
            className={urls.settingsUrl === currentUrl ? listItemHighlightItems : ""}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography primary="Settings"
          className={clsx(classes.text, urls.settingsUrl === currentUrl ? listItemHighlightItems : "")}
        />
      </ListItem>

    </div>
  );
}