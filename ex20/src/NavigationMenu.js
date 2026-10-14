
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/users/123">User Profile</NavLink>
    </nav>
  );
};

export default NavigationMenu;
