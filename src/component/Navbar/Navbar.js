import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand my-brand" href="/">
            Abhishek Yadav
          </a>
          <button
            className="navbar-toggler shrink-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span><i className="fa-solid fa-info"></i></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Abhishek Yadav
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" onClick={()=>{navigate("/")}}>
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={()=>{navigate("/")}}>
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item" onClick={()=>{navigate("/")}}>
                  <a className="nav-link" href="#resume-container">
                    Resume
                  </a>
                </li>
                <li className="nav-item" onClick={()=>{navigate("/")}}>
                  <a className="nav-link" href="#project-container">
                    Project
                  </a>
                </li>
                <li className="nav-item" onClick={()=>{navigate("/")}}>
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
