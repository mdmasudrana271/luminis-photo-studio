import React from "react";


const Banner = () => {
  return (
    <div className="w-full mx-auto h-[91vh] bg-cover bg-right md:bg-center bg-banner-bg  md:opacity-90 opacity-100">
      <div className="md:mt-52 mt-40 md:ml-15 ml-5  absolute">
      <h2 className="lg:text-7xl md:text-4xl text-3xl mb-2 lg:text-blue-600/[.9] text-white font-semibold">Welcome to <br /> Lumins Photo Studio</h2>
      <p className="lg:text-3xl  md:text-2xl text-lg text-blue-500 lg:text-slate-400 hover:text-white font-semibold italic">Your Personal Photographer</p>
      </div>
    </div>
  );
};

export default Banner;
