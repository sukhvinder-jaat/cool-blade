import React, { useState } from "react";
import Logo from "../../assets/nav_bar/main_logo.svg";
import { navLink } from "./Helper";
import { Cross, NavLine } from "./Icon";
const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const navToggleHandler = () => {
    setIsNavBarOpen(!isNavBarOpen);
    document.body.style.overflow = isNavBarOpen ? "auto" : "hidden";
  };

  return (
    <>
      <nav className="bg-white py-[26px] relative z-10 flex-grow-0">
        <div className="max-w-[1380px] mx-auto px-4 2xl:px-0">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <img
                src={Logo}
                alt="logo"
                className="w-full sm:max-w-[244px] max-w-[200px]"
              />
            </div>
            <div className="flex items-center xl:hidden relative z-10">
              <button
                onClick={navToggleHandler}
                type="button"
                className="bg-fireFly inline-flex items-center justify-center p-2 rounded-md hover:scale-90 transition-all ease-in-out duration-300 text-white hover:bg-fireFly  focus:outline-none focus:bg-fireFly focus:text-white group"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isNavBarOpen ? <NavLine /> : <Cross />}
              </button>
            </div>
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
      </nav>{" "}
      <div
        className={`${
          isNavBarOpen ? "top-[95px]" : "top-[-120%]"
        } xl:hidden overflow-hidden transition-all ease-in-out duration-300 bg-white shadow-xl absolute w-full`}
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
