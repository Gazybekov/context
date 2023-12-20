import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="add">Добавить</NavLink>
      <NavLink to={"edit"}>Редактировать</NavLink>
    </div>
  );
};

export default Navbar;
