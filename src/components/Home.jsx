import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="bg-gradient-to-r flex flex-col items-center px-44 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl mx-auto">
                {/* Text Content */}
                <div className="md:w-1/2 md:pr-12 text-center md:text-left">
                    <h2 className="text-xl md:text-3xl mb-6 text-gray-800">
                        Welcome to My Portfolio
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                        Hi, I'm Atmesh Pandey, a
                        <ReactTyped
                            className="text-blue-500 px-4"
                            strings={["Web Developer", "UI/UX Designer", "Programmer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
                        {/* I have 3+ years of experience in the MERN stack and Java Spring Boot with Hibernate. 
                        I excel in creating scalable web applications and managing databases. Notable projects include an e-commerce 
                        platform and an insurance management system. My skills ensure high-quality, user-friendly solutions and enhanced 
                        operational efficiency. */}
                        With 3+ years of experience in the MERN stack and Java Spring Boot with Hibernate, I specialize in developing scalable web
                        applications and managing databases. I have successfully completed projects such as an e-commerce platform and an insurance
                        management system. My expertise ensures the delivery of high-quality, user-friendly solutions that improve operational efficiency.
                        I am adept at both front-end and back-end development, providing robust performance and seamless user experiences.
                    </p>
                    <Link to="/learnMore"><button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                        Learn More
                    </button>
                    </Link>
                    <div className="flex flex-col md:flex-row mt-8 md:space-x-6 space-y-4 md:space-y-0">
                        <span className="text-gray-800 font-semibold">Available on:</span>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/atmesh-pandey/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition duration-300">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://www.instagram.com/atmesh.pandey/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition duration-300">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://github.com/atmesh-pandey" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition duration-300">
                                <FaGithub size={30} />
                            </a>
                            <a href="https://x.com/atmesh2020" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
                                <FaTwitter size={30} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end relative">
                    <div
                        className="rounded-sm shadow-lg w-[28rem] md:h-[30.125rem] bg-cover bg-start bg-gray-200"
                        style={{ backgroundImage: 'url(../public/one.png)' }}
                    >
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;
