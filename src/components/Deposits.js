import React from "react";
import {BrowserRouter as Router,  Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    paddingLeft: 0,
  },
  amountStyles: {   
    padding: "0px",    
  },
  titleStyles: {
    color: "green"
  },
  typography: {    
      color: "green"
  },
  
});

export default function Deposits({ title, amount, details, link="/" }) {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className={classes.titleStyles}>{title}</Title>
      <Typography component="span" variant="h6">
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
