import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-2 w-full bg-gradient-to-r from-emerald-800 from-10% via-emerald-700 via-40% to-emerald-900 to-90% border-b-4 border-emerald-900 sticky top-0 z-10 w-full">
      <NavLink
        to={"/home"}
        className="text-lg mx-2 text-gray-100 font-sans-serif border-gray-100 border-b-2 px-2"
      >
        Random
      </NavLink>
      <NavLink
        to={"/search"}
        className="text-lg mx-2 text-gray-100 font-sans-serif border-gray-100 border-b-2 px-2"
      >
        Search
      </NavLink>
    </div>
  );
}

export default Navbar;
