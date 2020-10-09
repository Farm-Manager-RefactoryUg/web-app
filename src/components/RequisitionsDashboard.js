import React,{useEffect,useState} from "react";
import axios from "axios";
// import Link from "@material-ui/core/Link";
//import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//    return { id, date, name, shipTo, paymentMethod, amount };
// }
// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "16 Nov, 2019",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2020",
//     "16 Nov, 2020",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2021",
//     "16 Nov, 2021",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2022",
//     "16 Nov, 2022",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "16 Mar, 2023",
//     "16 Nov, 2023",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   ),
// ];
// function preventDefault(event) {
//   event.preventDefault();
// }
const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
export default function Orders() {
  let url="/"
  const classes = useStyles();
  const [items, setItems] = useState("");
useEffect(() => {
  axios
    .get("https://farmmanager-api.herokuapp.com/api/requisition")
    .then((response) => {
      setItems(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Requisition Number</TableCell>
            <TableCell>Purpose</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {items &&
          items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.reqno}</TableCell>
              <TableCell>{item.purpose}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell align="right">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Router> */}
          <a href={url} color="primary"  >
            See more
          </a>
        {/* </Router> */}
      </div>
    </React.Fragment>
  );
}
