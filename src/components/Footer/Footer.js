import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 justify-around bg-base-300 text-base-content">
      <div>
        <span className="footer-title">Services</span>
        <p>photography</p>
        <p>Design</p>
        <p>Marketing</p>
        <p>Advertisement</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/blog" className="link link-hover">Blog</Link>
        <Link to="/services" className="link link-hover">Services</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link to="https://www.facebook.com/mdabdullamasud.rana/">
            <FaFacebook className="text-blue-500"></FaFacebook>
          </Link>
          <Link to="https://github.com/mdmasudrana271">
            <FaGithub></FaGithub>
          </Link>
          <Link to="https://twitter.com/mdmasud83732961">
            <FaTwitter className="text-blue-500"></FaTwitter>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
