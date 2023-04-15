import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar">
      
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/yoga" className="navbar-item">
        Yoga
      </Link>
      <Link to="/counter" className="navbar-item">
        Workout
      </Link>
      <Link to="/about" className="navbar-item">
        About
      </Link>

    </section>
  );
}

export default Navbar;