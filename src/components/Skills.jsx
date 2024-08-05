import React from 'react';

const skills = [
    { name: 'Java', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-java-22-225997.png?f=webp&w=256' },
    { name: 'JavaScript', logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=256' },
    { name: 'Tailwind.css', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=256' },
    { name: 'MongoDB', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mongodb-3629020-3030245.png?f=webp&w=256' },
    { name: 'Express.js', logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
    { name: 'React.js', logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/react-11796964-9632875.png?f=webp&w=256' },
    { name: 'Node.js', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=webp&w=256' },
    { name: 'SpringBoot', logo: 'https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png' },
    { name: 'Hibernate', logo: 'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg' },
    { name: 'MySQL', logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/mysql-2749310-2284700.png?f=webp&w=256' },
    { name: 'Git', logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/git-2752184-2285001.png?f=webp&w=256' },
    { name: 'GitHub', logo: 'https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e' },
    { name: 'AdobeXD', logo: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/adobe-adobe-xd-2522531-2132719.png?f=webp&w=256' },
    { name: 'Figma', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center">Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {skills.map(skill => (
                        <div key={skill.name} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 flex justify-center">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                                <div className="bg-blue-100 p-4 rounded-full mb-4 flex items-center justify-center">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
                                    />
                                </div>
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
