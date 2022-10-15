import React, { useContext, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./Navigation.css";
import {
  BsPlusSquareFill,
  BsGeoAltFill,
  BsDoorOpenFill,
  BsDoorClosedFill,
} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-light">
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
              <li className="nav-item m-2">
                <Link
                  className={`nav-link ${currentUser ? "" : "disabled"}`}
                  to="/card/create"
                >
                  <BsPlusSquareFill className="me-2" />
                  NUEVA TARJETA
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/map">
                  <BsGeoAltFill className="me-2" />
                  VER MAPA
                </Link>
              </li>
              {!currentUser ? (
                <li className="nav-item m-2">
                  <Link className="nav-link" to="/login">
                    <BsDoorOpenFill className="me-2" />
                    LOGIN
                  </Link>
                </li>
              ) : (
                <li className="nav-item m-2">
                  <span className="nav-link" onClick={handleSignOut}>
                    <BsDoorClosedFill className="me-2" />
                    LOGOUT
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
