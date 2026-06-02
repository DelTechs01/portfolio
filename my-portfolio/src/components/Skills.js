import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, Code2, Database, Network, Shield, Blocks, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLocation } from 'wouter';
import { useState } from 'react';
const Skills = () => {
    const [, setLocation] = useLocation();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const skills = {
        Programming: {
            description: 'Strong foundation in multiple languages with focus on clean, efficient, and maintainable code.',
            list: [
                { name: 'Python (Flask, Django)', level: 85 },
                { name: 'JavaScript (React, Node.js)', level: 80 },
                { name: 'PHP', level: 75 },
                { name: 'Java', level: 70 },
                { name: 'HTML & CSS', level: 90 },
                { name: 'SQL', level: 85 },
            ]
        },
        'Backend & Databases': {
            description: 'Experienced in designing robust APIs and managing data with relational databases.',
            list: [
                { name: 'RESTful API Development', level: 82 },
                { name: 'Database Design', level: 80 },
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 78 },
                { name: 'Authentication Systems', level: 80 },
                { name: 'Server-Side Logic', level: 83 },
            ]
        },
        'Networking & IT Support': {
            description: 'Hands-on expertise in setting up, troubleshooting, and optimizing networks and systems.',
            list: [
                { name: 'Network Configuration', level: 88 },
                { name: 'WiFi & Internet Setup', level: 90 },
                { name: 'Hardware Troubleshooting', level: 85 },
                { name: 'Server Maintenance', level: 80 },
                { name: 'Network Monitoring', level: 82 },
                { name: 'Windows & Linux Admin', level: 78 },
            ]
        },
        Cybersecurity: {
            description: 'Solid understanding of security principles to protect systems and data from threats.',
            list: [
                { name: 'System & Network Security', level: 82 },
                { name: 'Vulnerability Assessment', level: 78 },
                { name: 'Secure Coding Practices', level: 80 },
                { name: 'Firewall & Encryption', level: 75 },
                { name: 'Kali Linux Tools', level: 72 },
            ]
        },
        'Emerging Technologies': {
            description: 'Exploring blockchain and AI to build innovative, future-ready solutions.',
            list: [
                { name: 'Blockchain Fundamentals', level: 75 },
                { name: 'Smart Contracts Basics', level: 70 },
                { name: 'AI-Assisted Automation', level: 72 },
                { name: 'Decentralized Systems', level: 68 },
            ]
        },
        'Tools & Platforms': {
            description: 'Proficient with modern development tools and environments for efficient workflows.',
            list: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'VS Code', level: 92 },
                { name: 'NetBeans', level: 80 },
                { name: 'Figma (UI/UX Design)', level: 75 },
                { name: 'Linux Command Line', level: 82 },
            ]
        },
    };
    const categoryIcons = {
        Programming: Code2,
        'Backend & Databases': Database,
        'Networking & IT Support': Network,
        Cybersecurity: Shield,
        'Emerging Technologies': Blocks,
        'Tools & Platforms': Wrench,
    };
    const selectedSkills = selectedCategory ? skills[selectedCategory] : null;
    return (_jsxs("div", { className: "min-h-screen bg-background relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-25 pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse delay-700" })] }), _jsx(motion.div, { initial: { y: -100 }, animate: { y: 0 }, className: "sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/90", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5", children: _jsxs("div", { className: "flex items-center gap-5", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setLocation('/'), children: _jsx(ChevronLeft, { className: "w-6 h-6" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent", children: "Technical Skills" }), _jsx("p", { className: "text-muted-foreground", children: "My expertise across development, networks, and security" })] })] }) }) }), _jsx("section", { className: "py-20 lg:py-32 relative z-10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Skills & Expertise" }), _jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "A practical, hands-on skill set built through real projects, IT support, and continuous learning." })] }), _jsx("div", { className: "hidden lg:block", children: _jsx("div", { className: "grid lg:grid-cols-3 gap-10 relative", children: Object.entries(skills).map(([category, data]) => {
                                    const Icon = categoryIcons[category];
                                    return (_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4", children: _jsx(Icon, { className: "w-10 h-10 text-primary" }) }), _jsx("h3", { className: "text-2xl font-bold mb-3", children: category }), _jsx("p", { className: "text-muted-foreground max-w-sm mx-auto leading-relaxed", children: data.description })] }), _jsx("div", { className: "space-y-5", children: data.list.map((skill, i) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: i * 0.05 }, className: "group relative", children: _jsxs(Card, { className: "border border-white/10 bg-background/40 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-700", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" }), _jsxs(CardContent, { className: "p-7 relative z-10", children: [_jsxs("div", { className: "flex justify-between items-start mb-5", children: [_jsx("h4", { className: "font-bold text-lg text-foreground drop-shadow-md", children: skill.name }), _jsxs("span", { className: "text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: [skill.level, "%"] })] }), _jsx(Progress, { value: skill.level, className: "h-5 bg-white/10 border border-white/20 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent [&>div]:shadow-lg" }), _jsx("p", { className: "mt-4 text-foreground/80 font-medium drop-shadow", children: skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient' })] })] }) }, skill.name))) })] }, category));
                                }) }) }), _jsxs("div", { className: "lg:hidden", children: [_jsx("div", { className: "text-center mb-10", children: _jsx("p", { className: "text-lg text-muted-foreground", children: "Tap a category below to explore my skills" }) }), _jsx("div", { className: "grid grid-cols-2 gap-5", children: Object.keys(skills).map((category) => {
                                        const Icon = categoryIcons[category];
                                        return (_jsxs(Button, { variant: "outline", className: "h-32 flex flex-col items-center justify-center gap-4 border-2 hover:border-primary hover:bg-primary/5 transition-all rounded-2xl", onClick: () => setSelectedCategory(category), children: [_jsx(Icon, { className: "w-12 h-12 text-primary" }), _jsx("span", { className: "text-base font-medium text-center px-3", children: category })] }, category));
                                    }) })] }), _jsx(AnimatePresence, { children: selectedCategory && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setSelectedCategory(null), className: "fixed inset-0 bg-black/50 z-40 lg:hidden" }), _jsxs(motion.div, { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { type: "spring", damping: 30, stiffness: 300 }, className: "fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl z-50 lg:hidden max-h-[85vh] overflow-hidden", children: [_jsxs("div", { className: "sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border/40 p-5 flex items-center justify-between", children: [_jsx("h3", { className: "text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: selectedCategory }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => setSelectedCategory(null), children: _jsx(X, { className: "w-7 h-7" }) })] }), _jsx("div", { className: "p-6 overflow-y-auto max-h-[calc(85vh-80px)]", children: _jsx("div", { className: "space-y-6", children: selectedSkills?.list.map((skill, i) => (_jsx(motion.div, { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { delay: i * 0.08 }, children: _jsx(Card, { className: "border border-white/10 bg-background/50 backdrop-blur-xl", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsx("h4", { className: "font-semibold text-lg", children: skill.name }), _jsxs("span", { className: "text-3xl font-bold text-primary", children: [skill.level, "%"] })] }), _jsx(Progress, { value: skill.level, className: "h-4 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" }), _jsx("p", { className: "mt-3 text-sm text-muted-foreground font-medium", children: skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient' })] }) }) }, skill.name))) }) })] })] })) }), _jsx(motion.div, { className: "mt-28 text-center", children: _jsx("div", { className: "inline-flex flex-wrap justify-center items-center gap-4 bg-background/40 backdrop-blur-xl border border-white/20 rounded-full px-10 py-6 shadow-2xl", children: _jsx("span", { className: "text-lg lg:text-xl font-bold text-foreground drop-shadow-md", children: "Full-Stack Capable \u2022 Network Expert \u2022 Security-Minded \u2022 Hands-On Problem Solver" }) }) })] }) })] }));
};
export default Skills;
