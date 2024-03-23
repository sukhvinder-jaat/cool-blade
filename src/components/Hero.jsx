import React from "react";
import NavBar from "./common/NavBar"; // Importing the navigation bar component
import tree from "../assets/hero/tree.webp"; // Importing the image

const Hero = () => {
  return (
    <div className="flex flex-col lg:pt-0 pt-[96px]">
      {/* Rendering the navigation bar */}
      <NavBar />
      <div className="flex-grow-[1] max-w-[1440px] mx-auto">
        {/* Displaying the hero image */}
        <img
          src={tree}
          alt="tree"
          className="w-full h-full"
          sizes="100vw"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
