import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, ChevronLeft, Trophy, Star, CheckCircle2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
const Education = ({ onBack }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const degrees = [
        {
            degree: 'Bachelor of Science in Software Engineering',
            institution: 'Kirinyaga University {KyU}',
            location: 'Kirinyaga, Kutus',
            period: '2022 - 2026',
            gpa: '3.8/4.0',
            specialization: 'Software Engineering - Current',
            logo: 'https://www.kyu.ac.ke/images/kyu_logosmall2.png',
            achievements: [
                'Student Body President',
                'Hackathon Winner (3x)',
                'Outstanding Senior Award'
            ],
            coursework: [
                'Data Structures & Algorithms',
                'Operating Systems',
                'Database Systems',
                'Web Development',
                'Software Engineering',
                'Computer Networks'
            ]
        }
    ];
    const certifications = [
        {
            id: 1,
            name: 'Software Development February 2025 - Cohort VII',
            issuer: 'Power Learn Project',
            issuerLogo: 'https://academy.powerlearnprojectafrica.org/assets/logo.CAPAuQa5.png',
            category: 'Programming',
            issueDate: 'January 2024',
            shortDescription: 'Certified in MERN full-stack software development through the February 2025 Cohort VII Software Development program.',
            fullDescription: 'Successfully completed a 16-week program in Software Development covering Python, Web Technologies, Database Management, Startup Building & Employability and Software Engineering Essentials, with a specialization in Full-Stack Development MERN Stack.',
            message: 'Mastery of Full Stack Development(MERN).',
            imageUrl: '/delron Full-Stack Development MERN Stack certificate_page-0001.jpg'
        },
        {
            id: 2,
            name: 'Injective: The Layer 1 Blockchain Build For Finance',
            issuer: 'Binance Academy',
            issuerLogo: 'https://public.bnbstatic.com/static/academy/uploads/a3cd133a11cb4995908e34af5321be6b.png',
            category: 'Blockchain Technology',
            issueDate: 'December 15, 2025',
            shortDescription: 'Certified in building and understanding DeFi-focused applications on the Injective Layer 1 blockchain.',
            fullDescription: "An in-depth understanding of Injective's architecture, Web3 modules, INJ token, Community BuyBack, tokenization infrastructure, and performance metrics",
            message: 'Instructor : Brandon Goss - Head of Research at Injective',
            imageUrl: '/Injectictive-Layer1-Certificate_page-0001.jpg'
        },
        {
            id: 3,
            name: 'The fundamentals of crypto & blockchain',
            issuer: 'Binance Academy',
            issuerLogo: 'https://public.bnbstatic.com/static/academy/uploads/a3cd133a11cb4995908e34af5321be6b.png',
            category: 'Blockchain Technology',
            issueDate: 'December 17, 2025',
            shortDescription: 'Certified in blockchain fundamentals, including cryptocurrencies, DeFi, Web3, and investment basics.',
            fullDescription: 'The Beginner Track provided an introductory overview of the blockchain ecosystem and equiped me with the fundamental concepts needed to navigate the cryptocurrency space. This course encompassed a series of modules focusing on the basics of blockchain technology, cryptocurrencies, decentralized finance (DeFi), Web3, and trading and investing strategies.',
            message: 'Beginner-level understanding of the blockchain ecosystem.',
            imageUrl: '/beginer-track-blockchain-NFT-Award.jpeg'
        },
        {
            id: 4,
            name: 'Python And Flask Framework Complete Course',
            issuer: 'Udemy',
            issuerLogo: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
            category: 'Programming',
            issueDate: 'August 2024',
            shortDescription: 'Certified in Python programming and Flask framework development for building secure, scalable web applications.',
            fullDescription: 'This certificate above verifies that Kweyu Delron successfully completed the course Python And Flask Framework Complete Course on 11/08/2024 as taught by Horizon Tech on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.',
            message: 'Python drives intelligent automation and data-driven software solutions.',
            imageUrl: '/Udemy-Flask-Certificate.jpg'
        }
    ];
    const categories = ['all', ...Array.from(new Set(certifications.map((c) => c.category)))];
    const filteredCertifications = selectedCategory === 'all'
        ? certifications
        : certifications.filter(cert => cert.category === selectedCategory);
    const stats = [
        { label: 'Degrees', value: degrees.length, icon: GraduationCap },
        { label: 'Certifications', value: certifications.length, icon: Award },
        { label: 'Years Learning', value: '3+', icon: BookOpen },
        { label: 'Specializations', value: '4', icon: Star }
    ];
    const timelineItems = [
        ...degrees.map(d => ({ ...d, type: 'degree', sortYear: parseInt(d.period.split(' - ')[1], 10) })),
        ...certifications.map(c => ({ ...c, type: 'cert', sortYear: parseInt(c.issueDate.split(' ')[1], 10) }))
    ].sort((a, b) => b.sortYear - a.sortYear);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-background to-muted/20", children: [_jsx("div", { className: "sticky top-0 z-50 bg-background/80 border-b border-border backdrop-blur-xl", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: onBack, children: _jsx(ChevronLeft, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Education & Certifications" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Academic background and professional qualifications" })] })] }) }) }), _jsx("section", { className: "relative py-20 bg-gradient-to-br from-primary/5 to-accent/5", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center", children: [_jsxs(Badge, { variant: "secondary", className: "mb-4 px-4 py-1.5 text-sm font-medium", children: [_jsx(Trophy, { className: "w-4 h-4 mr-2" }), "Lifelong Learner"] }), _jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight", children: ["Pursuing Excellence Through", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent", children: " Continuous Education" })] }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Grounded in Software Engineering, my academic journey spans artificial intelligence, cybersecurity, ethical hacking, blockchain technologies, and network engineering. I continuously strengthen my skills through rigorous coursework, hands-on system development, and practical network installation experience, with a strong focus on building secure, scalable, and future-ready digital solutions." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12", children: stats.map((stat, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "text-center border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm", children: _jsxs(CardContent, { className: "p-6", children: [_jsx(stat.icon, { className: "w-8 h-8 mx-auto mb-3 text-primary" }), _jsx("p", { className: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1", children: stat.value }), _jsx("p", { className: "text-sm text-muted-foreground uppercase tracking-wide", children: stat.label })] }) }) }, stat.label))) })] }) }), _jsx("section", { className: "py-20 bg-background", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-12", children: [_jsx(GraduationCap, { className: "w-8 h-8 text-primary" }), _jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "Academic Qualifications" })] }), _jsx("div", { className: "space-y-12", children: degrees.map((edu, index) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, children: _jsx(Card, { className: "overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-muted/30 backdrop-blur-sm", children: _jsx(CardContent, { className: "p-6 md:p-8", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6 md:gap-8", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-24 h-24 rounded-xl overflow-hidden border border-border shadow-sm bg-white p-4", children: _jsx("img", { src: edu.logo, alt: `${edu.institution} logo`, className: "w-full h-full object-contain" }) }) }), _jsxs("div", { className: "flex-1 space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-3 tracking-tight", children: edu.degree }), _jsxs("div", { className: "flex flex-wrap gap-4 text-muted-foreground text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(BookOpen, { className: "w-4 h-4" }), _jsx("span", { children: edu.institution })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: edu.location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { children: edu.period })] })] })] }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsxs(Badge, { variant: "secondary", className: "px-3 py-1", children: [_jsx(Star, { className: "w-3 h-3 mr-1.5" }), "GPA: ", edu.gpa] }), _jsx(Badge, { variant: "secondary", className: "px-3 py-1", children: edu.specialization })] }), _jsxs(Tabs, { defaultValue: "achievements", className: "w-full mt-4", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [_jsx(TabsTrigger, { value: "achievements", children: "Achievements" }), _jsx(TabsTrigger, { value: "coursework", children: "Coursework" })] }), _jsx(TabsContent, { value: "achievements", className: "mt-6", children: _jsx("ul", { className: "grid md:grid-cols-2 gap-3", children: edu.achievements.map((achievement, i) => (_jsxs("li", { className: "flex items-start gap-2 text-sm", children: [_jsx(CheckCircle2, { className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0" }), _jsx("span", { children: achievement })] }, i))) }) }), _jsx(TabsContent, { value: "coursework", className: "mt-6", children: _jsx("div", { className: "flex flex-wrap gap-2", children: edu.coursework.map((course, i) => (_jsx(Badge, { variant: "outline", className: "px-3 py-1 text-sm", children: course }, i))) }) })] })] })] }) }) }) }, index))) })] }) }), _jsx("section", { className: "py-20 bg-muted/50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-12", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Award, { className: "w-8 h-8 text-primary" }), _jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "Professional Certifications" })] }), _jsxs(Badge, { variant: "outline", className: "px-3 py-1 text-sm font-medium", children: [certifications.length, " Active"] })] }), _jsx("div", { className: "flex flex-wrap gap-3 mb-10", children: categories.map((category) => (_jsxs(Button, { variant: selectedCategory === category ? 'default' : 'outline', size: "sm", className: "rounded-full capitalize", onClick: () => setSelectedCategory(category), children: [category === 'all' ? 'All' : category, category !== 'all' && (_jsx(Badge, { variant: "secondary", className: "ml-2 px-2 py-0.5 text-xs", children: certifications.filter(c => c.category === category).length }))] }, category))) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredCertifications.map((cert, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, children: _jsxs(Card, { className: "h-full flex flex-col border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "flex justify-between items-start mb-4", children: _jsx(Badge, { variant: "secondary", children: cert.category }) }), _jsx(CardTitle, { className: "text-xl leading-tight", children: cert.name }), _jsxs(CardDescription, { className: "mt-2 flex items-center gap-2", children: [_jsx("div", { className: "w-6 h-6 rounded-full overflow-hidden border", children: _jsx("img", { src: cert.issuerLogo, alt: cert.issuer, className: "w-full h-full object-contain" }) }), _jsx("span", { children: cert.issuer })] })] }), _jsxs(CardContent, { className: "flex-1 flex flex-col justify-between", children: [_jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: cert.shortDescription }), _jsx("div", { className: "mt-8", children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsxs(Button, { variant: "default", className: "w-full", children: [_jsx(Eye, { className: "w-4 h-4 mr-2" }), "View Certificate"] }) }), _jsxs(DialogContent, { className: "max-w-4xl p-0 overflow-hidden", children: [_jsx("div", { className: "relative", children: _jsx("img", { src: cert.imageUrl, alt: `${cert.name} Certificate`, className: "w-full h-auto" }) }), _jsxs("div", { className: "p-8 space-y-6 bg-background", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "text-2xl", children: cert.name }), _jsxs(DialogDescription, { className: "text-base", children: ["Issued by ", _jsx("span", { className: "font-semibold", children: cert.issuer }), " in ", cert.issueDate] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-muted-foreground leading-relaxed", children: cert.fullDescription }), _jsxs("blockquote", { className: "border-l-4 border-primary pl-6 italic text-foreground/80", children: ["\"", cert.message, "\""] })] }), _jsx("div", { className: "flex gap-3 pt-4", children: _jsx(Button, { variant: "secondary", className: "flex-1", asChild: true, children: _jsx("a", { href: cert.imageUrl, download: `${cert.name.replace(/\s+/g, '_')}.png`, children: "Download Certificate" }) }) })] })] })] }) })] })] }) }, cert.id))) })] }) }), _jsx("section", { className: "py-20 bg-background", children: _jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-12 text-center tracking-tight", children: "Educational Timeline" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border/50 rounded-full" }), _jsx("div", { className: "space-y-16", children: timelineItems.map((item, index) => {
                                        const isLeft = index % 2 === 0;
                                        return (_jsxs(motion.div, { initial: { opacity: 0, x: isLeft ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, className: `flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`, children: [_jsx("div", { className: `flex-1 ${isLeft ? 'text-right' : 'text-left'}`, children: _jsx(Card, { className: "inline-block max-w-md border-none shadow-sm hover:shadow-md transition-shadow bg-muted/30 backdrop-blur-sm", children: _jsxs(CardContent, { className: "p-4", children: [_jsxs(Badge, { variant: "secondary", className: "mb-2 px-3 py-1 text-xs", children: [item.type === 'degree' ? _jsx(GraduationCap, { className: "w-3 h-3 mr-1" }) : _jsx(Award, { className: "w-3 h-3 mr-1" }), item.type === 'degree' ? item.period : item.issueDate] }), _jsx("h4", { className: "font-bold text-lg mb-1", children: item.type === 'degree' ? item.degree : item.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: item.type === 'degree' ? item.institution : item.issuer })] }) }) }), _jsx("div", { className: "relative z-10", children: _jsx("div", { className: "w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md" }) }), _jsx("div", { className: "flex-1" })] }, index));
                                    }) })] })] }) })] }));
};
export default Education;
