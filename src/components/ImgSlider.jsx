import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>

      <div>
        <h3>2</h3>
      </div>

      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export default ImgSlider;