import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToPath = () => {
    const { pathname, state } = useLocation();
    const isManualScrolling = useRef(false);
    const scrollTimeout = useRef(null);

    // 1. Scroll to section when URL changes via link click (not from natural scroll)
    useEffect(() => {
        // If this path change came from our scroll observer, skip — prevents snap-back jank
        if (state?.isScrollUpdate) return;

        if (pathname === '/' || pathname === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sectionId = pathname.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
            isManualScrolling.current = true;
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

            // Release the lock after the smooth scroll finishes
            scrollTimeout.current = setTimeout(() => {
                isManualScrolling.current = false;
            }, 1000);

            return () => {
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            };
        }
    }, [pathname, state]);

    // 2. Update URL as user scrolls — uses history.replaceState (zero React Router overhead)
    useEffect(() => {
        const sections = ['projects', 'skills', 'experience', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            // Ignore if we are currently doing a programmatic scroll from a link click
            if (isManualScrolling.current) return;

            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const sectionId = entry.target.id;
                const newPath = sectionId === 'hero' ? '/' : `/${sectionId}`;

                if (window.location.pathname !== newPath) {
                    // Bypass React Router entirely — no re-render, no jank
                    window.history.replaceState(null, '', newPath);
                    window.dispatchEvent(new CustomEvent('navreplace', { detail: newPath }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        [...sections, 'hero'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []); // No deps — this never needs to re-run

    return null;
};

export default ScrollToPath;
