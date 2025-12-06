import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'SkillSwap — Local skill-sharing platform',
            description: 'A full-stack platform to offer, learn and trade skills locally. Built with React, Node.js, Express & MongoDB.',
            tags: 'React · Node · MongoDB',
            link: '#'
        },
        {
            title: 'Course Manager — Next.js app',
            description: 'Course management UI with authentication, dynamic routes, and Firebase backend.',
            tags: 'Next.js · Firebase',
            link: '#'
        },
        {
            title: 'Portfolio UI — Responsive design',
            description: 'A polished, responsive portfolio built with Tailwind CSS and accessible design principles.',
            tags: 'Tailwind · HTML',
            link: '#'
        },
        {
            title: 'Realtime Chat — Firebase',
            description: 'Simple realtime chat app using Firebase Realtime Database and Authentication.',
            tags: 'Firebase · JS',
            link: '#'
        },
        {
            title: 'E-commerce UI — React',
            description: 'Product listing, cart flow and checkout UI with responsive layout and accessibility considerations.',
            tags: 'React · Tailwind',
            link: '#'
        },
        {
            title: 'Task Manager API — Node.js',
            description: 'RESTful API with authentication, CRUD operations and tests using Node.js & Express.',
            tags: 'Node · Express',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Selected Projects</h2>
                <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <article key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                            <div className="h-44 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center p-4 text-center">
                                <h3 className="text-xl font-semibold">{project.title.split('—')[0]}</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-gray-400 font-mono">{project.tags}</div>
                                    <a href={project.link} className="text-blue-400 font-medium hover:underline text-sm">View</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
