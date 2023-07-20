import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <div className="header__container">
        <Logo />
      </div>
      <nav className="flex">
        <NavLink to="/users/id" end>Home</NavLink>{" "}
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
};

export default Header;
