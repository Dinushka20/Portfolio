import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Open email client with pre-filled data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.open(`mailto:dinushka.s.wickramaarachchi@gmail.com?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="min-h-screen py-32 px-6 md:px-12 relative overflow-clip" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#81ecff]/3 blur-[200px] rounded-full pointer-events-none animate-drift-slow"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e966ff]/4 blur-[150px] rounded-full pointer-events-none animate-drift-reverse"></div>

            {/* Floating decorative icons */}
            {[
                { icon: '✉', x: '8%', y: '15%', delay: 0 },
                { icon: '🚀', x: '88%', y: '20%', delay: 1.2 },
                { icon: '💬', x: '92%', y: '70%', delay: 2.4 },
                { icon: '🤝', x: '5%', y: '80%', delay: 0.8 },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl pointer-events-none hidden lg:block opacity-[0.08]"
                    style={{ left: item.x, top: item.y }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.08 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: item.delay }}
                >
                    <motion.span
                        animate={{ y: [0, -15, 0], rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="block text-3xl"
                    >
                        {item.icon}
                    </motion.span>
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <span className="text-xs tracking-widest uppercase text-[#81ecff] font-bold">Get In Touch</span>
                            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-2 text-white leading-tight">
                                Let's build something{' '}
                                <span className="text-[#e966ff] text-glow-secondary">extraordinary</span>.
                            </h2>
                            <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-[#81ecff] to-[#e966ff]"></div>
                        </div>

                        <p className="text-lg text-[#adaaaa] leading-relaxed max-w-lg">
                            I'm currently looking for software engineering internship opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out!
                        </p>

                        {/* Contact info cards */}
                        <div className="space-y-4">
                            <motion.a
                                whileHover={{ x: 6, scale: 1.01 }}
                                href="mailto:dinushka.s.wickramaarachchi@gmail.com"
                                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-[#81ecff]/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#81ecff]/10 flex items-center justify-center group-hover:bg-[#81ecff]/20 transition-colors">
                                    <svg className="w-5 h-5 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-[#adaaaa] uppercase tracking-wider">Email</p>
                                    <p className="text-sm text-white font-medium">dinushka.s.wickramaarachchi@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                whileHover={{ x: 6, scale: 1.01 }}
                                href="tel:+94763766986"
                                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-[#81ecff]/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#81ecff]/10 flex items-center justify-center group-hover:bg-[#81ecff]/20 transition-colors">
                                    <svg className="w-5 h-5 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-[#adaaaa] uppercase tracking-wider">Phone</p>
                                    <p className="text-sm text-white font-medium">+94 763 766 986</p>
                                </div>
                            </motion.a>

                            <motion.div
                                whileHover={{ x: 6, scale: 1.01 }}
                                className="flex items-center gap-4 p-4 glass-card rounded-xl"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#81ecff]/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-[#adaaaa] uppercase tracking-wider">Location</p>
                                    <p className="text-sm text-white font-medium">Wadduwa, Sri Lanka</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social links */}
                        <div className="flex gap-4 pt-2">
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/Dinushka20" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center glass-card rounded-xl text-[#adaaaa] hover:text-white hover:bg-[#81ecff]/10 hover:border-[#81ecff]/20 transition-all"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/dinushka-sandeepa-8475a2344" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center glass-card rounded-xl text-[#adaaaa] hover:text-white hover:bg-[#81ecff]/10 hover:border-[#81ecff]/20 transition-all"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="flex-1 w-full max-w-lg"
                    >
                        <form onSubmit={handleSubmit} className="glass-card-strong p-8 md:p-10 rounded-2xl space-y-6 relative overflow-hidden">
                            {/* Subtle gradient top border */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#81ecff] via-[#e966ff] to-[#81ecff]" style={{ backgroundSize: '200% 100%', animation: 'shimmer 4s ease-in-out infinite' }}></div>

                            <h3 className="font-headline text-xl font-bold text-white mb-2">Send Me a Message</h3>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#adaaaa] font-bold">Full Name</label>
                                <input
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-xl py-3.5 px-5 focus:ring-2 focus:ring-[#81ecff]/50 focus:border-[#81ecff]/30 focus:outline-none transition-all placeholder:text-[#767575] text-white text-sm"
                                    placeholder="John Doe"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#adaaaa] font-bold">Email Address</label>
                                <input
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-xl py-3.5 px-5 focus:ring-2 focus:ring-[#81ecff]/50 focus:border-[#81ecff]/30 focus:outline-none transition-all placeholder:text-[#767575] text-white text-sm"
                                    placeholder="john@example.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#adaaaa] font-bold">Message</label>
                                <textarea
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-xl py-3.5 px-5 focus:ring-2 focus:ring-[#81ecff]/50 focus:border-[#81ecff]/30 focus:outline-none transition-all placeholder:text-[#767575] text-white text-sm resize-none"
                                    placeholder="Tell me about your project..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#81ecff] text-[#005762] font-bold py-4 rounded-xl hover:bg-[#81ecff]/90 transition-all neon-glow-primary flex items-center justify-center gap-2"
                            >
                                {submitted ? (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        Opening Mail Client...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
