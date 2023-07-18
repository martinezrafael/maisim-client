import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import UserItem from "../User/UserItem";

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="header__container">
        <Logo />
        <UserItem />
      </div>
      <nav className="flex">
        <NavLink to="/" end>Home</NavLink>{" "}
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
};

export default Header;
