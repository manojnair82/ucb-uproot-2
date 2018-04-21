import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn} from "../../components/Form";

class Users extends Component {
  
  state = {
    userlist:[],
    username: "",
    source: "",
    role: ""
  };
  lastId = -1;

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
      API.getUsers()
      .then(res =>
        this.setState({ userlist: res.data, username: "", reporter: "", source: "", component: "", role: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.getUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.reporter) {
  //     API.saveBook({
  //       title: this.state.title,
  //       reporter: this.state.reporter,
  //       summary: this.state.summary,
  //       component: this.state.component,
  //       subcomponent: this.state.subcomponent,
  //       severity: this.state.severity,
  //       issueType: this.state.issueType
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //       console.log(this.state.title);
  //       console.log(this.state.component)
  //   }
  // };

  // addComponent = event => {
  //   event.preventDefault();
  //   const newComponent = this.state.component;
  //   console.log("Before: "+this.state.component);
  //   this.setState({
  //     component: this.state.component.concat(newComponent )
  //   });
  //   console.log("After: "+this.state.component);
  // }

  // addsubComponent = event => {
  //     event.preventDefault();
  //     var currentcontent = this.state.subcomponent.trim();      
  //     this.state.newArray.push({
  //       content: currentcontent, 
  //       id: ++this.lastId 
  //     });
  //     this.setState({
  //       subcomponent: ""
  //     }); 
  //      console.log(this.state.newArray);
  //      console.log(this.state.subcomponent);
  //      console.log(this.state);
  // }


  render() {
    return (
      <Container fluid>
        <Row>

          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Users Created</h1>
            </Jumbotron>
            {this.state.userlist.length ? (
              <List>
                {this.state.userlist.map(user => (
                  <ListItem key={user._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {user.role} from {user.source}
                      </strong>
                    </Link>
                      {user.role==='endUser' ? (
                        <a>testing if condition</a>
                        ): <a></a>
                      } 

                    <DeleteBtn onClick={() => this.deleteUser(user._id)} />
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

export default Users;
