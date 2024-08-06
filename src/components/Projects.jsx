import React from 'react';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A Hospital Management System (HMS) is a comprehensive software solution designed to streamline administrative and clinical operations, improving efficiency, patient care, and resource management within a hospital.',
    image: 'project1.jpg',
    link: 'https://link-to-project-one.com'
  },
  {
    title: 'E-commerce Project',
    description: 'The **E-commerce project** using the **MERN stack** combines **MongoDB**, **Express.js** for server-side functionality, **React** for dynamic user interfaces, and **Node.js** for backend logic, creating online shopping platform.',
    image: 'project2.webp',
    link: 'https://link-to-project-two.com'
  },
  {
    title: 'Pintrest Clone',
    description: 'The **Pinterest Clone** is a web application replicating Pinterest’s features, including pin boards, image uploads, and user profiles. It allows users to create boards, save and organize pins, and browse a feed of content. The project uses technologies like **Express.js**, **Node.js**, **MongoDB** for a Pinterest-project.',
    image: 'pintrestClone.jpg',
    link: 'https://link-to-project-three.com'
  },
  {
    title: 'Dog Care',
    description: "**Dog Care** project offers a platform for managing dog vet visits, tracking health metrics, and accessing training resources. It connects dog owners for support, shares advice, and provides emergency contact information. I want to improve the quality of life for dogs.",
    image: 'dogCare.jpg',
    link: 'https://link-to-project-one.com'
  },
  {
    title: 'E-examination',
    description: '**E-examination** is an online assessment system that enables digital creation, administration, and grading of exams. It supports various question types, provides instant feedback, and streamlines the evaluation process, enhancing accessibility and efficiency.',
    image: 'eExamination.jpg',
    link: 'https://link-to-project-two.com'
  },
  {
    title: 'Pharma Project',
    description: 'The **Pharma Project** involves creating a digital platform for managing pharmaceutical operations, including drug inventory, prescriptions, and patient records. It facilitates streamlined drug distribution, regulatory compliance, and enhances patient care through efficient, integrated management solutions.',
    image: 'pharmaProject.jpg',
    link: 'https://link-to-project-three.com'
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-10 lg:px-20">
      <div className="container mx-auto px-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center">Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-5">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden items-center text-center transition-transform transform hover:scale-105 h-74">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-30 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    View Project
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
