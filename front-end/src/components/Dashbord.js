import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Dashbord() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Company Logo */}
          <a className="navbar-brand" href="/">
            Company Logo
          </a>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
            <Link to="/"className="btn btn-danger" >Logout</Link>
          </div>
        </div>
      </nav>
      <img
        src="https://e0.pxfuel.com/wallpapers/370/359/desktop-wallpaper-new-nature-summer-full-for-pc-ultra.jpg"
        alt="img"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></img>
    </div>
  );
}

export default Dashbord;
