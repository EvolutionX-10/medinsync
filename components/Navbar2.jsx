import React, { useState } from "react";
import { Link } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navb = ({ isSticky, toggleMenu, isMenuOpen, navItems }) => {
  const [name , setName] = useState('Jayesh')

  return (
    <header className={`w-full ${isSticky ? "sticky top-0 left-0 right-0 bg-white shadow-md rounded-b-lg z-10" : ""}`}>
      <nav className="py-4 lg:px-14 px-4">
        <div className="flex justify-around items-center text-base">
          <a href="#" className="text-2xl font-semibold flex items-center space-x-3">
            <img src="/logo.svg" alt="" className="w-10 initial-block items-center" />
          </a>
          <ul className="md:flex space-x-12 hidden items-center font-semibold">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-emerald-900 hover:text-emerald-500"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="flex items-center">
            <button onClick={toggleMenu} className="hidden">
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
            <Avatar className="ml-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-4">{name}</p>
          </div>
        </div>
        <div className={`space-y-4 px-4 mt-16 py-7 bg-primary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-emerald-900"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      id: 1,
      link: "About",
      path: "about",
    },
    {
      id: 2,
      link: "About",
      path: "about",
    },
    {
      id: 3,
      link: "About",
      path: "about",
    },
  ];

  return (
    <div className="bg-cover bg-center  overflow-x-hidden">
      <Navb
        isSticky={isSticky}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        navItems={navItems}
      />
    </div>
  );
};

export default Navbar;
