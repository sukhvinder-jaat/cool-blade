import React, { useEffect, useState } from "react";
import Logo from "../../assets/nav_bar/main_logo_animation.gif"; // Importing the logo image
import { navLink } from "./Helper"; // Importing navigation links from a helper file
import { Cross, NavLine } from "./Icon"; // Importing icons for mobile menu toggle

const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false); // State to track if the mobile menu is open or closed
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State to track previous scroll position
  const [visible, setVisible] = useState(true); // State to track navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  // Function to toggle the mobile menu and control body overflow
  const navToggleHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
    document.body.style.overflow = isNavBarOpen ? "auto" : "hidden"; // Hide body overflow when the mobile menu is open
  };

  return (
    <>
      <div
        className={`h-screen w-full fixed top-0 z-[60] ${
          isNavBarOpen === true ? "block" : "hidden"
        }`}
        onClick={navToggleHandler}
      ></div>
      <div
        className={`top-0  fixed w-full transition-all lg:shadow-none ease-in-out shadow-2xl duration-300 z-[70] ${
          visible ? " translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Navigation bar */}
        <nav className="bg-white py-[26px] relative z-40 flex-grow-0">
          <div className="max-w-[1380px] mx-auto px-4 2xl:px-0">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <a href="#" className="flex-shrink-0">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-screen sm:max-w-[244px] max-w-[200px]"
                  sizes="100vw"
                  loading="lazy"
                />
              </a>
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
            isNavBarOpen ? "top-[30%]" : "top-[-190%]"
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
      </div>
    </>
  );
};

export default NavBar;
