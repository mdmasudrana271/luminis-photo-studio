import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2022 All rights reserved</span>
          <a rel="noopener noreferrer" href="#">
            <span>Privacy policy</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Terms of service</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
