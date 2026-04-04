import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToPath from './components/ScrollToPath';

const SectionDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="gradient-mesh-divider max-w-7xl mx-auto my-0"
  />
);

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#81ecff]/30 selection:text-white overflow-x-hidden relative">
      <ParticleBackground />
      <Navbar />
      <ScrollToPath />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
