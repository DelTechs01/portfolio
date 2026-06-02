import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (_jsx(AnimatePresence, { children: visible && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, className: "fixed bottom-8 left-8 z-40", children: _jsx(Button, { className: "rounded-full shadow-2xl bg-gradient-to-br from-primary to-accent hover:opacity-90 text-primary-foreground", size: "icon", "aria-label": "Back to top", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), children: _jsx(ArrowUp, { className: "w-6 h-6" }) }) })) }));
};
export default BackToTop;
