import React from "react";
import { Link } from "react-router-dom";
export const Navbar = ({toggle}) => {
  return (
    <div>
      <nav className="nav-bar mt-2 ml-2 justify-between items-center h-16 bg-white text-black relative shadow-sm  flex" role="navigation">
        <Link className="font-black uppercase text-xl pl-2 hover:text-yellow-300" to="/">Website</Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
         <img src="menu.png" className="w-8" alt="menu" /> 
        </div>
        
            <div className="pr-8 md:block ">
            <Link className="p-4 hover:bg-yellow-300" to="/">Home</Link>
            <Link className="p-4 hover:bg-yellow-300" to="/menu">Menu</Link>
            <Link className="p-4 hover:bg-yellow-300" to="/about">About</Link>

            </div>
        

      </nav>
    </div>
  );
};
