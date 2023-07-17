import React from "react";
import User from "../User/User";
import Logo from "./Logo";
import TogleTheme from "../TogleTheme/TogleTheme";
import SelectDate from "./SelectDate";

const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex flex-col items-center">
        <Logo />
        <User />
        <SelectDate
         />
      </div>
      <TogleTheme />
    </header>
  );
};

export default Header;
