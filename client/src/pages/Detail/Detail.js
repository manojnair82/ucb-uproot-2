import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

var product1=[];
class Detail extends Component {
  state = {
    book: [],
    product: [],
    primaryComponent: []
  };


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  async componentDidMount() {
      await this.loadBook();
      await this.loadBooks();
      await this.loadIssue();


      console.log(this.state.book.length);
  }

  componentWillMount () {
          this.getComponents();
  }

  loadBook = () => {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  loadIssue = () => {
  API.getBook(this.props.match.params.id)
    .then(res => {{ 
      product1 = res.data;
      // console.log(product1)
    }}
      )
    .catch(err => console.log(err));
  }


  loadBooks = () => {
      API.getBooks()
      .then(res => this.setState({ product: res.data}))
      .catch(err => console.log(err));
  }

  compareIssues = () => {
    // if (issues1 instanceof Array) {
      var issues = [];
      var test1 = [];
      issues = this.state.book;
      console.log("array received: "+(issues.component));
      test1.push(JSON.stringify(issues.component));
      console.log("test1 received: "+test1);
     
      // console.log("test1 received: "+test1.component.length);
       // API.getBooks()
       //  .then(res => {
       //    // console.log(res.data);
       //    // console.log(res.data[0].component);
       //    // console.log(res.data.length);
       //    for (var k = 0; k <test1.component.length; k++)
       //     { 
       //      for (var i = 0; i <res.data.length; i++)
       //        {for (var j = 0; j <res.data[i].component.length; j++) 
       //          { if (test1.data.component[k]===res.data[i].component[j]) 
       //            {
       //              console.log("Issue"+test1.data.title+" is linked to "+res.data.title+" by component"+res.data[i].component[j]);
       //            }
       //            // console.log(res.data[i].component[j]);
       //          }
       //        }
       //      } 
       //  })
       //  .catch(err => console.log(err));
    // } else (console.log("not an array"));
  }


  getComponents = () => {
     API.getComps().then(res =>{
        console.log(res);
      })
  }


  render() {
    console.log(this.state);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
             {this.state.product.length ? (
              <h1>
                {this.state.book.title} by {this.state.book.length}
              </h1>
              ):<a></a>}
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>summary</h1>
              <p>
                {this.state.book.summary}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/issues">← Back to Issues List</Link>
          </Col>
          <Col size="md-12 sm-12">
            <h1>Linked Issues</h1>
            {this.state.book.length ? (
              this.compareIssues()
            ):<h1>Loading data</h1>}

              {this.compareIssues()}

            {this.state.product.length ? (
              <List>
                {this.state.product.map(book => (
                  <p key={book._id}>
                  {(book.component===this.state.book.component&&book.title!=this.state.book.title) ? (
                  <ListItem key={book._id}>  
                    <Link to={"/issues/" + book._id}>
                      <strong>
                        {book.title} by {book.reporter}: Linked Components - {this.state.book.component}
                      </strong>
                    </Link>
                  </ListItem>
                  ): <a></a>
                    }
                  </p>
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

export default Detail;
