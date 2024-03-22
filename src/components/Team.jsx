import React from "react";
import roper from "../assets/team/harper.png"; // Importing an image of a team member
import { teamProfile } from "./common/Helper"; // Importing team member profiles from a helper file
import WantToInvest from "./WantToInvest"; // Importing the WantToInvest component

const Team = () => {
  return (
    <div
      className="bg-aquaSprint bg-join bg-cover bg-no-repeat py-12 md:py-[100px]"
      id="team"
    >
      <div className="max-w-[1170px] mx-auto px-4 2xl:px-0 pb-[50px]">
        {/* Title */}
        <p className="font-poppins font-semibold md:text-4xl text-3xl leading-[normal] text-center uppercase mb-[50px]">
          <span className="text-hippyGreen">Our</span> Team
        </p>
        {/* Rendering team member profiles */}
        {teamProfile.map((content, index) => {
          return (
            <div
              className={`flex flex-wrap mb-[30px] ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              key={index}
            >
              <div className="lg:w-9/12 md:w-11/12 w-full">
                <div className="bg-white shadow-[0px_18px_6px_-15px_#DCEFE5D6] hover:shadow-2xl transition-all ease-in-out duration-300 md:p-[70px] rounded-lg flex md:pe-[55px] sm:p-10 p-7 lg:flex-row flex-col">
                  {/* Team member profile image */}
                  <img
                    src={content.profile}
                    alt="image"
                    className="lg:me-11 max-w-[86px] max-h-[86px]"
                  />
                  <div>
                    {/* Team member name and position */}
                    <p className="font-poppins font-semibold text-xl text-fireFly">
                      {content.title}
                    </p>
                    <p className="font-poppins font-normal text-sm text-fireFly mb-[30px]">
                      {content.post}
                    </p>
                    {/* Team member description */}
                    <div className="flex flex-col gap-y-7">
                      {content.description.map((about, i) => {
                        return (
                          <p
                            className="font-poppins font-normal text-md text-fireFly"
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
      {/* Rendering the WantToInvest component */}
      <WantToInvest />
    </div>
  );
};

export default Team;
