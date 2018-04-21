import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn} from "../../components/Form";
// import superagent from "superagent";

class Login extends Component {
  
  state = {
    product: [],
    title: "",
    reporter: "",
    summary: "",
    newArray: [],
    component: "",
    subcomponent: "",
    severity: "",
    issueType: "",
    width: 100
  };
  lastId = -1;

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
      // API.getBooks()
      // .then(res =>
      //   this.setState({ product: res.data, title: "", reporter: "", summary: "", component: "", subcomponent: "", severity: "", issueType: "" })
      // )
      // .catch(err => console.log(err));
      console.log("Login page loaded");
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.reporter) {
      API.saveBook({
        title: this.state.title,
        reporter: this.state.reporter,
        summary: this.state.summary,
        component: this.state.component,
        subcomponent: this.state.subcomponent,
        severity: this.state.severity,
        issueType: this.state.issueType
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
        console.log(this.state.title);
        console.log(this.state.component)
    }
  };

  // addComponent = event => {
  //   event.preventDefault();
  //   const newComponent = this.state.component;
  //   console.log("Before: "+this.state.component);
  //   this.setState({
  //     component: this.state.component.concat(newComponent )
  //   });
  //   console.log("After: "+this.state.component);
  // }

  addsubComponent1 = event => {
      event.preventDefault();
      // superagent
      //   .post('/auth/login').end((err,res) => {
      //     if(err) {console.log("error")};
      //       console.log(res)
      API.loginUser().then(res => console.log(res))
      .catch(err => console.log(err));
        };
      
  


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <nav>
             <FormBtn onClick={this.addsubComponent1}>Add Sub-Component
              </FormBtn>
            </nav>
          </Col>
          <Col size="md-12 sm-12">
            <header>
              <h2>Login using...</h2>
            </header>
            <main>
              <a className="google-btn" href="http://localhost:3001/auth/google">Google+</a>
            </main>
            <header>
              <h2>Login using...</h2>
            </header>
            <main>
              <a className="facebook-btn" href="http://localhost:3001/auth/facebook">Facebook</a>
            </main>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
