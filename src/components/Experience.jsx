import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden" id="experience">
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#81ecff]/4 blur-[150px] rounded-full pointer-events-none animate-drift"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#e966ff]/3 blur-[130px] rounded-full pointer-events-none animate-drift-reverse"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <motion.div
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="w-10 h-10 rounded-xl bg-[#81ecff]/10 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                            </svg>
                        </motion.div>
                        <span className="text-xs tracking-widest uppercase text-[#81ecff] font-bold">The Foundation</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-white">Education</h2>

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-[#81ecff]/20"
                        >
                            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#81ecff] animate-pulse-glow"></div>
                            <h3 className="font-headline text-xl font-bold text-white">BSc (Hons) in Computer Science</h3>
                            <p className="text-[#81ecff] font-semibold text-sm mt-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
                            <p className="text-[#adaaaa] text-sm mt-3 leading-relaxed">Consistently maintaining a strong academic record with above-average GPA throughout the program. Specializing in Software Engineering.</p>
                            <span className="inline-block mt-4 text-xs text-slate-500 uppercase tracking-widest font-medium">2023 — 2027 • Malabe, Sri Lanka</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="relative pl-8 border-l-2 border-[#81ecff]/20"
                        >
                            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#81ecff]/50"></div>
                            <h3 className="font-headline text-xl font-bold text-white">Primary & Secondary Education</h3>
                            <p className="text-[#81ecff] font-semibold text-sm mt-1">Wadduwa Central College</p>
                            <span className="inline-block mt-4 text-xs text-slate-500 uppercase tracking-widest font-medium">Completed 2022 • Wadduwa, Sri Lanka</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-10 h-10 rounded-xl bg-[#e966ff]/10 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 text-[#e966ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-3.77.772 6.003 6.003 0 01-3.77-.772" />
                            </svg>
                        </motion.div>
                        <span className="text-xs tracking-widest uppercase text-[#e966ff] font-bold">Recognition</span>
                    </div>
                    <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-white">Achievements</h2>

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-[#e966ff]/20"
                        >
                            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#e966ff] animate-pulse-glow-purple"></div>
                            <h3 className="font-headline text-xl font-bold text-white">Startup Spark Competition — Top 20 Finalist</h3>
                            <p className="text-[#e966ff] font-semibold text-sm mt-1">Techno 2024 — IESL Student Chapter, University of Moratuwa</p>
                            <p className="text-[#adaaaa] text-sm mt-3 leading-relaxed">Recognized for innovative project prototypes and entrepreneurial solutions developed during the competitive acceleration program.</p>
                            <span className="inline-block mt-4 text-xs text-slate-500 uppercase tracking-widest font-medium">2024</span>
                        </motion.div>
                    </div>

                    {/* Decorative element to fill space */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 glass-card rounded-2xl p-6 border border-[#e966ff]/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#81ecff]/20 to-[#e966ff]/20 flex items-center justify-center">
                                <svg className="w-7 h-7 text-[#81ecff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Always Learning</p>
                                <p className="text-[#adaaaa] text-xs mt-1">Continuously expanding my skillset through hands-on projects and competitive programming</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
