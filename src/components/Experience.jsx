import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ── Animated Counter ── */
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    hasAnimated.current = false; // allow re-trigger
                    let start = 0;
                    const step = Math.max(1, Math.floor(target / (duration / 16)));
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(start);
                        }
                    }, 16);
                    return () => clearInterval(timer);
                } else {
                    setCount(0);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref} className="counter-number">
            {count}{suffix}
        </span>
    );
};

/* ── Floating Hexagon SVG ── */
const FloatingHex = ({ className, delay = 0, size = 60 }) => (
    <motion.svg
        width={size} height={size} viewBox="0 0 100 100"
        className={`absolute pointer-events-none ${className}`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay, duration: 1 }}
    >
        <motion.polygon
            points="50,2 93,25 93,75 50,98 7,75 7,25"
            fill="none"
            strokeWidth="1"
            stroke="currentColor"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30 + delay * 10, repeat: Infinity, ease: "linear" }}
        />
    </motion.svg>
);

/* ── Orbit Ring SVG Decoration ── */
const OrbitRing = ({ size = 300, className = '', duration = 20 }) => (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
        <motion.div
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
            <svg viewBox="0 0 300 300" className="w-full h-full">
                <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(129,236,255,0.06)" strokeWidth="1" strokeDasharray="8 12" />
                <circle cx="150" cy="10" r="4" fill="rgba(129,236,255,0.3)" />
            </svg>
        </motion.div>
    </div>
);

