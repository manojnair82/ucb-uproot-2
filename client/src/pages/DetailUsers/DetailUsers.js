import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    user: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.user.username} from {this.state.user.source}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Role</h1>
              <p>
                {this.state.user.role}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
        
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/users">← Back to Users List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
