import React from "react";
import "./ImageSlider.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
function ImageSlider() {
  return (
    <div id="ImageSlider">
      <div className="sliderContainer">
        <BsFillArrowLeftSquareFill className="left-arrow" />
        <BsFillArrowRightSquareFill className="right-arrow" />
        <div className="slide-1 slide">
          <h2>explore,discover,travel</h2>
          <h1>
            travel arround <br /> the world
          </h1>
          <a href="#">discover tour</a>
        </div>
        <div className="slide-2 slide">
          <h2>explore,discover,travel</h2>
          <h1>
            travel arround <br /> the world
          </h1>
          <a href="#">discover tour</a>
        </div>
        <div className="slide-3 slide">
          <h2>explore,discover,travel</h2>
          <h1>
            travel arround <br /> the world
          </h1>
          <a href="#">discover tour</a>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
