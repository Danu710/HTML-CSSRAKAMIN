import React from "react";
import { Link } from "react-router-dom";
import logoRakamin from "../img/logo-rakamin.png";

const Navbar = () => {
  return (
    <header>
      <div className="fixed z-20 flex items-center justify-between w-full px-5 md:px-12 backdrop-blur-md">
        <div className="flex items-center justify-start ">
          <Link
            className="drop-shadow-2xl px-2 py-2 transition hover:drop-shadow-xl"
            to="/">
            <img
              src={logoRakamin}
              alt="harry potter"
              className="w-[80px] sm:w-[100px]"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-1 sm:gap-1">
          <Link
            className="sm:text-sm lg:text-lg font-normal font-sans rounded-lg  px-1 sm:px-2 py-1 bg-lightGreen text-white shadow-lightGreen transition-all hover:shadow-md hover:shadow-lightGreen focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            to="/">
            Homephoto
          </Link>
          <Link
            className="sm:text-sm lg:text-lg font-normal font-sans rounded-lg px-1 sm:px-2 py-1  text-white bg-lightGreen shadow-lightGreen transition-all hover:shadow-md hover:shadow-lightGreen focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
            to="/gallery">
            Gallery
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
