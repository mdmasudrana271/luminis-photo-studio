import React from "react";

import img1 from "../../.././assets/image/full-shot-woman-with-baggage_23-2149272125.webp";
import img2 from "../../.././assets/image/tourism-vacation-satisfied-male-tourist-showing-passport-with-tickets-thumb-up-recommending-travel-company-standing-yellow-background_1258-40965.webp";
import img3 from "../../.././assets/image/tourist-holding-something_1368-7046.webp";
import img4 from "../../.././assets/image/young-african-american-girl-teen-student-denim-clothes-backpack-hold-pass-isolated-blue-wall_365776-136.webp";
const Banner = () => {
  return (
    <div className="carousel w-10/12 mx-auto h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" alt=""/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
