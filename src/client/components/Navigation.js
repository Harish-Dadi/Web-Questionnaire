import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <button>
        <NavLink to="/">Questions</NavLink>
      </button>
      <br />
      <NavLink to="/summary">Summary</NavLink>
    </div>
  );
};
export default Navigation;
