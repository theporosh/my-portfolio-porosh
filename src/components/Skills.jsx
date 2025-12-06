import React from 'react';

const Skills = () => {
    const languages = [
        { name: 'JavaScript', percentage: 90, color: 'from-blue-500 to-pink-500', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ];

    const frontend = [
        { name: 'HTML5', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React', percentage: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Bootstrap', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ];

    const backend = [
        { name: 'Node.js', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true }
    ];

    const database = [
        { name: 'MongoDB', percentage: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ];

    const tools = [
        { name: 'Git', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ];

    const deployment = [
        { name: 'Vercel', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true }
    ];

    const frameworks = [
        { name: 'Next.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true }
    ];

    const SkillCategory = ({ title, items }) => (
        <div className="bg-[#111726] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
            {items.map((skill, index) => (
                <div key={index} className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={skill.icon} className={`w-6 ${skill.invert ? 'invert' : ''}`} alt={skill.name} />
                        <span className="font-medium">{skill.name}</span>
                        <span className="ml-auto text-sm text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full">
                        <div
                            className="h-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section id="skills" className="py-20 bg-[#0b0f19] text-gray-300">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-blue-400">Technical Skills</h2>
                <p className="mt-2 text-center text-gray-400 max-w-2xl mx-auto mb-10">
                    I build responsive user interfaces, RESTful APIs, and full-stack applications.
                    Comfortable with version control and collaborative workflows.
                </p>
                <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <SkillCategory title="Languages" items={languages} />
                    <SkillCategory title="Frontend" items={frontend} />
                    <SkillCategory title="Backend" items={backend} />
                    <SkillCategory title="Database" items={database} />
                    <SkillCategory title="Tools" items={tools} />
                    <SkillCategory title="Deployment" items={deployment} />
                    <SkillCategory title="Frameworks" items={frameworks} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
