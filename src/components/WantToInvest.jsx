import React from "react";

const WantToInvest = () => {
  return (
    <div className="max-w-[976px] mx-auto bg-invest min-h-[259px] bg-cover bg-no-repeat relative">
      {/* Text prompting users to invest, partner, or say hi */}
      <p className="font-poppins font-bold md:text-2xl text-xl text-center text-fireFly leading-[110%] absolute start-[50%] bottom-[68px] translate-x-[-50%]">
        Want to invest,{" "}
        <span className="block">
          partner or <span className="text-hippyGreen">just say hi!</span>
        </span>
      </p>
    </div>
  );
};

export default WantToInvest;
