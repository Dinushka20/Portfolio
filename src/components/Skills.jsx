import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
    // Languages
    {
        name: 'Java',
        customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: '#f8981d',
        category: 'Language',
        size: 'small'
    },
    { name: 'TypeScript', slug: 'typescript', color: '#3178c6', category: 'Language', size: 'small' },
    { name: 'JavaScript', slug: 'javascript', color: '#f7df1e', category: 'Language', size: 'small' },
    {
        name: 'C#',
        customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        color: '#a179dc',
        category: 'Language',
        size: 'small'
    },

    // Frontend (Large)
    { name: 'React.js', slug: 'react', color: '#61dafb', category: 'Frontend', size: 'large', description: 'Advanced UI patterns & hooks' },
    { name: 'Next.js', slug: 'nextdotjs', color: '#ffffff', category: 'Frontend', size: 'medium', description: 'SSR & App Router' },
    { name: 'Tailwind', slug: 'tailwindcss', color: '#06b6d4', category: 'Frontend', size: 'medium' },

    // Backend (Medium)
    { name: 'Spring Boot', slug: 'springboot', color: '#6db33f', category: 'Backend', size: 'large', description: 'Microservices & Enterprise' },
    { name: 'ASP.NET', slug: 'dotnet', color: '#512bd4', category: 'Backend', size: 'medium' },
    { name: 'Node.js', slug: 'nodedotjs', color: '#339933', category: 'Backend', size: 'medium' },

    // Tools & DB
    { name: 'MySQL', slug: 'mysql', color: '#4479a1', category: 'Tools', size: 'medium' },
    { name: 'Firebase', slug: 'firebase', color: '#ffca28', category: 'Tools', size: 'small' },
    { name: 'Git', slug: 'git', color: '#f05032', category: 'Tools', size: 'small' },
    { name: 'Docker', slug: 'docker', color: '#2496ed', category: 'Tools', size: 'medium' },
    { name: 'Figma', slug: 'figma', color: '#f24e1e', category: 'Design', size: 'small' },
];

const SkillCard = ({ name, slug, customUrl, color, size, description, category }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const isLarge = size === 'large';
    const isMedium = size === 'medium';

    const logoSrc = customUrl || `https://cdn.simpleicons.org/${slug}`;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative group ${isLarge ? 'col-span-full md:col-span-2 lg:col-span-6 h-64' : isMedium ? 'col-span-1 md:col-span-1 lg:col-span-3 h-48' : 'col-span-1 md:col-span-1 lg:col-span-2 h-32'}`}
        >
            <div
                style={{
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 bg-[#121212]/50 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 flex flex-col justify-center items-center transition-all duration-500 group-hover:bg-[#1a1a1a]/80 group-hover:border-white/10"
            >
                {/* Brand Color Ambient Glow */}
                <div
                    className="absolute inset-x-0 bottom-0 h-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[60px] rounded-full"
                    style={{ background: color }}
                />

                <div className={`relative flex items-center justify-center ${isLarge ? 'w-24 h-24 mb-4' : isMedium ? 'w-16 h-16 mb-2' : 'w-10 h-10 mb-2'}`}>
                    <img
                        src={logoSrc}
                        alt={name}
                        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                        style={{ filter: `drop-shadow(0 0 12px ${color}40)` }}
                    />
                </div>

                <div className="text-center">
                    <h4 className={`font-headline font-bold text-white transition-all duration-300 ${isLarge ? 'text-2xl' : isMedium ? 'text-lg' : 'text-xs'}`}>
                        {name}
                    </h4>
                    {isLarge && description && (
                        <p className="text-[#adaaaa] text-sm mt-1 max-w-[200px] leading-snug">{description}</p>
                    )}
                    {(isLarge || isMedium) && (
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2 inline-block" style={{ color }}>
                            {category}
                        </span>
                    )}
                </div>

                {/* Corner Accents */}
                <div
                    className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: color }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden" id="skills">
            {/* Ambient Lighting */}
            <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-[#81ecff]/5 blur-[200px] rounded-full pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#e966ff]/5 blur-[180px] rounded-full pointer-events-none animate-drift-slow"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs tracking-[0.4em] uppercase text-[#81ecff] font-bold">Expertise</span>
                            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mt-4 text-white">
                                Technical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] via-white to-[#e966ff]">Stack.</span>
                            </h2>
                        </motion.div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-[#adaaaa] max-w-md text-base lg:text-lg leading-relaxed lg:text-right"
                    >
                        Developing high-performance, scalable solutions with
                        industry-leading technologies and modern design patterns.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 auto-rows-max gap-4 lg:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={`${skill.size === 'large' ? 'col-span-full md:col-span-2 lg:col-span-6' : skill.size === 'medium' ? 'col-span-1 md:col-span-1 lg:col-span-3' : 'col-span-1 md:col-span-1 lg:col-span-2'}`}
                        >
                            <SkillCard {...skill} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
