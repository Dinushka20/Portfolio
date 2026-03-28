import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* Typing effect component */
const TypingText = ({ texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && displayText === currentText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(currentText.substring(0, displayText.length + (isDeleting ? -1 : 1)));
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="text-[#81ecff]">
            {displayText}
            <span className="typing-cursor" />
        </span>
    );
};

const Hero = () => {
    const roles = [
        'Full-Stack Developer',
        'Spring Boot Engineer',
        'React Developer',
        'Computer Science Undergraduate at SLIIT',
    ];

    return (
        <section className="relative min-h-screen flex overflow-x-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-[#81ecff]/6 blur-[180px] rounded-full animate-drift"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#e966ff]/5 blur-[150px] rounded-full animate-drift-slow"></div>
            </div>

            {/* Floating code lines - clean & minimal */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ zIndex: 1 }}>
                {[
                    { text: 'const developer = new FullStackDev();', top: '12%', delay: 0, duration: 35 },
                    { text: 'import { Spring, React, .NET } from "stack";', top: '28%', delay: 4, duration: 40 },
                    { text: 'async function buildSolution(req) { ... }', top: '55%', delay: 8, duration: 38 },
                    { text: 'export default Portfolio;', top: '72%', delay: 2, duration: 42 },
                    { text: 'return <App framework="spring-boot" />;', top: '88%', delay: 6, duration: 36 },
                    { text: '// TODO: deploy to production ✓', top: '42%', delay: 10, duration: 44 },
                ].map((line, i) => (
                    <motion.div
                        key={i}
                        className="absolute whitespace-nowrap font-mono text-[11px] tracking-wide"
                        style={{
                            top: line.top,
                            color: 'rgba(129, 236, 255, 0.07)',
                        }}
                        initial={{ x: '-100%' }}
                        animate={{ x: '100vw' }}
                        transition={{
                            duration: line.duration,
                            repeat: Infinity,
                            delay: line.delay,
                            ease: 'linear',
                        }}
                    >
                        {line.text}
                    </motion.div>
                ))}
            </div>

            {/* Main content container */}
            <div className="max-w-[95rem] mx-auto w-full flex flex-col relative z-20 px-6 md:px-12 pt-28 lg:pt-[15vh] pb-24 min-h-[100svh]">

                {/* Left - Text content */}
                <div className="relative z-30 flex flex-col justify-center flex-grow w-full lg:w-[65%] xl:w-[60%]">
                    <div className="space-y-5 lg:space-y-6">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-5 py-2 lg:py-2.5 rounded-full border border-green-500/30 bg-green-500/10 mb-2 lg:mb-4 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                        </span>
                        <span className="text-[12px] sm:text-sm tracking-widest uppercase text-green-400 font-bold">
                            Available for Internship
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-[#adaaaa] text-xl md:text-2xl lg:text-3xl font-medium tracking-wide mb-3 lg:mb-4"
                        >
                            Hi, I'm
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold tracking-tight leading-[1] lg:whitespace-nowrap"
                            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
                        >
                            <span className="text-white">Dinushka </span>
                            <span className="bg-gradient-to-r from-[#81ecff] to-[#61b3ff] bg-clip-text text-transparent">
                                Sandeepa
                            </span>
                        </motion.h1>

                        {/* Typing role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-5 lg:mt-6 text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold tracking-tight text-[#e0e0e0] lg:whitespace-nowrap"
                            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
                        >
                            <TypingText texts={roles} />
                        </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-[#a1a1a1] text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium"
                    >
                        BSc (Hons) Computer Science undergraduate at SLIIT, passionate about building scalable full-stack applications with Spring Boot, React, and .NET
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-wrap gap-4 lg:gap-6 pt-4 lg:pt-6"
                    >
                        <a href="#contact" className="group relative bg-[#81ecff] text-[#003840] font-bold py-4 px-9 rounded-xl flex items-center gap-3 hover:shadow-[0_0_30px_rgba(129,236,255,0.4)] transition-all active:scale-95 text-base lg:text-lg overflow-hidden">
                            <span className="relative z-10">Hire Me</span>
                            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="/Dinushka_Sandeepa_CV.pdf" download className="text-white font-bold py-4 px-9 rounded-xl flex items-center gap-3 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all active:scale-95 text-base lg:text-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex items-center gap-4 lg:gap-5 pt-6 lg:pt-8"
                    >
                        {[
                            { href: 'https://github.com/Dinushka20', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                            { href: 'https://www.linkedin.com/in/dinushka-sandeepa-8475a2344', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                            { href: 'mailto:dinushka.s.wickramaarachchi@gmail.com', icon: <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full border-2 border-white/10 text-[#898989] hover:text-[#81ecff] hover:border-[#81ecff]/40 transition-colors bg-white/5 backdrop-blur-sm"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                    </div>
                </div>

                {/* Mobile-only Profile Photo - Responsive stack layout ensuring text and image never overlap on tiny phones */}
                <div className="relative flex lg:hidden mt-8 sm:mt-12 w-full h-[45vh] sm:h-[60vh] justify-center items-end opacity-80 pointer-events-none z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-[110%] -mx-[5%] max-w-[500px] h-full flex justify-center items-end pointer-events-auto origin-bottom"
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                                scale: [1, 1.01, 1]
                            }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 1.4 // Starts after entrance is complete
                            }}
                            className="w-full h-full flex justify-center items-end"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                                maskComposite: 'intersect',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 100%)',
                                WebkitMaskComposite: 'source-in'
                            }}
                        >
                            <img
                                src="/profile-nobg best.png"
                                alt="Dinushka Sandeepa"
                                className="w-full h-full object-cover object-bottom relative z-0 origin-bottom transition-all duration-1000"
                                style={{
                                    filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Desktop-only Profile Photo - Utterly bounded perfectly to the physical right margin of massive screens */}
            <div className="absolute inset-y-0 right-0 hidden lg:flex lg:w-[50vw] xl:w-[45vw] z-10 pointer-events-none justify-end items-end overflow-visible opacity-80">
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 1.05, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full flex justify-end items-end"
                >
                    <motion.div
                        animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 0.3, 0, -0.3, 0]
                        }}
                        transition={{ 
                            duration: 12, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: 2.2 // Starts after the 2s dramatic entrance
                        }}
                        className="relative w-full h-[100svh] flex justify-end items-end pointer-events-auto origin-bottom-right"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                            WebkitMaskComposite: 'source-in'
                        }}
                    >
                        {/* Seamless cinematic portrait strictly right-aligned */}
                        <img
                            src="/profile-nobg best.png"
                            alt="Dinushka Sandeepa"
                            className="w-full h-full object-contain object-right-bottom relative z-0 origin-bottom-right"
                            style={{
                                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))'
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border-2 border-white/15 rounded-full flex justify-center pt-1.5"
                >
                    <div className="w-1 h-2 bg-[#81ecff] rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
