import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Route, Router, Switch, useLocation } from 'wouter';
import Portfolio from '@/components/Portfolio';
import CaseStudy from '@/components/CaseStudy';
import Education from '@/components/Education';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { caseStudiesData } from '@/data/caseStudies';
function App() {
    const [location, setLocation] = useLocation();
    const [selectedProject, setSelectedProject] = useState(null);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('project');
        if (projectId && caseStudiesData.find(p => p.id === projectId)) {
            setSelectedProject(projectId);
        }
        else {
            setSelectedProject(null);
        }
    }, [location]);
    const handleSelectProject = (id) => {
        setSelectedProject(id);
        setLocation(`/?project=${id}`);
    };
    const handleBackToPortfolio = () => {
        setSelectedProject(null);
        setLocation('/');
    };
    const currentProject = selectedProject
        ? caseStudiesData.find(p => p.id === selectedProject)
        : null;
    return (_jsx(Router, { base: "/", children: _jsxs(Switch, { children: [_jsx(Route, { path: "/about", children: _jsx(About, {}) }), _jsx(Route, { path: "/skills", children: _jsx(Skills, {}) }), _jsx(Route, { path: "/case-studies", children: _jsx(CaseStudies, { onSelectProject: handleSelectProject }) }), _jsx(Route, { path: "/services", children: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", children: _jsx(Contact, {}) }), _jsx(Route, { path: "/education", children: _jsx(Education, { onBack: handleBackToPortfolio }) }), _jsx(Route, { path: "/", children: currentProject ? (_jsx(CaseStudy, { project: currentProject, onBack: handleBackToPortfolio })) : (_jsx(Portfolio, { onSelectProject: handleSelectProject })) }), _jsx(Route, { children: _jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "Page not found" }), _jsx("button", { onClick: () => setLocation('/'), className: "text-primary hover:underline", children: "Go back home" })] }) }) })] }) }));
}
export default App;
