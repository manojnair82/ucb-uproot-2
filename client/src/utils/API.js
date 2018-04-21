import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/"+ id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
    loginUser: function() {
    return axios.get("/auth/google");
  },
    getComps: function() {
      return axios.get("/api/comps");
  },
    getNodes: function() {
      return axios.get("/api/comps/nodes");
  },
    getLinks: function() {
      return axios.get("/api/comps/links");
  }
};
