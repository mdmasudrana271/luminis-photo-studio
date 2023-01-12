import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const { title, img, description, _id, price } = item;

  return (
    <div className="card card-compact w-full shadow-xl bg-gradient-to-b from-blue-500 to-transparent">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className=" cursor-pointer" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 70) + "....."
            : description}
        </p>
        <p className="font-bold text-start">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link  to={`/ServiceDetails/${_id}`}
            class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600/[.9] transition duration-300 ease-out border-2 border-blue-600/[.9] rounded-full shadow-md group"
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
              Details
            </span>
            <span class="relative invisible">Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
