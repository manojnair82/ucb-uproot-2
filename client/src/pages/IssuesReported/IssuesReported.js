import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn} from "../../components/Form";

class Issues extends Component {
  
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
      API.getBooks()
      .then(res =>
        this.setState({ product: res.data, title: "", reporter: "", summary: "", component: "", subcomponent: "", severity: "", issueType: "" })
      )
      .catch(err => console.log(err));
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

  addsubComponent = event => {
      event.preventDefault();
      var currentcontent = this.state.subcomponent.trim();      
      this.state.newArray.push({
        content: currentcontent, 
        id: ++this.lastId 
      });
      this.setState({
        subcomponent: ""
      }); 
       console.log(this.state.newArray);
       console.log(this.state.subcomponent);
       console.log(this.state);
  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Issues Reported</h1>
            </Jumbotron>
            {this.state.product.length ? (
              <List>
                {this.state.product.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/issues/" + book._id}>
                      <strong>
                        {book.title} by {book.reporter}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Issues;