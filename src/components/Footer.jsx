import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative py-16 px-6 md:px-12 border-t border-white/5">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#81ecff]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#"
                        className="text-xl font-headline font-bold text-[#81ecff] hover:opacity-80 transition-opacity"
                    >
                        Dinushka<span className="text-[#e966ff]">.</span>dev
                    </motion.a>

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
