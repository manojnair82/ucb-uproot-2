import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Issues from "./pages/Issues";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Users from "./pages/Users";
import DetailUsers from "./pages/DetailUsers";
import D3graph from "./pages/D3graph";
import IssuesReported from "./pages/IssuesReported";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/issues" component={Issues} />
        <Route exact path="/issues/:id" component={Detail} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={DetailUsers} />
        <Route exact path="/D3graph" component={D3graph} />
        <Route exact path="/issuesReported" component={IssuesReported} />       
        <Route component={NoMatch} />

      </Switch>
    </div>
  </Router>
);

export default App;
