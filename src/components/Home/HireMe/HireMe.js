import React from "react";

const HireMe = () => {
  return (
    <section className="p-4  dark:text-gray-100 w-11/12 mx-auto">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img
          src="https://i.ibb.co/BV6f7Sh/smiley-woman-working.jpg"
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <h3 className="text-3xl font-bold">
            Hire me to capture your beautiful moments
          </h3>
          <p className="my-6 dark:text-gray-400">
            Amazingly, the ability to freeze and capture moments in time has
            become a mundane fact. Most people agree that photography is an art
            form. Only a select few possess the eye and instinct of a
            photographer. A sense of perspective and spatial awareness is always
            necessary. Those qualities also apply to website design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
