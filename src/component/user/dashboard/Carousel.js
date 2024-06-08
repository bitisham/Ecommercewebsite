import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data, title }) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <div className="font-extrabold text-base text-sky-800"> {title}</div>
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <div
              className=" flex justify-center"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "250px",
                minWidth: "250px",
              }}
            >
              <img
                src={item.image}
                alt="no"
                className="mx-auto w-[250px] h-[250x]" // Apply mx-auto class to center the image horizontally
                // Set max height and width for the image
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
