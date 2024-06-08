import React from "react";
import Slider from "react-slick";

const LatestProduct = ({ data, title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="font-extrabold text-base text-sky-800"> {title}</div>

      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="backdrop-opacity-15">
            <img
              src={item.image}
              alt="no"
              className="h-[250px] w-[200px]"
            ></img>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestProduct;
