import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "./db/tagitems.json";

export default function TagFilter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: false,
    infinite: false,
    variableWidth: true,
    sliseToShow: 9,
    slidesToScroll: 4,
    autoplay: false,
    arrows: true,
    nextArrow: (
      <ArrowContainer>
        <span>
          <svg viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
          </svg>
        </span>
      </ArrowContainer>
    ),
    prevArrow: (
      <ArrowContainer>
        <span>
          <svg viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </ArrowContainer>
    ),
  };

  return (
    <TagFilterWrapper>
      <div className="tagList">
        <TagSlider
          isBefore={currentSlide >= 1}
          {...settings}
          beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
        >
          {dummy.map((list, index) => {
            return (
              <TagFiterItem
                key={index}
                title={list.title}
                src={list.src}
                color={list.color}
              ></TagFiterItem>
            );
          })}
        </TagSlider>
      </div>
    </TagFilterWrapper>
  );
}

const ArrowContainer = styled.button`
  border-radius: 9999px;
  width: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  z-index: 10;
  span {
    display: flex;
    justify-content: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const TagFiterItem = (props) => {
  return (
    <ItemWrapper bgColor={props.color}>
      {props.title}
      <img src={props.src} alt="tagImage"></img>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.button`
  background: ${(props) => props.bgColor};
  position: relative;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;

  img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;
const TagFilterWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;
const TagSlider = styled(Slider)`
  width: 100%;
  margin-bottom: 0;

  // .slick-track {
  //   width: 2968px !important;
  // }
  .slick-list::after {
    content: "";
    display: block;
    z-index: 1;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 50%);
    position: absolute;
    height: 32px;
    width: 80px;
    top: 0;
    right: 0;
  }
  .slick-list::before {
    content: "";
    display: block;
    z-index: 1;
    //background: linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff 50%);
    background: ${(props) =>
      !props.isBefore
        ? ""
        : "linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff 50%)"};
    position: absolute;
    height: 32px;
    width: 80px;
    top: 0;
  }

  .slick-slide {
    outline: none;
    float: left;
    height: 100%;
    min-height: 1px;
    width: auto !important;
  }

  .slick-prev {
    display: ${(props) => (props.isBefore ? "block" : "none !important")};
    left: 0;
    background: #fff;
  }
  .slick-next {
    right: 0;
    background: #fff;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;
