import React, { useState } from "react";
import { Link, Routes, BrowserRouter } from "react-router-dom";
import logo from "../assets/vssut.jpeg";

const Header = () => {
  return (
    <div>
      <header className="fixed shadow-md w-full h-25 py-4 px-2 md:px-4 z-50 bg-white">
        {/* desktop */}

        <div className="flex items-center h-full justify-between">
          <Link to={""}>
            <div className="h-10">
              <span className="flex items-center h-full justify-between">
                <img src={logo} className="h-full " />
                <h2>Vssut MCA</h2>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
              <Link to={"/home"}>Home</Link>
              <Link to={"/"}>Community</Link>

              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
