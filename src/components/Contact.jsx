import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert('Please fill required fields.');
            return;
        }

        const subject = 'Contact from portfolio';
        const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
        const mailto = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        window.location.href = mailto;
    };

    return (
        <section id="contact" className="py-20 bg-[#0b0f19] text-gray-300">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Contact Me</h2>
                <div className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Info Box */}
                    <div className="bg-[#111726] p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Let's Connect</h3>
                        <p className="mb-8 text-gray-400 leading-relaxed">
                            Have a project in mind or just want to say hi? I'm always open to discussing new ideas,
                            creative projects, or opportunities to work together.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🔗</div>
                                <div>
                                    <p className="font-semibold">LinkedIn</p>
                                    <a className="text-gray-400 text-sm hover:text-blue-400" href="https://www.linkedin.com/in/mohammad-mahabubul-hoque-porosh/">linkedin.com/in/mohammad-mahabubul-hoque-porosh</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📧</div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a className="text-gray-400 text-sm hover:text-blue-400" href="https://mail.google.com/mail/u/0/#inbox">theporosh@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-3xl">📞</div>
                                <div>
                                    <p className="font-semibold">WhatsApp</p>
                                    <span className="text-gray-400 text-sm">+880 1719 9710 22</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Box */}
                    <div className="bg-[#111726] p-8 rounded-2xl shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg bg-[#0b0f19] border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
                                Send Message ✈️
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
