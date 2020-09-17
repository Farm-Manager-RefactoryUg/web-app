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
import { Link} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <Link to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </Link>
      <Link to="/dashboard">
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>

    <ListItem button>
      <Link to="/requisitions">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </Link>
      <Link to="/requisitions">
        <ListItemText primary="Requisitions/Orders" />
      </Link>
    </ListItem>

    <ListItem button>
      <Link to="/customers">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
      </Link>
      <Link to="/customers">
        <ListItemText primary="Customers" />
      </Link>
    </ListItem>

    <ListItem button>
      <Link to="/analytics">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
      </Link>
      <Link to="/analytics">
        <ListItemText primary="Analytics" />
      </Link>
    </ListItem>

    <ListItem button>
      <Link to="/dashboard">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
      </Link>
      <Link to="/dashboard">
        <ListItemText primary="Reports/Dashbord" />
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
        <Link to="/payroll" >
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
        <Link to="/suppliers">
          <ListItemText primary="Suppliers" />
        </Link>      
    </ListItem>
  </div>
);
