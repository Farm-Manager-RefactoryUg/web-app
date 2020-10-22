import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "../css/index.css";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: true,
    };
  }
  componentDidMount(id) {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          item: json,
        });
      });
      //console.log(item);
  }
  render() {
    let { isLoaded, item } = this.state;

    if (!isLoaded) {
      return <div>Loading Custome Details.....</div>;
    } else {
      return (
        <>
          <Navbar />
          <br></br>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="text-left">
                  <h5 className="card-heading">CUSTOMER DETAILS</h5>

                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Location</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    {/* {item.map((item) => ( */}
                    <tbody>
                      <tr>
                        <td key={item.id}>{item.name}</td>
                        <td>{item.email}</td>
                        {/* <td>
                          {item.phone}{" "}
                        </td> */}
                        <td>{item.city}</td>
                        <td>
                          
                            <Link>
                              <Button variant="secondary">Options</Button>
                            </Link>
                         
                        </td>
                      </tr>
                    </tbody>
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

export default CustomerDetails;
