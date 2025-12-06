import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-blue-500">Porosh</h1>
                </div>
                <div className="text-gray-400 text-sm">&copy; 2025 Mohammad Mahabubul Hoque Porosh</div>
                <div className="flex gap-3">
                    <a href="https://github.com/theporosh" target="_blank" className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/mohammad-mahabubul-hoque-porosh/" target="_blank" className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">LinkedIn</a>
                    <a href="https://mail.google.com/mail/u/0/#inbox" className="p-2 bg-gray-900 rounded hover:bg-gray-800 transition">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
