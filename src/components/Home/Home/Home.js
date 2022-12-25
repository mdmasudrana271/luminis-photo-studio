import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Contact from "../../Contact/Contact";
import Reviews from "../../Reviews/Reviews";
import About from "../About/About";
import Banner from "../Banner/Banner";
import HireMe from "../HireMe/HireMe";
import Works from "../Works/Works";

const Home = () => {

  useTitle('LUMINIS PHOTO STUDIO')

  return (
    <div>
      <div className="my-10">
        <Banner></Banner>
      </div>
      <div className="my-10">
        <h1 className="text-3xl text-center font-bold">
          Take a look at my works
        </h1>
        <Works></Works>
      </div>
      <div className="flex items-center justify-center">
      <Link to='/services'> <button className="btn btn-primary">See All</button></Link>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div className="py-20">
        <HireMe></HireMe>
      </div>
      <div className="py-20">
      <h1 className="text-5xl font-semibold text-center">Contact Me</h1>
        <Contact></Contact>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-semibold text-center">About Me</h1>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
