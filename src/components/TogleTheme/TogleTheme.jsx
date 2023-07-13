import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const TogleTheme = () => {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-400 block dark:hidden cursor-pointer"
        onClick={toggle}
      />
      <SunIcon
        className="h-8 text-gray-400 hidden dark:block cursor-pointer"
        onClick={toggle}
      />
    </div>
  );
};

export default TogleTheme;
