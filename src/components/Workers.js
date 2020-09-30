import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
//import ExpenditurePieChart from "./ExpenditurePieChart";
//import SalesBarGraph from "./SalesBarGraph";
import ProjectAppBar from "./ProjectAppBar";
//import Reports from "./Reports";

import "../css/workers.css";

class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
    };
  }
  componentDidMount() {
    fetch("https://farmmanager-api.herokuapp.com/api/employee/")
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
        <div className="root">
          <ProjectAppBar />
          <div className="container-fluid" id="roote">
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
                        <th>Position</th>
                        <th>Department</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    {items.map((item) => (
                      <tbody>
                        <tr>
                          <td key={item.id}>{item.fullname}</td>
                          <td>{item.email}</td>
                          <td>{item.phone1} </td>
                          <td>{item.position}</td>
                          <td>
                            {item.department}
                          </td>
                          <td>
                            <Link to={`/customer/${item.id}`}>
                              <Button variant="success">Details</Button>
                            </Link>
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
        </div>
      );
    }
  }
}

export default Workers;
