import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-20" id="about">
      <div className="relative flex items-center justify-center mb-8 lg:mb-10">
        <h1 className="absolute text-2xl md:text-3xl font-bold uppercase mb-4 lg:mb-10">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-5/12 mb-6 lg:mb-0 flex justify-center">
          <img
            className="h-[35rem] w-[33rem] rounded-full object-cover object-top"
            src="myImg2.jpg"
            alt="About"
          />
        </div>
        <div className="w-full lg:w-7/12 lg:pl-8">
          <h3 className="mb-4 text-xl md:text-2xl font-semibold">Web Developer & UI/UX Designer</h3>
          <p className="text-base md:text-lg text-gray-700 mb-6">
          I have over 3 years of experience in the MERN stack and Java Spring Boot. As a UI/UX designer, I specialize in developing scalable web applications and delivering user-friendly, efficient solutions that enhance operational performance and user satisfaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-base md:text-lg">
            <div className="py-2">
              <h6 className="font-bold">Name:</h6> <span className="text-gray-700">Atmesh Pandey</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Birthday:</h6> <span className="text-gray-700">12<sup>th</sup> May 2001</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Degree:</h6> <span className="text-gray-700">B-tech in CSE</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Experience:</h6> <span className="text-gray-700">3+ Years</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Phone:</h6> <span className="text-gray-700">+916205588233</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Email:</h6> <span className="text-gray-700">atmesh2020@gmail.com</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Address:</h6> <span className="text-gray-700">#63/2, 4th main, 11th cross, Kaveripura, Kamakshipalya(Bengalore), 560079.</span>
            </div>
            <div className="py-2">
              <h6 className="font-bold">Freelance:</h6> <span className="text-gray-700">Available</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="../public/AtmeshResume.pdf" className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 ease-in-out">Get My Resume</a>
            <a href="/learnMore" className="bg-white-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md border border-gray-800 hover:bg-gray-100 transition-colors duration-300 ease-in-out">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
