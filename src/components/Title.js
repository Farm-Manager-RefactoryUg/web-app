import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({  
  amountStyles: {
    color: "green",
  },
  
});

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography component="h2" variant="h6" className={classes.amountStyles} gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
