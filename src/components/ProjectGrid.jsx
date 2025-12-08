import React from 'react';
import ProjectCard from './ProjectCard'; 



const projectData = [
    {
        title: "SkillSwap — Local skill-sharing platform",
        description: "An interactive platform for individuals to offer, learn, and trade skills within their local area. Whether it’s guitar lessons, language exchange, coding help, or yoga training — users can browse listings, rate experiences, and connect with local skill providers.",
        liveDemoLink: "https://b12-a9-firesheild-theporosh-sk.web.app",
        codeLink: "https://github.com/theporosh/b12-a9-firesheild-theporosh-ct-sunflower-skillswap.git",
        imageUrl: "https://i.ibb.co.com/cXrh9kx8/skillswap.jpg", 
        techStack: "MERN"
    },
    {
        title: "Course Manager — Next.js app is a simple platform to browse, view, and manage online courses",
        description: "Course Manager Next.js is a simple platform to browse, view, and manage online courses. Authenticated users can add their own courses, while the app demonstrates Next.js, MongoDB, Firebase Auth, and responsive Tailwind CSS design with dynamic routing and user-friendly features.This project serves both as a learning tool for developers and as a functional course management system that can be extended for real-world applications.",
        liveDemoLink: "https://coursem.netlify.app/",
        codeLink: "https://github.com/theporosh/course-manager-next-app.git",
        imageUrl: "https://i.ibb.co.com/RpTpYhqW/coursemanager.jpg", 
        techStack: "Next.js"
    },
    {
        title: "StudyMate — web platform students connect and collaborate for better learning outcomes",
        description: "StudyMate is a MERN Stack web platform designed to help students connect and collaborate for better learning outcomes.It enables users to find study partners based on subjects, learning preferences, or nearby locations, making education more interactive, engaging, and goal-oriented.",
        liveDemoLink: "https://b12-a10-poroshstudymate-client.web.app",
        codeLink: "https://github.com/theporosh/b12-a10-theporosh-studymate-client.git",
        imageUrl: "https://i.ibb.co.com/WWbBGsmq/studymate.jpg", 
        techStack: "MERN"
    }
];

const ProjectGrid = () => {
    return (
       
        <div id="projects" className="bg-gray-900 min-h-screen p-8 sm:p-12">
            <h1 className="text-3xl font-extrabold text-white mb-8 text-center">Selected Projects</h1>

          
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        liveDemoLink={project.liveDemoLink}
                        codeLink={project.codeLink}
                        imageUrl={project.imageUrl}
                        techStack={project.techStack}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGrid;