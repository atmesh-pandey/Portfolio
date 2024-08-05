// src/components/Footer.jsx
import React from 'react';
import '../index.css'; // Ensure this path is correct
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10 px-20">
        <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between">

          {/* Footer Left Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-sm text-white">© 2024 Atmesh Pandey. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0 text-white">
            <a
              href="https://www.linkedin.com/in/atmesh-pandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/atmesh.pandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition-transform transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://github.com/atmesh-pandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition-transform transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/atmesh2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition-transform transform hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
        <div className="flex justify-center text-center w-full">
          <div className="flex items-center space-x-2">
            made with&nbsp;
            <img src="../public/heart.png" alt="Heart icon" className="w-8 h-8" />
            &nbsp;by&nbsp;
            <span className="custom-font">
              <a
                href="https://www.instagram.com/atmesh.pandey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atmesh Pandey.
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
