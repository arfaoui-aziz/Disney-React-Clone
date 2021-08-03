import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="src/assets/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="src/assets/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="src/assets/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="src/assets/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }

  &:hover > button {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
      margin-top: 15px;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  a {
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 0.3s;
    }
  }
`;

export default ImgSlider;
