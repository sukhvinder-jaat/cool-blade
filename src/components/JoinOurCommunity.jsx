import React from "react";
import { joinProfile } from "./common/Helper";
import AboutCompany from "./AboutCompany";
import planting from "../assets/about/planting.webp";
const JoinOurCommunity = () => {
  return (
    <div className=" bg-aquaSprint">
      <div className=" bg-join bg-no-repeat bg-cover md:pt-[90px] pt-10 md:pb-[100px] pb-10 mb-12 md:mb-[100px]">
        <div className="max-w-[1170px] mx-auto px-4 2xl:px-0">
          <p className=" font-poppins font-semibold md:text-4xl text-3xl leading-[normal] text-center uppercase md:mb-9 mb-4">
            <span className=" text-hippyGreen">Join</span> Our Community
          </p>
          <p className=" font-poppins font-normal md:text-lg text-base text-center text-riverBed max-w-[880px] mx-auto md:mb-20 mb-10">
            Our vision is a bright green future where children can play and
            breathe clean air and our farmers have an abundance of fertile soil
            to grow food to feed America's families.
          </p>
          <div className=" flex-wrap flex gap-y-7 justify-center">
            {joinProfile.map((content, index) => {
              return (
                <div
                  className="lg:w-4/12 md:w-6/12 w-full md:px-[15px] md:max-w-full sm:max-w-[400px] max-w-[332px]"
                  key={index}
                >
                  <div className="shadow-[0px_18px_6px_-15px_#DCEFE5D6] hover:shadow-2xl transition-all ease-in-out duration-300 px-7 w-full pt-10 pb-11 bg-white rounded-lg h-full">
                    <div className=" w-[92px] h-[92px] bg-gradient-to-br from-hippyGreen to-treeGreen rounded-full flex items-center justify-center mb-[50px]">
                      <img
                        src={content.profile}
                        alt="profile"
                        className=" max-w-[50px] w-full"
                        sizes="100vw"
                        loading="lazy"
                      />
                    </div>
                    <p className=" font-poppins font-semibold md:text-xl text-base text-fireFly mb-5">
                      {content.title}
                    </p>
                    <p className=" font-poppins font-normal md:text-md text-sm text-fireFly mb-10">
                      Our vision is to create a cleaner and healthier
                      environment by reducing the release of cow waste into the
                      Earth's atmosphere in the United States.
                    </p>
                    <button
                      className=" border-[2px] border-hippyGreen rounded-[33px] p-[5px_24px_5px_24px] font-poppins font-semibold text-sm md:text-md leading-[24px] flex items-center justify-center text-hippyGreen min-w-[137px] hover:bg-hippyGreen transition-all ease-in-out duration-300 hover:text-white"
                      aria-controls="start"
                      aria-expanded="start btn"
                      aria-label="start btn"
                    >
                      start now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AboutCompany />
      <div className="max-w-[1440px] mx-auto mt-[-110px]">
        <img
          src={planting}
          alt="planting"
          className=" w-full"
          sizes="100vw"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default JoinOurCommunity;
