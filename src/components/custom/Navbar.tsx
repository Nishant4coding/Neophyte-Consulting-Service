import Image from "next/image";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavigation = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`snap-start w-full z-50 transition-all px-[5vw] duration-300 shadow-md border-b-[1px] bg-custom-bg`}
    >
      <div className="flex items-center mx-auto py-4">
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
            className="w-full h-full"
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-custom-bg lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <ul className="w-full flex flex-col lg:flex-row lg:items-center lg:space-x-16 py-4 justify-center items-center text-2xl gap-10 px-4 bg-[#E5E7E0]/40 rounded-lg">
            <li>
              <a href="#" className="text-white hover:text-[#dcfd82]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#dcfd82]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#dcfd82]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#dcfd82]">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#dcfd82]">
                Career
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <button className="py-4 px-6 text-white font-bold uppercase bg-custom-dark rounded-lg border-[#dcfd82] border-2">
            Contact
          </button>
        </div>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
