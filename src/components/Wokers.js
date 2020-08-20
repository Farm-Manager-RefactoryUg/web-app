import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
//import ExpenditurePieChart from "./ExpenditurePieChart";
//import SalesBarGraph from "./SalesBarGraph";
//import PersistentDrawerLeft from "./Navbar";
//import Reports from "./Reports";

import "../css/index.css";

class Wokers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading Employees.....</div>;
    } else {
      return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="text-left">
                  <h5 className="card-heading">EMPLOYEES DETAILS</h5>

                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Location</th>
                        <th>Options</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    {items.map((item) => (
                      <tbody>
                        <tr>
                          <td key={item.id}>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone} </td>
                          <td>{item.city}</td>
                          <td>
                            <Button variant="secondary">Options</Button>
                          </td>
                          <td>
                            <Router>
                              <Link to={`/customer/${item.id}`}>
                                <Button variant="success">Details</Button>
                              </Link>
                            </Router>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </>
      );
    }
  }
}

export default Wokers;
