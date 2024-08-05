import React from 'react';

const Resume = () => {
  return (
    <div id='resume' className="container mx-auto py-5 px-20">
      <div className="relative flex flex-col items-center mb-10">
        <h1 className="text-3xl font-bold uppercase">Education & Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        {/* Education Section */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h3 className="mb-4 text-xl md:text-2xl font-semibold">My Education</h3>
          <div className="relative border-l-2 border-blue-500 pl-4 space-y-6 custom-line">
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">B-tech In CSE</h5>
              <p className="mb-2 text-gray-600"><strong>RGPV University(Bhopal)</strong> | <small>2018 - 2022</small></p>
              <p className="text-gray-700">During my B-Tech, I developed strong technical skills and engaged 
                in innovative projects that sparked a deep passion for web development and UI/UX design. 
                This journey allowed me to explore various technologies and methodologies, providing a 
                solid foundation and practical experience. These experiences have prepared me well for 
                a successful career in the technology sector.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">12<sup>th</sup></h5>
              <p className="mb-2 text-gray-600"><strong>BSEB(Bihar School Examination Board)</strong> | <small>2016 - 2018</small></p>
              <p className="text-gray-700">Completed 12th grade in Science from BSEB, excelling in subjects like Physics, Chemistry, and Mathematics, and developing a strong foundation in analytical thinking and problem-solving skills.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">10<sup>th</sup></h5>
              <p className="mb-2 text-gray-600"><strong>BSEB(Bihar School Examination Board)</strong> | <small>2015 - 2016</small></p>
              <p className="text-gray-700">Completed 10th grade from BSEB, achieving strong academic performance and building a solid foundation in core subjects, which laid the groundwork for my future studies in science and technology.</p>
            </div>
            {/* Add more education entries as needed */}
          </div>
        </div>
        {/* Vertical Line */}
        <div className="hidden md:block relative w-1 mx-4 bg-primary vertical-line-animation"></div>
        {/* Experience Section */}
        <div className="w-full md:w-1/2 px-4">
          <h3 className="mb-4 text-xl md:text-2xl font-semibold">My Experience</h3>
          <div className="relative border-l-2 border-blue-500 pl-4 space-y-6 custom-line">
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">Full Stack Developer</h5>
              <p className="mb-2 text-gray-600"><strong> Company</strong> | <small>2023 - 2024 to(Present)</small></p>
              <p className="text-gray-700">I’m working with **Spring Boot** for creating efficient Java applications, **Hibernate** for ORM to map Java objects to database tables, and **MySQL** for data management. I use **Postman** to test APIs and **React** to build dynamic, user-friendly web interfaces.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">React Developer</h5>
              <p className="mb-2 text-gray-600"><strong>Maitretech Solution</strong> | <small>2022 - 2023</small></p>
              <p className="text-gray-700">At this company, I worked extensively with React, developing dynamic and responsive rich user interfaces. I built reusable components, managed state effectively, and ensured seamless integration with back-end services, enhancing the overall user experience.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <h5 className="text-xl font-semibold mb-1 text-gray-800">Web Developer/Designer</h5>
              <p className="mb-2 text-gray-600"><strong>EVD Technology</strong> | <small>2022 - 2022</small></p>
              <p className="text-gray-700">I joined the company as an intern designer/developer, focusing on HTML, CSS, JavaScript, and Tailwind CSS. I contributed to various projects, enhancing my skills in front-end development and responsive design.</p>
            </div>
            {/* Add more experience entries as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
