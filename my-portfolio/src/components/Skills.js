import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code2, Database, Network, Shield, Blocks, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
const Skills = () => {
    const skills = {
        Programming: {
            description: 'Clean, efficient, maintainable code across multiple languages.',
            list: [
                { name: 'Python (Flask, Django)', level: 85 },
                { name: 'JavaScript (React, Node.js)', level: 80 },
                { name: 'PHP', level: 75 },
                { name: 'Java', level: 70 },
                { name: 'HTML & CSS', level: 90 },
                { name: 'SQL', level: 85 },
            ],
        },
        'Backend & Databases': {
            description: 'Robust APIs and well-designed relational data layers.',
            list: [
                { name: 'RESTful API Development', level: 82 },
                { name: 'Database Design', level: 80 },
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 78 },
                { name: 'Authentication Systems', level: 80 },
                { name: 'Server-Side Logic', level: 83 },
            ],
        },
        'Networking & IT Support': {
            description: 'Setting up, troubleshooting, and optimizing networks and systems.',
            list: [
                { name: 'Network Configuration', level: 88 },
                { name: 'WiFi & Internet Setup', level: 90 },
                { name: 'Hardware Troubleshooting', level: 85 },
                { name: 'Server Maintenance', level: 80 },
                { name: 'Network Monitoring', level: 82 },
                { name: 'Windows & Linux Admin', level: 78 },
            ],
        },
        Cybersecurity: {
            description: 'Security principles to protect systems and data from threats.',
            list: [
                { name: 'System & Network Security', level: 82 },
                { name: 'Vulnerability Assessment', level: 78 },
                { name: 'Secure Coding Practices', level: 80 },
                { name: 'Firewall & Encryption', level: 75 },
                { name: 'Kali Linux Tools', level: 72 },
            ],
        },
        'Emerging Technologies': {
            description: 'Blockchain and AI for innovative, future-ready solutions.',
            list: [
                { name: 'Blockchain Fundamentals', level: 75 },
                { name: 'Smart Contracts Basics', level: 70 },
                { name: 'AI-Assisted Automation', level: 72 },
                { name: 'Decentralized Systems', level: 68 },
            ],
        },
        'Tools & Platforms': {
            description: 'Modern tools and environments for efficient workflows.',
            list: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'VS Code', level: 92 },
                { name: 'NetBeans', level: 80 },
                { name: 'Figma (UI/UX Design)', level: 75 },
                { name: 'Linux Command Line', level: 82 },
            ],
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
    const tier = (level) => (level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : 'Proficient');
    return (_jsxs("div", { className: "min-h-screen bg-background relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-25 pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse delay-700" })] }), _jsx("section", { className: "py-20 lg:py-28 relative z-10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent", children: "Skills & Expertise" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "A practical, hands-on skill set built through real projects, IT support, and continuous learning." })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: Object.entries(skills).map(([category, data], index) => {
                                const Icon = categoryIcons[category];
                                return (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: (index % 2) * 0.1, duration: 0.5 }, children: _jsx(Card, { className: "h-full border-border/50 bg-background/60 backdrop-blur hover:shadow-xl hover:border-primary/30 transition-all duration-300", children: _jsxs(CardContent, { className: "p-6 sm:p-7", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0", children: _jsx(Icon, { className: "w-6 h-6 text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold leading-tight", children: category }), _jsx("p", { className: "text-sm text-muted-foreground", children: data.description })] })] }), _jsx("div", { className: "space-y-4", children: data.list.map((skill) => (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [_jsx("span", { className: "text-sm font-medium", children: skill.name }), _jsxs("span", { className: "text-xs font-semibold text-muted-foreground", children: [tier(skill.level), " \u00B7 ", skill.level, "%"] })] }), _jsx(Progress, { value: skill.level, className: "h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" })] }, skill.name))) })] }) }) }, category));
                            }) }), _jsx(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "mt-16 text-center", children: _jsx("div", { className: "inline-flex flex-wrap justify-center items-center gap-3 bg-background/60 backdrop-blur border border-border/50 rounded-full px-8 py-4 shadow-lg", children: _jsx("span", { className: "text-base lg:text-lg font-semibold", children: "Full-Stack Capable \u2022 Network Expert \u2022 Security-Minded \u2022 Hands-On Problem Solver" }) }) })] }) })] }));
};
export default Skills;
