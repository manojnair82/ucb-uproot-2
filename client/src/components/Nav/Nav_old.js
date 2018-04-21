import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <strong>Uproot</strong>
        </a>
        <a href="/issues" className="navbar-brand">
          <strong>Issues</strong>
        </a>
        <a href="/users" className="navbar-brand">
          <strong>Users</strong>
        </a>
        <a href="/D3graph" className="navbar-brand">
          <strong>Graph</strong>
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
