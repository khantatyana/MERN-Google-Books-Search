import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Nav() {
  const location = useLocation();
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
      
        Google Books
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="navbar-brand" to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Search Book
          </Link>
        </li>
        <li className="nav-item">

          <Link className="navbar-brand" to="/saved"
            className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
          >
            Saved Books
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}

export default Nav;
