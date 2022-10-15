import React from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";
import {
  BsPlusSquareFill,
  BsGeoAltFill,
  BsDoorOpenFill,
  BsDoorClosedFill,
} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="logo-container link" to="/">
            <img src={logo} alt="Logo" className="logo" />
            MeteoCard
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/card/create">
                  <BsPlusSquareFill className="me-2" />
                  NUEVA TARJETA
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/map">
                  <BsGeoAltFill className="me-2" />
                  VER MAPA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  <BsDoorOpenFill className="me-2" />
                  LOGIN
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="">
                  <BsDoorClosedFill className="me-2" />
                  LOGOUT
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
