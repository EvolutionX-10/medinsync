'use client'
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navb = ({ isSticky, toggleMenu, isMenuOpen }) => {
  return (
    <header className="mx-auto w-1/2 bg-white md-bg-transparent rounded-full fixed top-4 left-0 right-0 z-10 overflow-x-hidden">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between item-center text-base gap-40">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src="/logo.svg"
              alt=""
              className="w-10 initial-block items-center"
            />
          </a>
          <ul className="md:flex space-x-12 hidden items-center font-semibold">
            <Link href="/login">
              <button className="rounded-3xl ml-0 bg-[#0075FF] px-16 py-3 text-white">
                Login
              </button>
            </Link>
          </ul>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-8 text-emerald-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  className="text-emerald-900"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-primary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {/* No About or FAQ links */}
        </div>
      </nav>
    </header>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-cover bg-center overflow-x-hidden">
      <Navb
        isSticky={isSticky}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default Navbar;