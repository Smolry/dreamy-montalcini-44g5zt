import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            color: "#6b4e37",
          }}
        >
          Pinch of Yum
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Start Here
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <a className="btn btn-outline-primary" href="/Login">
              Login
            </a>
            <a className="btn btn-primary" href="/Register">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
