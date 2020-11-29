import React from "react";
import "../css/general.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-light bg-light navbar-expand"
      style={{ marginBottom: "15px" }}
    >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-links">
          <li className="nav-item">
          <Link style={{textDecoration: "none"}} to={'/'}>
              Home
            </Link>
          </li>
          <li  className="nav-item">
            <Link style={{textDecoration: "none"}} to={'/addPhone'}>
              Add Phone
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
