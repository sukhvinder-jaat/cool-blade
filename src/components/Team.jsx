import React from "react";
import roper from "../assets/team/harper.png";
import { teamProfile } from "./common/Helper";
const Team = () => {
  return (
    <div className=" bg-aquaSprint bg-join bg-cover bg-no-repeat pt-[100px]">
      <div className="max-w-[1170px] mx-auto px-4 2xl:px-0">
        <p className=" font-poppins font-semibold md:text-4xl text-3xl leading-[normal] text-center uppercase mb-[50px]">
          <span className=" text-hippyGreen">Our</span> Team
        </p>
        {teamProfile.map((content, index) => {
          return (
            <div
              className={`flex flex-wrap mb-[30px] ${
                index % 2 === 0 ? " justify-start" : " justify-end"
              }`}
              key={index}
            >
              <div className=" lg:w-9/12 md:w-11/12 w-full">
                <div className=" bg-white shadow-[0px_18px_6px_-15px_#DCEFE5D6] hover:shadow-2xl transition-all ease-in-out duration-300 md:p-[70px] rounded-lg flex md:pe-[55px] sm:p-10 p-7 lg:flex-row flex-col">
                  <img
                    src={content.profile}
                    alt="image"
                    className=" lg:me-11 max-w-[86px] max-h-[86px]"
                  />
                  <div>
                    <p className=" font-poppins font-semibold text-xl text-fireFly">
                      {content.title}
                    </p>
                    <p className=" font-poppins font-normal text-sm text-fireFly mb-[30px]">
                      {content.post}
                    </p>
                    <div className=" flex flex-col gap-y-7">
                      {content.description.map((about, i) => {
                        return (
                          <p
                            className=" font-poppins font-normal text-md text-fireFly"
                            key={i}
                          >
                            {about}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
