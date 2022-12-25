import React from "react";
import Lottie from "lottie-react";
import animation from '../../contact.json'

const Contact = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
        <div className="flex flex-col justify-between">
          <Lottie className="md:w-72" animationData={animation} loop={true} />
        </div>
        <form
          action="https://getform.io/f/923d35e5-4392-4fdd-8a69-533de3d72d65" method="POST" 
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label for="name" className="text-sm">
              Name
            </label>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" ></input>
          </div>
          <div>
            <label for="email" className="text-sm">
              Email
            </label>
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" ></input>
          </div>
          <div>
            <label for="message" className="text-sm">
              Message
            </label>
            <textarea name="message" className="textarea input-bordered w-full" placeholder="Message"></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-green-300 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
