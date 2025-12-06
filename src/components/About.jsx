import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">About Me</h2>
                <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 relative">
                        <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Hi, I’m <span className="text-blue-400 font-semibold">Mohammad Mahabubul Hoque Porosh</span> — a passionate and dedicated Frontend & MERN Stack Developer. I enjoy transforming ideas into clean, responsive, and user-friendly digital experiences. With hands-on project work and continuous learning, I’ve built a strong foundation in both frontend and backend technologies.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Skilled in developing modern web interfaces using HTML5, CSS3, Tailwind CSS, JavaScript, React, and React Router.
                            Experienced with backend development using Node.js, Express.js, MongoDB. Familiar with Next.js, API integration, Firebase Authentication & hosting. 
                        </p>
                        <div className="absolute right-6 bottom-6 text-gray-700 text-6xl select-none">&lt;/&gt;</div>
                    </div>


                    <div className="space-y-6">
                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:bg-gray-800 transition">
                            <div className="text-blue-400 text-3xl">📦</div>
                            <div>
                                <h4 className="font-semibold text-lg">Modern UI/UX</h4>
                                <p className="text-gray-400 text-sm">Crafting pixel-perfect, user‑friendly designs</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:bg-gray-800 transition">
                            <div className="text-yellow-400 text-3xl">⚡</div>
                            <div>
                                <h4 className="font-semibold text-lg">Performance</h4>
                                <p className="text-gray-400 text-sm">Optimized for speed & SEO</p>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center gap-4 hover:bg-gray-800 transition">
                            <div className="text-green-400 text-3xl">💻</div>
                            <div>
                                <h4 className="font-semibold text-lg">Clean Code</h4>
                                <p className="text-gray-400 text-sm">Scalable & maintainable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
