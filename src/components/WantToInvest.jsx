import React from "react";

const WantToInvest = () => {
  return (
    <div className=" small:px-0 px-5">
      <div className="max-w-[976px] mx-auto small:bg-invest size_full bg-investSmall small:min-h-[259px] min-h-[570px] small:bg-cover bg-no-repeat relative">
        {/* Text prompting users to invest, partner, or say hi */}
        <p className="font-poppins font-bold md:text-2xl text-xl text-center text-fireFly leading-[110%] absolute start-[50%] small:bottom-[68px] translate-x-[-50%] bottom-[60%]">
          Want to invest,{" "}
          <span className="block">
            partner or <span className="text-hippyGreen">just say hi!</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default WantToInvest;
