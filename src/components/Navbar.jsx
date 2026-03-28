import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
          }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <a href="/" className="text-2xl font-black text-[#81ecff] tracking-tighter font-headline hover:opacity-80 transition-opacity">
            DS<span className="text-white">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm transition-all duration-300 font-medium relative group ${activeSection === link.href ? 'text-[#81ecff]' : 'text-[#adaaaa] hover:text-[#81ecff]'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#81ecff] transition-all duration-300 ${activeSection === link.href ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'
                  }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs text-[#adaaaa] tracking-wider uppercase">Available</span>
            </div>
            <Link
              to="/contact"
              className="hidden md:inline-flex bg-[#81ecff] text-[#005762] font-bold py-2.5 px-6 rounded-xl text-sm hover:bg-[#81ecff]/90 transition-all neon-glow-primary active:scale-95"
            >
              Hire Me
            </Link>
            {/* Mobile menu btn */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Subtle bottom gradient line */}
        <div className={`h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(to right, transparent, rgba(129,236,255,0.2), rgba(233,102,255,0.2), transparent)' }}
        />
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl font-headline font-bold transition-colors ${activeSection === link.href ? 'text-[#81ecff]' : 'text-white hover:text-[#81ecff]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-[#81ecff] text-[#005762] font-bold py-3 px-8 rounded-xl mt-4"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
