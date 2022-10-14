import React from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";
import { BsPlusSquare } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar bg-light px-2 py-3">
        <div className="container-fluid">
          <Link className="logo-container link" to="/">
            <img src={logo} alt="Logo" className="logo" />
            MeteoCard
          </Link>
          <div className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link link" to="/card/create">
                <BsPlusSquare className="icon" />
                NUEVA UBICACION
              </Link>
            </li>
          </div>
          <div>
            <Link className="nav-link2 link" to="/Mapas">
              VER EL MAPA
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
