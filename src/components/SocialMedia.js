import React from "react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container mx-auto text-center flex gap-5 justify-center items-center mt-5 -mb-6 text-white ">
        <a href="#">
          <div className="fa-instagram icons text-2xl hover:text-pink-600 transition-all duration-300 ml-4">
            <FaInstagram />
          </div>
        </a>
        <a href="#">
          <div className="fa-linkedin icons text-2xl hover:text-pink-600 transition-all duration-300 ml-4">
            <FaLinkedin />
          </div>
        </a>
        <a href="#">
          <div className="fa-github icons text-2xl hover:text-pink-600 transition-all duration-300 ml-4">
            <FaGithub />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
