import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "../css/index.css";

// import "bootstrap/dist/css/bootstrap.css";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
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
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading Activities.....</div>;
    } else {
      return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <Card className="text-left">
                  <h5 className="card-heading">ACTIVITY LOG</h5>
                  <Card.Body>
                    {/* <Card.Title>Pending activities at the farm</Card.Title> */}
                    <ListGroup>
                      {items.map((item) => (
                        <ListGroup.Item key={item.id}>
                          {item.name} {item.email}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Button variant="primary">Options</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
              </div>
                
              <div className="col-md-6">
                <Card className="text-left">
                  <h5 className="card-heading">REQUISITIONS</h5>
                  <Card.Body>
                    <ListGroup>
                      {items.map((item) => (
                        <ListGroup.Item key={item.id}>
                          {item.name} {item.email}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Button variant="primary">Options</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Activities;
