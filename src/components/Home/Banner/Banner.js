import React from "react";
import Lottie from "lottie-react";
import animation from '../../../photo.json'
import img from "../../.././assets/image/tourist-holding-something_1368-7046.png"

// import img1 from "../../.././assets/image/full-shot-woman-with-baggage_23-2149272125.webp";
// import img2 from "../../.././assets/image/tourism-vacation-satisfied-male-tourist-showing-passport-with-tickets-thumb-up-recommending-travel-company-standing-yellow-background_1258-40965.webp";
// import img3 from "../../.././assets/image/tourist-holding-something_1368-7046.webp";
// import img4 from "../../.././assets/image/young-african-american-girl-teen-student-denim-clothes-backpack-hold-pass-isolated-blue-wall_365776-136.webp";


const Banner = () => {
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto">
      <img src={img} alt="" className="md:w-1/2" />
      <Lottie className="md:w-72" animationData={animation} loop={true} />
    </div>
  );
};

export default Banner;
