import React from "react";
import footer from "../../assets/footer/animating_logo.gif";
import { contact } from "./Helper";

// Define Footer component
const Footer = () => {
  return (
    <div className="bg-aquaSprint pt-[70px]" id="contact">
      <div className="max-w-[1170px] mx-auto px-4 2xl:px-0">
        {/* Logo */}
        <div className=" flex justify-center items-center">
          <a href="#">
            {" "}
            <img
              src={footer}
              alt="logo"
              className=" max-w-[148px] mx-auto mb-7"
            />
          </a>
        </div>
        {/* Main message */}
        <p className=" max-w-[700px] md:text-lg text-md text-fireFly font-poppins font-normal text-center mx-auto mb-[52px]">
          By implementing strategies such as composting, mulching, and
          responsible tree removal, we can reduce the environmental sustainable
          future.
        </p>

        {/* Contact links */}
        <div className="shadow-[0px_18px_6px_-15px_#DCEFE5D6] bg-white rounded-lg hover:shadow-2xl duration-300 transition-all ease-out py-[70px] px-10 mb-10 flex justify-center">
          <div className=" max-w-[996px] flex lg:flex-row flex-col gap-y-4 lg:items-center justify-between lg:w-full mx-auto">
            {/* Map through contacts */}
            {contact.map((content, index) => {
              return (
                <a
                  href={content.href}
                  className=" flex items-center gap-5 group"
                  key={index}
                >
                  {/* Contact icon */}
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-hippyGreen to-treeGreen rounded-full flex items-center justify-center ">
                    {content.icon}
                  </div>

                  {/* Contact title */}
                  <p className="max-w-[202px] font-poppins font-normal text-md text-fireFly group-hover:text-hippyGreen transition-all ease-in-out duration-300">
                    {content.title}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <p className=" text-coolGrey font-poppins font-normal text-xsm text-center pb-10">
          © {new Date().getFullYear()} All Copyright Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
