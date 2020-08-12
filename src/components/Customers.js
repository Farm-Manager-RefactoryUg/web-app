import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import "../css/index.css";


class Customers extends Component {
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
      return <div>Loading Customers.....</div>;
    } else {
      return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Card className="text-left" style={{border:"none"}}>
                  <h5 className="card-heading">RECENT CUSTOMERS</h5>
                  <Card.Body>
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
                              <Link>
                                <Button variant="secondary">Options</Button>
                              </Link>
                            </td>
                            <td>
                              <Button variant="success">Details</Button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <br></br>
        </>
      );
    }
  }
}

export default Customers;
