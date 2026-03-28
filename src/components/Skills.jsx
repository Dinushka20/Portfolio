import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        color: '#81ecff',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        skills: [
            { name: 'Java', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'C#', level: 75 },
            { name: 'Python', level: 75 },
            { name: 'C', level: 70 },
        ]
    },
    {
        title: 'Backend',
        color: '#e966ff',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7" />
            </svg>
        ),
        skills: [
            { name: 'Spring Boot', level: 90 },
            { name: 'ASP.NET Core', level: 80 },
            { name: 'REST APIs', level: 95 },
            { name: 'JWT Auth', level: 85 },
            { name: 'Node.js', level: 70 },
        ]
    },
    {
        title: 'Frontend',
        color: '#81ecff',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'Vite', level: 85 },
            { name: 'Tailwind CSS', level: 85 },
            { name: 'HTML / CSS', level: 90 },
        ]
    },
    {
        title: 'Databases & Tools',
        color: '#e966ff',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
            </svg>
        ),
        skills: [
            { name: 'MySQL', level: 88 },
            { name: 'SQL Server', level: 80 },
            { name: 'Firebase', level: 75 },
            { name: 'Git / GitHub', level: 92 },
            { name: 'Postman', level: 85 },
            { name: 'Selenium', level: 60 },
        ]
    }
];

const SkillBar = ({ name, level, color, delay }) => (
    <div className="group">
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#adaaaa] group-hover:text-white transition-colors">{name}</span>
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.5 }}
                className="text-xs font-mono" style={{ color }}
            >
                {level}%
            </motion.span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
                className="h-full rounded-full relative"
                style={{ background: `linear-gradient(90deg, ${color}40, ${color})` }}
            >
                {/* Shimmer effect on the bar */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)`,
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 3s ease-in-out infinite',
                        }}
                    />
                </div>
            </motion.div>
        </div>
    </div>
);

/* Floating background tech symbols */
const floatingSymbols = [
    { text: '<>', x: '5%', y: '20%', delay: 0 },
    { text: '{}', x: '90%', y: '15%', delay: 1 },
    { text: '/>', x: '85%', y: '80%', delay: 2 },
    { text: '()', x: '10%', y: '75%', delay: 3 },
    { text: '[]', x: '50%', y: '5%', delay: 1.5 },
    { text: '=>', x: '45%', y: '90%', delay: 2.5 },
];

const Skills = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden" id="skills">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e966ff]/4 blur-[180px] rounded-full pointer-events-none animate-drift-slow"></div>
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#81ecff]/3 blur-[150px] rounded-full pointer-events-none animate-drift"></div>

            {/* Floating code symbols */}
            {floatingSymbols.map((sym, i) => (
                <motion.div
                    key={i}
                    className="absolute text-xl font-mono text-[#81ecff]/[0.06] pointer-events-none hidden lg:block"
                    style={{ left: sym.x, top: sym.y }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sym.delay }}
                >
                    <motion.span
                        animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                        className="block text-3xl font-bold"
                    >
                        {sym.text}
                    </motion.span>
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs tracking-widest uppercase text-[#81ecff] font-bold">What I Work With</span>
                    <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2 text-white">
                        Skills
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#81ecff] to-[#e966ff]"></div>
                    <p className="text-[#adaaaa] mt-4 max-w-md mx-auto text-sm">Technologies and tools I use to bring ideas to life</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((cat, catIndex) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: catIndex * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="glass-card-strong rounded-2xl p-8 hover:border-white/10 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ background: `${cat.color}15`, color: cat.color }}
                                >
                                    {cat.icon}
                                </motion.div>
                                <h4 className="font-headline font-bold text-xl text-white">{cat.title}</h4>
                            </div>
                            <div className="space-y-5">
                                {cat.skills.map((skill, i) => (
                                    <SkillBar key={skill.name} {...skill} color={cat.color} delay={i * 0.1} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
