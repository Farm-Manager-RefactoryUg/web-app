import React,{useEffect,useState} from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectAppBar from "./ProjectAppBar";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacing: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    margin: "0px !important",
  },
  content: {
    flexGrow: 1,
    height: "40vh",
    marginTop: "60px",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-evenly",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
  },
}));

export default function Expenditure() {
    const classes = useStyles();
    
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
              "https://farmmanager-api.herokuapp.com/api/expenditure/"
            );
          const jsondata = await response.json()
          const newArray = [...jsondata];
          console.log(newArray)
          setItems(newArray)         
        }        
        fetchData()        
    },[]) 

  return (
    <div className={classes.root}>
      <React.Fragment>
        <ProjectAppBar />
        <main className={classes.content}>
          <h5 align="left" style={{ marginLeft: "0.5rem" }}>
            Recent Orders
          </h5>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Amount Paid</TableCell>
                <TableCell align="right">Balance Due </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell>{item.amountpaid}</TableCell>
                  <TableCell align="right">{item.baldue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className={classes.seeMore} style={{ marginLeft: "0.5rem" }}>
            <Link color="primary" href="#" onClick={preventDefault}>
              See more orders
            </Link>
          </div>
        </main>
      </React.Fragment>
    </div>
  );
}
