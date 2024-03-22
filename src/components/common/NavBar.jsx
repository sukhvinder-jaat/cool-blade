import React, { useState } from "react";
import Logo from "../../assets/nav_bar/main_logo.svg"; // Importing the logo image
import { navLink } from "./Helper"; // Importing navigation links from a helper file
import { Cross, NavLine } from "./Icon"; // Importing icons for mobile menu toggle

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false); // State to track if the mobile menu is open or closed

  // Function to toggle the mobile menu and control body overflow
  const navToggleHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
    document.body.style.overflow = isNavBarOpen ? "auto" : "hidden"; // Hide body overflow when the mobile menu is open
  };

  return (
    <>
      {/* Navigation bar */}
      <nav className="bg-white py-[26px] relative z-40 flex-grow-0">
        <div className="max-w-[1380px] mx-auto px-4 2xl:px-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={Logo}
                alt="logo"
                className="w-full sm:max-w-[244px] max-w-[200px]"
                sizes="100vw"
                loading="lazy"
              />
            </div>
            {/* Mobile menu toggle button */}
            <div className="flex items-center xl:hidden relative z-10">
              <button
                onClick={navToggleHandler}
                type="button"
                className="bg-fireFly inline-flex items-center justify-center p-2 rounded-md hover:scale-90 transition-all ease-in-out duration-300 text-white hover:bg-fireFly  focus:outline-none focus:bg-fireFly focus:text-white group"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Open Mobile Menu"
              >
                {/* Conditional rendering of menu icon */}
                {!isNavBarOpen ? <NavLine /> : <Cross />}
              </button>
            </div>
            {/* Desktop navigation links */}
            <div className="hidden xl:block">
              <div className="flex items-center space-x-10">
                {navLink.map((content, index) => {
                  return (
                    <a
                      key={index}
                      href={content.href}
                      className=" flex items-center gap-[10px] hover:text-hippyGreen transition-all ease-in-out duration-300 font-poppins md:text-base text-md  text-fireFly uppercase font-semibold leading-[normal] group"
                    >
                      {content.icon} {content.link}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`${
          isNavBarOpen ? "top-[10%]" : "top-[-120%]"
        } xl:hidden overflow-hidden py-6 transition-all ease-liner duration-[1s] bg-white shadow-xl absolute z-10 w-full`}
        id="mobile-menu"
      >
        <div className="ps-5 pt-2 pb-3 space-y-5">
          {navLink.map((content, index) => {
            return (
              <a
                key={index}
                onClick={navToggleHandler}
                href={content.href}
                className=" flex items-center gap-[10px] hover:text-hippyGreen transition-all ease-in-out duration-300 font-poppins md:text-base text-md  text-fireFly uppercase font-semibold leading-[normal] group"
              >
                {content.icon} {content.link}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;