const Experience = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const gradX = useTransform(springX, [0, 1], ['40%', '60%']);
    const gradY = useTransform(springY, [0, 1], ['40%', '60%']);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen py-32 px-6 md:px-12 relative overflow-clip"
            id="experience"
        >
            {/* ── Interactive gradient that follows the mouse ── */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(800px circle at ${gradX} ${gradY}, rgba(129,236,255,0.03), transparent 60%)`,
                }}
            />

            {/* ── Ambient lighting blobs ── */}
            <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-[#81ecff]/4 blur-[180px] rounded-full pointer-events-none animate-drift" />
            <div className="absolute bottom-[5%] right-[-8%] w-[500px] h-[500px] bg-[#e966ff]/3 blur-[160px] rounded-full pointer-events-none animate-drift-reverse" />
            <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-[#70aaff]/3 blur-[120px] rounded-full pointer-events-none animate-drift-slow" />

            {/* ── Floating geometric decorations ── */}
            <FloatingHex className="text-[#81ecff]/10 top-[8%] right-[12%] hidden lg:block" delay={0} size={80} />
            <FloatingHex className="text-[#e966ff]/8 bottom-[15%] left-[8%] hidden lg:block" delay={1.5} size={50} />
            <FloatingHex className="text-[#70aaff]/8 top-[45%] right-[5%] hidden lg:block" delay={0.8} size={40} />
            <OrbitRing className="top-[-5%] right-[-5%] hidden xl:block" size={350} duration={25} />
            <OrbitRing className="bottom-[-10%] left-[-8%] hidden xl:block" size={280} duration={35} />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20 lg:mb-28"
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0.1em' }}
                        whileInView={{ opacity: 1, letterSpacing: '0.4em' }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-xs uppercase text-[#81ecff] font-bold block mb-4"
                    >
                        Journey & Milestones
                    </motion.span>
                    <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                        Experience &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] via-[#70aaff] to-[#e966ff]">
                            Growth
                        </span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-32 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#81ecff] to-[#e966ff] origin-center"
                    />
                </motion.div>


                {/* ── Main Content: Education + Achievements ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* ── Education Card (spans 3 columns) ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.15 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3 group"
                    >
                        <div className="relative glass-card-strong rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-[#81ecff]/15 transition-all duration-700 h-full">
                            {/* Top accent line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl origin-left"
                                style={{ background: 'linear-gradient(to right, #81ecff, #70aaff, transparent)' }}
                            />

                            {/* Background decoration */}
                            <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-[#81ecff]">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                </svg>
                            </div>

                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#81ecff]/15 to-[#70aaff]/10 flex items-center justify-center border border-[#81ecff]/10"
                                >
                                    <svg className="w-6 h-6 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                                    </svg>
                                </motion.div>
                                <span className="text-xs tracking-[0.3em] uppercase text-[#81ecff] font-bold">Education</span>
                            </div>

                            <h3 className="font-headline text-2xl lg:text-3xl font-extrabold text-white mt-4 mb-2 leading-tight">
                                BSc (Hons) in<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-[#70aaff]">
                                    Computer Science
                                </span>
                            </h3>

                            <p className="text-white/80 font-semibold text-base mb-4">
                                Sri Lanka Institute of Information Technology (SLIIT)
                            </p>

                            <p className="text-[#adaaaa] text-sm leading-relaxed mb-6 max-w-xl">
                                Consistently maintaining a strong academic record with above-average GPA throughout the program. 
                                Specializing in Software Engineering with focus on full-stack development, 
                                system design, and modern cloud-native architectures.
                            </p>

                            {/* Timeline badge */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81ecff]/8 border border-[#81ecff]/15 text-[#81ecff] text-xs font-bold uppercase tracking-wider">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81ecff] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#81ecff]"></span>
                                    </span>
                                    2023 — 2027
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 text-[#adaaaa] text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    Malabe, Sri Lanka
                                </span>
                            </div>

                            {/* Focus areas */}
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#adaaaa] font-bold mb-4">Focus Areas</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Software Engineering', 'Full-Stack Development', 'System Design', 'Cloud Architecture', 'DevOps'].map((area, i) => (
                                        <motion.span
                                            key={area}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ delay: 0.5 + i * 0.08 }}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-[#adaaaa] font-medium hover:border-[#81ecff]/20 hover:text-[#81ecff] transition-all duration-300 cursor-default"
                                        >
                                            {area}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right Column: Achievement + Learning Card (spans 2 columns) ── */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        {/* Achievement Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                            className="group flex-1"
                        >
                            <div className="relative glass-card-strong rounded-3xl p-8 lg:p-10 border border-white/5 hover:border-[#e966ff]/15 transition-all duration-700 h-full">
                                {/* Top accent line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1.2, delay: 0.5 }}
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl origin-right"
                                    style={{ background: 'linear-gradient(to left, #e966ff, #c500e6, transparent)' }}
                                />

                                {/* Trophy decoration */}
                                <div className="absolute bottom-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-[#e966ff]">
                                        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                                    </svg>
                                </div>

                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e966ff]/15 to-[#c500e6]/10 flex items-center justify-center border border-[#e966ff]/10"
                                    >
                                        <svg className="w-6 h-6 text-[#e966ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77.772 6.003 6.003 0 01-3.77-.772" />
                                        </svg>
                                    </motion.div>
                                    <span className="text-xs tracking-[0.3em] uppercase text-[#e966ff] font-bold">Achievement</span>
                                </div>

                                <h3 className="font-headline text-xl lg:text-2xl font-bold text-white mt-4 mb-2">
                                    Startup Spark Competition
                                </h3>
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#e966ff] to-[#c500e6] text-white mb-4 shadow-[0_0_20px_rgba(233,102,255,0.2)]"
                                >
                                    🏆 Top 20 Finalist
                                </motion.span>

                                <p className="text-[#e966ff]/80 font-semibold text-sm mb-3">
                                    Techno 2024 — IESL Student Chapter, University of Moratuwa
                                </p>
                                <p className="text-[#adaaaa] text-sm leading-relaxed">
                                    Recognized for innovative project prototypes and entrepreneurial solutions developed during the competitive acceleration program.
                                </p>
                                <span className="inline-block mt-4 text-xs text-slate-500 uppercase tracking-widest font-medium">2024</span>
                            </div>
                        </motion.div>

                        {/* Always Learning Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="group"
                        >
                            <div className="relative glass-card rounded-3xl p-6 lg:p-8 border border-white/5 hover:border-[#70aaff]/15 transition-all duration-700">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl origin-center"
                                    style={{ background: 'linear-gradient(to right, transparent, #70aaff, transparent)' }}
                                />

                                <div className="flex items-start gap-5">
                                    <motion.div
                                        animate={{ rotate: [0, 10, 0, -10, 0], scale: [1, 1.05, 1] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                        className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#81ecff]/10 to-[#e966ff]/10 flex items-center justify-center border border-white/5"
                                    >
                                        <svg className="w-7 h-7 text-[#70aaff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </motion.div>
                                    <div>
                                        <p className="text-white font-bold text-base lg:text-lg mb-1">Always Evolving</p>
                                        <p className="text-[#adaaaa] text-sm leading-relaxed">
                                            Continuously expanding my skillset through hands-on projects, open-source contributions, and competitive programming challenges.
                                        </p>
                                        <div className="flex gap-3 mt-4">
                                            {['🔬 Research', '🌐 Open Source', '🎯 Problem Solving'].map((tag) => (
                                                <span key={tag} className="text-[10px] text-[#70aaff] font-bold uppercase tracking-wider">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
