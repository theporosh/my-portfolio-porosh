import React from 'react';


const ProjectCard = ({ title, description, liveDemoLink, codeLink, imageUrl, techStack }) => {
    return (
       
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition duration-300 hover:shadow-2xl hover:scale-[1.02]">

          
            <div className="relative h-48 sm:h-56 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {techStack}
                </span>
            </div>

           
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

               

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {description}
                </p>

            
                <div className="flex space-x-4 mt-4">
                    <a
                        href={liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-green-400 hover:text-green-300 transition duration-150"
                    >
                        <span className="mr-2">🔗</span> Live Demo
                    </a>
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-gray-500 hover:text-gray-400 transition duration-150"
                    >
                        <span className="mr-2">📄</span> Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;