import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
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
        <img src="images/s1.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images/s2.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images/s3.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="images/s4.jpg" alt="" />
      </Wrap>{" "}
      <Wrap>
        <img src="images/s5.jpg" alt="" />
      </Wrap>{" "}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 63px;
  padding: 0 calc(3.5vw + 5px);

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  .slick-list {
    overflow: visible;
  }

  li.slick-active button::before {
    color: rgb(255, 255, 255);
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /39%) 0px 26px 30px -10px,
      rgb(0 0 0 /43%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgb(279, 249, 249, 0.8);
    }
  }
`;
