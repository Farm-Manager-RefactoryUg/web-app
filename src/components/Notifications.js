import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";


export default function Notifications() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
    const drawerWidth = 140;
    const navstyle = {
      color: "green",
      marginLeft: -drawerWidth,
    };

  const buttons = (
    <React.Fragment>
      <List>
        <ListItem button>
            <ListItemText
              style={navstyle}
              onClick={handleClick({ vertical: "top", horizontal: "right" })}
              primary="Notifications"
            />
        </ListItem>
      </List>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="New notifications will be displayed here."
        key={vertical + horizontal}
      />
    </div>
  );
}
