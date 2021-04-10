import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";

const ThemeToggler = ({ darkModeIsOne = false }) => {
  return <>{darkModeIsOne ? <Sun /> : <Moon />}</>;
};

export default ThemeToggler;
