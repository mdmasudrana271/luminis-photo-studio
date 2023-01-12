import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Contact from "../../Contact/Contact";
import Reviews from "../../Reviews/Reviews";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import HireMe from "../HireMe/HireMe";
import Works from "../Works/Works";

const Home = () => {
  useTitle("LUMINIS PHOTO STUDIO");

  return (
    <div className="overflow-hidden">
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <div className="my-32">
        <h1 className="text-3xl mb-20 text-center font-bold">
          Take a look at my works
        </h1>
        <Works></Works>
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/services"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600/[.9] transition duration-300 ease-out border-2 border-blue-600/[.9] rounded-xl shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600/[.9] group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-blue-500/[.9] transition-all duration-300 transform group-hover:translate-x-full ease">
          See All
          </span>
          <span class="relative invisible">See All</span>
        </Link>
      </div>
      <div>
        <Gallary></Gallary>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div className="py-20">
        <HireMe></HireMe>
      </div>
      <div className="py-20">
        <h1 className="text-5xl text-blue-600/[.9] font-semibold text-center">Contact Me</h1>
        <Contact></Contact>
      </div>
      <div className="mt-20">
        <h1 className="text-5xl text-blue-600/[.9] font-semibold text-center">About Me</h1>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
