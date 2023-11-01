import React from "react";
import { NavLink } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active">
        Movies
      </NavLink>
      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>
      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
