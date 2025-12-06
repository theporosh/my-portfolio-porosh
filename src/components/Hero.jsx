import React from 'react';
import profileImg from '../assets/Scan.jpg'

const Hero = () => {
    return (
        <section id="home" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* image */}
                <div className="flex justify-center md:justify-start">
                    {/* Placeholder image used as the original local image is missing */}
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                    />
                </div>

                {/* intro */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">
                        Hi, I am <span className="text-blue-400">Mohammad Mahabubul Hoque Porosh</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        Frontend Web Developer — Building responsive, accessible, and
                        performant web apps with React, Next.js, Tailwind CSS, Firebase, Node.js & MongoDB.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        {/* CV Download - placeholder link */}
                        <a href="/public/Resume Porosh (1).pdf" download
                        className="px-5 py-3 bg-blue-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
                            <span>Download CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                            </svg>
                        </a>

                        <a href="https://github.com/theporosh" target="_blank" className="p-3 bg-gray-900 rounded hover:bg-gray-800 transition" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.3-.8.3-.8-.9-.1-1.8-.5-2.3-1.2-.5-.7-.7-1.6-.7-2.5 0-2 .8-3.4 2-4.4-.2-.5-.2-1.2-.2-1.7 0-.7.2-1.2.5-1.7 0 0 1.3-.4 4.3 1.6 1.2-.3 2.4-.5 3.6-.5s2.4.2 3.6.5c3-2 4.3-1.6 4.3-1.6.3.5.5 1 .5 1.7 0 .6-.1 1.2-.3 1.7 1.2 1 2 2.4 2 4.4 0 .9-.3 1.8-.7 2.5-.6.7-1.3 1.1-2.3 1.2 0 0-.7.9.3.8 0 0 .6-1.1 1.7-1.2 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.6 0 0-.7 2.3-4 1.6v2c0 .3.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/mohammad-mahabubul-hoque-porosh/" target="_blank" className="p-3 bg-gray-900 rounded hover:bg-gray-800 transition" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.9-2.2 4-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.7c0-1.8-.1-4.2-2.7-4.2-2.7 0-3.1 2-3.1 4V24h-4V8z" />
                            </svg>
                        </a>

                        <a href="https://mail.google.com/mail/u/0/#inbox" className="p-3 bg-gray-900 rounded hover:bg-gray-800 transition" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
