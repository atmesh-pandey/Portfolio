import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   gsap.from(".navbar-item", { duration: 1.5, y: -30, opacity: 0, stagger: 0.2 });
  // }, []);

  // useEffect(() => {
  //   if (isOpen) {
  //     gsap.to(".mobile-menu a", { duration: 0.5, x: 0, opacity: 1, stagger: 0.1 });
  //   } else {
  //     gsap.to(".mobile-menu a", { duration: 0.5, x: -50, opacity: 0, stagger: 0.1 });
  //   }
  // }, [isOpen]);

  return (
    <nav className="bg-gray-800 p-4 px-28">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-social-248-96763.png?f=webp&w=256" alt="Logo" className="h-8 w-8 mr-2" style={{ filter: 'invert(100%) brightness(0) saturate(100%)' }} />
          <a href='/' className="text-white text-xl font-bold uppercase navbar-item">Atmesh Pandey</a>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-white hover:underline navbar-item">Home</a>
          <a href="#skills" className="hover:text-white hover:underline navbar-item">Skills</a>
          <a href="#projects" className="hover:text-white hover:underline navbar-item">Projects</a>
          <a href="#resume" className="hover:text-white hover:underline navbar-item">Experience</a>
          <a href="#about" className="hover:text-white hover:underline navbar-item">About</a>
          <a href="#contact" className="hover:text-white hover:underline navbar-item">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`md:hidden bg-gray-800 mt-2 rounded-lg mobile-menu ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">Home</a>
        <a href="#skills" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">Skills</a>
        <a href="#projects" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">Projects</a>
        <a href="#resume" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">Experience</a>
        <a href="#about" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">About</a>
        <a href="#contact" className="block px-4 py-2 text-gray-300 hover:text-white hover:underline">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
