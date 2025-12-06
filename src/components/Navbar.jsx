import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-blue-500">Porosh</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                    <li><a href="#home" className="hover:text-blue-400 duration-300 flex items-center gap-2">🏠 Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400 duration-300 flex items-center gap-2">👤 About</a></li>
                    <li><a href="#skills" className="hover:text-blue-400 duration-300 flex items-center gap-2">⚡ Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 duration-300 flex items-center gap-2"> 📦 Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 duration-300 flex items-center gap-2">✉️ Contact</a></li>
                </ul>

                {/* Right icons (desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="https://github.com/theporosh" target="_blank" aria-label="GitHub"
                        className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">
                        {/* GitHub */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.3-.8.3-.8-.9-.1-1.8-.5-2.3-1.2-.5-.7-.7-1.6-.7-2.5 0-2 .8-3.4 2-4.4-.2-.5-.2-1.2-.2-1.7 0-.7.2-1.2.5-1.7 0 0 1.3-.4 4.3 1.6 1.2-.3 2.4-.5 3.6-.5s2.4.2 3.6.5c3-2 4.3-1.6 4.3-1.6.3.5.5 1 .5 1.7 0 .6-.1 1.2-.3 1.7 1.2 1 2 2.4 2 4.4 0 .9-.3 1.8-.7 2.5-.6.7-1.3 1.1-2.3 1.2 0 0-.7.9.3.8 0 0 .6-1.1 1.7-1.2 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.6 0 0-.7 2.3-4 1.6v2c0 .3.2.8.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-mahabubul-hoque-porosh/" target="_blank" aria-label="LinkedIn"
                        className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">
                        {/* LinkedIn */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.9-2.2 4-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.7c0-1.8-.1-4.2-2.7-4.2-2.7 0-3.1 2-3.1 4V24h-4V8z" />
                        </svg>
                    </a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" aria-label="Email"
                        className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">
                        {/* Email */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5" />
                        </svg>
                    </a>
                </div>

                {/* Mobile button */}
                <button
                    id="menuBtn"
                    className="md:hidden text-2xl text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobileMenu" className="md:hidden border-t border-gray-800 bg-black px-6 py-4">
                    <a href="#home" className="block py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>🏠 Home</a>
                    <a href="#about" className="block py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>👤 About</a>
                    <a href="#skills" className="block py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>⚡ Skills</a>
                    <a href="#projects" className="block py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>📦 Projects</a>
                    <a href="#contact" className="block py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>✉️ Contact</a>
                    <div className="mt-3 flex gap-3">
                        <a href="https://github.com/theporosh" target="_blank" className="p-2 bg-gray-900 rounded text-gray-300 hover:bg-gray-800">GitHub</a>
                        <a href="https://www.linkedin.com/in/mohammad-mahabubul-hoque-porosh/" target="_blank" className="p-2 bg-gray-900 rounded text-gray-300 hover:bg-gray-800">LinkedIn</a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" className="p-2 bg-gray-900 rounded text-gray-300 hover:bg-gray-800">Email</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
