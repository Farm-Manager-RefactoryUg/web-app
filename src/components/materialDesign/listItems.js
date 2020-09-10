import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link exact to="/dashboard">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/requisitions">
        <ListItemText primary="Requisitions" />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link exact to="/customers">
        <ListItemText primary="Customers" />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to="/analytics">
        <ListItemText primary="Analytics" />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/reports">
        <ListItemText primary="Reports" />
      </Link>
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>People</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>    
        <Link to="/payroll" exact>
          <ListItemText primary="Employees" />
        </Link>        
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>    
        <Link to="/customers">
          <ListItemText primary="Customers" />
        </Link>    
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>      
        <Link>
          <ListItemText primary="Suppliers" />
        </Link>      
    </ListItem>
  </div>
);
