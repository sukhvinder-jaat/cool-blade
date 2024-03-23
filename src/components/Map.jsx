import React from "react";
import map from "../assets/map/map.png";
const Map = () => {
  return (
    <div className=" max-w-[1440px] mx-auto relative xl:min-h-[1390px] lg:min-h-[1210px]">
      <img
        src={map}
        alt="map"
        className="w-full xl:translate-y-0 lg:translate-y-[10%]"
      />
      {/* engage student */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[282px] absolute top-[18%] start-[9%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Engage in student</span> fundraising
          activities to raise money by being ambassadors for the planet.
        </p>
      </div>
      {/* Affordable landscapers */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[282px] absolute top-[24%] start-[39%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Affordable SB1383 -</span> compliant
          waste removal for landscapers
        </p>
      </div>
      {/* Our  technology */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[282px] absolute top-[34%] end-[23%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Our technology</span> is certified
          carbon negative and will offset over 500,000 tons of carbon by 2030.
        </p>
      </div>
      {/* Our biochar */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[282px] absolute top-[49%] end-[6%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Our biochar</span> effectively
          removes heavy metals and toxins from stormwater.
        </p>
      </div>
      {/* Our ORC technology */}
      <div className=" bg-messageRight pt-[15px] pb-5 px-5 max-w-[268px] absolute top-[34%] start-[14%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Our ORC technology</span> provides
          clean, renewable energy back to the grid.
        </p>
      </div>
      {/*  Eco-friendly  */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[310px] absolute top-[44%] start-[12%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold"> Eco-friendly </span> demolition
          waste removal services aligning with SB1383.
        </p>
      </div>
      {/*  we are  */}
      <div className=" bg-messageLeft pt-[15px] pb-5 px-5 max-w-[207px] absolute bottom-[24%] start-[18%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">We are </span> a Silicon Valley based
          company.
        </p>
      </div>
      {/*  we are  */}
      <div className=" bg-messageRight pt-[15px] pb-5 px-5 max-w-[330px] absolute bottom-[19%] end-[19%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          California feeds America, and Biochar{" "}
          <span className=" font-semibold">increases crop yields</span> by 20%
          to 100%, simultaneously regenerating the soil for future generations.
        </p>
      </div>
      {/* our forestry*/}
      <div className=" bg-messageRight pt-[15px] pb-5 px-5 max-w-[300px] absolute top-[17%] end-[5%] bg-100">
        <p className=" font-poppins font-normal text-sm text-fireFly">
          <span className=" font-semibold">Our forestry operations</span> clean
          storm debris, provide fire prevention, and surplus biochar is returned
          for land reclamation.
        </p>
      </div>
    </div>
  );
};

export default Map;
