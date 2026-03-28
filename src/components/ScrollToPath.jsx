import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToPath = () => {
    const { pathname, state } = useLocation();
    const navigate = useNavigate();
    const isManualScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    // 1. Handle scrolling when the URL path changes (ONLY for link clicks, not natural scroll updates)
    useEffect(() => {
        // IF this navigation came from the scroll observer, DO NOT scroll again (prevents lag/snapping)
        if (state?.isScrollUpdate) return;

        // Skip for root path
        if (pathname === '/' || pathname === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sectionId = pathname.substring(1); // remove leading /
        const element = document.getElementById(sectionId);
        
        if (element) {
            isManualScrolling.current = true;
            
            // Clear any existing timeout
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

            const navHeight = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Re-enable observer after scroll is likely finished
            scrollTimeout.current = setTimeout(() => {
                isManualScrolling.current = false;
            }, 1000); 
            
            return () => {
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            };
        }
    }, [pathname, state]);

    // 2. Update the URL as the user scrolls
    useEffect(() => {
        const sections = ['projects', 'skills', 'experience', 'contact'];
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', 
            threshold: 0
        };

        const observerCallback = (entries) => {
            // IGNORE if we are in a manual scroll (from clicking a link)
            if (isManualScrolling.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const newPath = `/${sectionId}`;
                    
                    if (window.location.pathname !== newPath) {
                        // Pass state: { isScrollUpdate: true } to prevent the scroller effect from triggering
                        navigate(newPath, { replace: true, state: { isScrollUpdate: true } });
                    }
                } else if (entry.target.id === 'hero' && entry.isIntersecting) {
                    if (window.location.pathname !== '/') {
                        navigate('/', { replace: true, state: { isScrollUpdate: true } });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const heroEl = document.getElementById('hero');
        if (heroEl) observer.observe(heroEl);

        return () => observer.disconnect();
    }, [navigate]);

    return null;
};

export default ScrollToPath;
