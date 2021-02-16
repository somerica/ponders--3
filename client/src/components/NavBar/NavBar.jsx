import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-wrapper">
        <ul className="nav">
        <a href="#" class="brand-logo center">Ponders Cleaner</a>
        <li className="nav-item">
            <Link className="nav-link" to="/pickup">Pickup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Log in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
         </ul>
      </nav>
    )
}

export default NavBar;