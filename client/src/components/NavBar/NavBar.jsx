import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-wrapper">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">Pickup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

        </ul>
      </nav>
    )
}

export default NavBar;