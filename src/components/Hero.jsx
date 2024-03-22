import React from "react";
import NavBar from "./common/NavBar";
import tree from "../assets/hero/tree.png";
const Hero = () => {
  return (
    <div className=" md:min-h-[70vh] flex flex-col">
      <NavBar />
      <div className=" flex-grow-[1] max-w-[1440px] mx-auto">
        <img src={tree} alt="tree" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
