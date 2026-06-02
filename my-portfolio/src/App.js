import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Route, Router, Switch, useLocation } from 'wouter';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import AccessibilityControls from '@/components/AccessibilityControls';
import AIAssistant from '@/components/AIAssistant';
import PersonalizationEngine from '@/components/PersonalizationEngine';
import Portfolio from '@/components/Portfolio';
import CaseStudy from '@/components/CaseStudy';
import Education from '@/components/Education';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { caseStudiesData } from '@/data/caseStudies';
function NotFound({ onHome }) {
    return (_jsx("div", { className: "min-h-[70vh] flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "Page not found" }), _jsx("button", { onClick: onHome, className: "text-primary hover:underline", children: "Go back home" })] }) }));
}
function App() {
    const [location, setLocation] = useLocation();
    // Always start a new page at the top.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    const handleSelectProject = (id) => setLocation(`/case-studies/${id}`);
    const goHome = () => setLocation('/');
    return (_jsxs(Router, { base: "/", children: [_jsx(Navbar, {}), _jsx(AccessibilityControls, {}), _jsx(AIAssistant, {}), _jsx(PersonalizationEngine, {}), _jsx(BackToTop, {}), _jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.2, ease: 'easeOut' }, children: _jsxs(Switch, { location: location, children: [_jsx(Route, { path: "/about", children: _jsx(About, {}) }), _jsx(Route, { path: "/skills", children: _jsx(Skills, {}) }), _jsx(Route, { path: "/case-studies", children: _jsx(CaseStudies, { onSelectProject: handleSelectProject }) }), _jsx(Route, { path: "/case-studies/:id", children: (params) => {
                                    const project = caseStudiesData.find((p) => p.id === params.id);
                                    return project ? (_jsx(CaseStudy, { project: project, onBack: () => setLocation('/case-studies') })) : (_jsx(NotFound, { onHome: goHome }));
                                } }), _jsx(Route, { path: "/services", children: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", children: _jsx(Contact, {}) }), _jsx(Route, { path: "/education", children: _jsx(Education, {}) }), _jsx(Route, { path: "/", children: _jsx(Portfolio, { onSelectProject: handleSelectProject }) }), _jsx(Route, { children: _jsx(NotFound, { onHome: goHome }) })] }) }, location) })] }));
}
export default App;
