import React from "react";
import girl from "../assets/problem/girl.png"; // Importing an image of a girl
import leftTree from "../assets/problem/left_tree.png"; // Importing an image of a tree on the left
import rightTree from "../assets/problem/right_tree.png"; // Importing an image of a tree on the right
import { problemWood } from "./common/Helper"; // Importing problem wood images from a helper file
import treeSmall from "../assets/problem/tree_small.png";
import { Tilt } from "react-tilt";
const Problem = () => {
  return (
    <div className="relative max-w-[1920px] overflow-hidden" id="problem">
      {/* Problem statement section */}
      <div
        className="max-w-[1170px] mx-auto px-4 2xl:px-0 mt-[100px] pb-[224px] relative z-10"
        id="about"
      >
        <div className="flex flex-wrap mb-12 md:mb-[100px]">
          {/* Image of a girl */}
          <div className="lg:w-4/12 w-full flex justify-center lg:justify-start lg:mb-0 mb-7">
            <img
              src={girl}
              alt="girl"
              className="w-full max-w-[262px] max-h-[236px]"
            />
          </div>
          <div className="lg:w-8/12 w-full flex flex-col lg:items-start items-center text-center lg:text-start">
            {/* Problem statement title */}
            <p className="font-poppins font-semibold md:text-4xl text-3xl leading-[110%] uppercase lg:text-start text-center relative z-10 mb-10">
              Problem <span className="text-hippyGreen">Statement</span>
            </p>
            <div className="max-w-[700px]">
              {/* Description of the problem */}
              <p className="font-poppins font-normal md:text-lg text-md text-fireFly mb-[30px]">
                CarbonZero.eco employs{" "}
                <span className="font-semibold">
                  cutting-edge, clean pyrolysis technology
                </span>{" "}
                to halt carbon dioxide emissions from decomposing wood, thereby
                mitigating environmental impact.
              </p>
              <p className="font-poppins font-normal md:text-lg text-md text-fireFly mb-[30px]">
                With the enactment of legislation like{" "}
                <span className="font-semibold">California's SB1383,</span>{" "}
                which restricts wood waste disposal in landfills, the demand for
                sustainable wood management has never been greater.
              </p>
              <p className="font-poppins font-normal md:text-lg text-md text-fireFly mb-[30px]">
                Our technology is certified{" "}
                <span className="font-semibold">carbon negative,</span> operates
                on its own syngas generated from the pyrolysis process, and
                produces high-quality 85% c-fix agricultural biochar, increasing
                crop yields by over 20%.
              </p>
            </div>
          </div>
        </div>
        {/* Displaying images related to problem wood */}
        <div className="flex flex-wrap gap-y-[30px]">
          {problemWood.map((image, index) => {
            return (
              <div
                className={`lg:w-3/12 md:w-4/12 sm:w-6/12 w-full sm:px-[15px] ${
                  index % 2 === 0 ? "" : " sm:translate-y-[70px]"
                }`}
                key={index}
              >
                <Tilt options={{ scale: 1.02, max: 10 }}>
                  <img
                    src={image}
                    alt="wood"
                    className="w-full transition-all ease-in-out duration-300 hover:scale-95"
                  />
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
      {/* Images of trees positioned at the bottom corners */}
      <img
        src={leftTree}
        alt="left tree"
        className="max-w-[400px] absolute start-0 bottom-0 small:block hidden"
      />
      <img
        src={rightTree}
        alt="right tree"
        className="max-w-[250px] absolute end-0 bottom-0 small:block hidden"
      />
      <img
        src={treeSmall}
        alt="tree small"
        className=" small:hidden block absolute bottom-0"
      />
    </div>
  );
};

export default Problem;
