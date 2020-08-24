import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  amountStyles: {
    paddingBottom: "10px"
  },
  titleStyles: {
    textColor: "black"
  }
});

export default function Deposits({title, amount,details,link}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className={classes.titleStyles}>{title}</Title>
      <Typography component="p" variant="h5" className={classes.amountStyles}>
        UGX {amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <Router>
          <Link to={link}>{details}</Link>
        </Router>
      </Typography>
    </React.Fragment>
  );
}
