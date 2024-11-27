import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-bg shadow-md snap-start py-5">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={100}
              className="w-full h-full"
            />
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              ☰
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-16 bg-[#e5e7e0]/40  py-4 px-4 rounded-lg text-xl ">
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
          </div>

          <div className="hidden md:block border-1 border-[#dcfd82] pb-2">
            <button className=" text-white px-4 py-2 border-2 rounded-md border-[#dcfd82] text-xl">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Contact Button */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2">
          <button className="w-full bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
