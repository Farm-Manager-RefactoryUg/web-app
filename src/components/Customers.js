import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
// import ProjectAppBar from "./ProjectAppBar";
// import ExpenditurePieChart from "./ExpenditurePieChart";
// import SalesBarGraph from "./SalesBarGraph"
import Example from "./Example";
// import Reports from "./Reports"
import "../css/customer.css";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
    };
  }
  componentDidMount() {
    fetch("https://farmmanager-api.herokuapp.com/api/customer/")
      .then((response) => response.json())
      .then((json) => {
        // Object.entries(json)
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading Customers.....</div>;
    } else {
      return (
        <>
          <div className="container">
            <div className="row">
              <Grid item xs={12}>
                <div className="text-left">
                  <h5 className="card-heading">RECENT CUSTOMERS</h5>
                  <Table striped bordered hover size="sm">
                    <thead className="table-headings">
                      <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Location</th>
                        <th>Options</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    {items.map((item) => (
                      <tbody key={item.id} className="table-headings">
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            {" "}
                            <a
                              href="emailto:{user.email} "
                              className="table-headings"
                            >
                              {item.email}{" "}
                            </a>{" "}
                          </td>
                          <td>
                            <a
                              href="tel:{item.phone} "
                              className="table-headings"
                            >
                              {item.phone}{" "}
                            </a>{" "}
                          </td>
                          <td>Location</td>
                          <td>
                            <Button variant="secondary">Options</Button>
                          </td>
                          <td>
                            {/* <Link to="/customer/:id"> */}
                            <Example />
                            {/* Details */}
                            {/* </Link> */}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                    
                  </Table>
                </div>
              </Grid>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Customers;
