import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/myreviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2022 All rights reserved</span>
            <span>Privacy policy</span>
            <span>Terms of service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
