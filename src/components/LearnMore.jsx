import React from 'react';
import Navbar from './Navbar';

const LearnMore = () => {
  return (
    <>
    <Navbar />
    <section id='learnMore' className="py-12 bg-gray-100 scrollbar-hide">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-24 before:h-1 before:bg-blue-600 before:rounded-full before:-z-10">
          My 3+ Years Journey in Full Stack Development
        </h2>
        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
          Over the past three years, I've cultivated a robust skill set in full stack development, focusing on a range of technologies and methodologies that have shaped my expertise.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-3xl mb-4 text-gray-800">
              Full Stack Development
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              My journey began with a strong foundation in both front-end and back-end development. I've designed and implemented interactive user interfaces using modern JavaScript frameworks like React.js, ensuring responsive and user-friendly experiences. On the back-end, I leveraged server-side technologies to build scalable and efficient systems, integrating seamlessly with various databases and APIs.
            </p>
          </div>

          <div>
            <h3 className="text-3xl mb-4 text-gray-800">
              Spring Boot & Hibernate
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Spring Boot has been a cornerstone of my back-end development experience. I have utilized Spring Boot to create robust and scalable microservices with ease, benefiting from its built-in features for dependency management and configuration. Hibernate, as an Object-Relational Mapping (ORM) tool, has enabled me to streamline database interactions, ensuring efficient and reliable data management. Together, these tools have allowed me to develop high-performance applications with clean and maintainable code.
            </p>
          </div>

          <div>
            <h3 className="text-3xl mb-4 text-gray-800">
              Postman
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              In the realm of API development and testing, Postman has been an invaluable tool. I have used it extensively to design, test, and debug RESTful APIs, ensuring that they meet the required specifications and function correctly across different scenarios. Postman's capabilities have enabled me to automate tests and streamline the development workflow, improving overall efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-3xl mb-4 text-gray-800">
              MySQL & MongoDB
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              My experience with databases spans both relational and NoSQL systems. With MySQL, I've managed structured data, optimized queries, and designed schemas to support complex applications. MongoDB, on the other hand, has been essential for handling unstructured data and scaling applications horizontally. This dual expertise has allowed me to choose the right database solution based on the specific needs of each project.
            </p>
          </div>

          <div>
            <h3 className="text-3xl mb-4 text-gray-800">
              API Integration
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Integrating APIs has been a crucial part of my development work, enabling me to connect disparate systems and services. I have developed and consumed APIs to facilitate data exchange and functionality across different platforms, ensuring seamless interoperability and enhancing the overall user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LearnMore;
