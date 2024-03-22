import React from "react";
import { usaImage } from "./common/Helper";
import Slider from "react-slick";
const Usa = () => {
  var usaSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1080px] mx-auto px-4 2xl:px-0 py-[44px]">
      <div className="usa_slider">
        <Slider {...usaSlider}>
          {usaImage.map((content, index) => {
            return (
              <img
                key={index}
                src={content.path}
                alt="image"
                className={`${content.width}`}
                sizes="100vw"
                loading="lazy"
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Usa;
