import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-20 pb-10 px-6 md:px-12">
            {/* Gradient top separator */}
            <div className="absolute top-0 left-0 right-0 h-[1px]">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#81ecff]/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back to top */}
                <div className="flex justify-center mb-12">
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-2 text-[#adaaaa] hover:text-[#81ecff] transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#81ecff]/30 group-hover:bg-[#81ecff]/5 transition-all">
                            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back to top</span>
                    </motion.button>
                </div>

                {/* Main footer content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-headline font-bold text-[#81ecff] hover:opacity-80 transition-opacity"
                    >
                        Dinushka<span className="text-[#e966ff]">.</span>dev
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="https://github.com/Dinushka20" target="_blank" rel="noopener noreferrer"
                            className="text-sm text-[#adaaaa] hover:text-[#81ecff] transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/dinushka-sandeepa-8475a2344" target="_blank" rel="noopener noreferrer"
                            className="text-sm text-[#adaaaa] hover:text-[#81ecff] transition-colors">LinkedIn</a>
                        <a href="mailto:dinushka.s.wickramaarachchi@gmail.com"
                            className="text-sm text-[#adaaaa] hover:text-[#81ecff] transition-colors">Email</a>
                        <a href="/Dinushka_Sandeepa_CV.pdf" download
                            className="text-sm text-[#adaaaa] hover:text-[#e966ff] transition-colors underline underline-offset-4">Resume</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-slate-600 text-center">
                        © {new Date().getFullYear()} Dinushka Sandeepa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
