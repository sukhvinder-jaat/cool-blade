import React from "react";
import about from "../assets/about/chemical.svg";
const AboutCompany = () => {
  return (
    <div className="max-w-[1170px] mx-auto px-4 2xl:px-0" id="about">
      <div className=" flex flex-wrap">
        <div className=" lg:w-4/12 w-full">
          <p className=" font-poppins font-semibold md:text-4xl text-3xl leading-[110%] uppercase lg:text-start text-center lg:mb-0 md:mb-9 mb-4 relative z-10">
            <span className=" text-hippyGreen lg:block">About</span> our company
          </p>
        </div>
        <div className=" lg:w-8/12 w-full">
          <div className=" bg-white shadow-[0px_18px_6px_-15px_#DCEFE5D6] rounded-lg pt-10 sm:ps-10 px-5 md:pb-[50px] pb-7 sm:pe-[50px] flex md:flex-row flex-col-reverse justify-between relative z-10 hover:shadow-2xl transition-all ease-in-out duration-300">
            <div>
              <p className=" font-poppins font-semibold text-lg text-fireFly max-w-[461px] mb-[30px]">
                This staggering amount of waste poses significant environmental
                challenges, including increased carbon.
              </p>
              <p className="max-w-[461px] font-poppins font-normal text-md text-fireFly">
                As awareness of environmental issues grows, it becomes
                increasingly important for the landscaping industry to adopt
                sustainable practices and minimize waste generation. By
                implementing strategies.
              </p>
            </div>
            <div className="w-[92px] h-[92px] bg-gradient-to-br from-hippyGreen to-treeGreen rounded-full flex items-center justify-center md:mb-0 mb-4 md:mt-2">
              <img
                src={about}
                alt="profile"
                className=" max-w-[50px] w-full object-cover"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
