import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-[#0b0f19] text-gray-300">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Educational Qualification</h2>
                <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

                <div className="bg-[#111726] p-6 rounded-xl shadow-lg max-w-3xl mx-auto hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-400">Bachelor of Science in Computer Science & Engineering</h3>
                    <p className="text-gray-400 mb-2">National University of Bangladesh, Gazipur, Dhaka</p>
                    <p className="text-gray-400 font-medium">Year of Passing: 2013</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
