import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Server, HeadphonesIcon, Network, Shield, Blocks, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLocation } from 'wouter';
const Services = () => {
    const [, setLocation] = useLocation();
    const services = [
        {
            title: 'Backend Development & Web Applications',
            description: 'Building secure, scalable, and high-performance server-side solutions.',
            icon: Server,
            features: [
                'RESTful API Design & Development',
                'Database Design & Optimization (SQL/NoSQL)',
                'Server-Side Logic & Authentication',
                'Scalable Backend Architecture',
                'Integration with Frontend Frameworks',
                'Performance & Security Best Practices'
            ],
            price: 'From $3,000',
            metrics: 'Efficient, maintainable systems with 99.9% uptime'
        },
        {
            title: 'IT Support & Technical Assistance',
            description: 'Reliable troubleshooting and setup for hardware, software, and systems.',
            icon: HeadphonesIcon,
            features: [
                'Hardware & Software Troubleshooting',
                'Computer & Server Setup/Maintenance',
                'Operating System Installation & Configuration',
                'Data Backup & Recovery Solutions',
                'Printer, Peripheral & Device Support',
                'Remote & On-Site Technical Assistance'
            ],
            price: 'From $500',
            metrics: 'Fast resolution with minimal downtime'
        },
        {
            title: 'Network Engineering & Management',
            description: 'Designing and maintaining robust, secure wired and wireless networks.',
            icon: Network,
            features: [
                'Network Design & Implementation',
                'Router, Switch & Firewall Configuration',
                'Internet & WiFi Installation/Optimization',
                'Network Performance Monitoring',
                'VPN Setup & Remote Access',
                'Bandwidth Management & QoS'
            ],
            price: 'From $1,500',
            metrics: 'Stable, high-speed connectivity for homes & offices'
        },
        {
            title: 'Cybersecurity Services',
            description: 'Protecting systems and data with proactive security measures.',
            icon: Shield,
            features: [
                'Vulnerability Assessments & Scans',
                'Firewall & Intrusion Detection Setup',
                'Endpoint Protection & Antivirus Management',
                'Secure Network Configuration',
                'Data Encryption & Access Control',
                'Security Awareness Guidance'
            ],
            price: 'From $2,000',
            metrics: 'Significant reduction in security risks'
        },
        {
            title: 'Blockchain & Emerging Tech Solutions',
            description: 'Exploring and implementing decentralized and innovative technologies.',
            icon: Blocks,
            features: [
                'Blockchain Application Consulting',
                'Smart Contract Development Basics',
                'Decentralized System Design',
                'Cryptocurrency Wallet Setup',
                'Proof-of-Concept Prototypes',
                'Integration with Existing Systems'
            ],
            price: 'From $4,000',
            metrics: 'Future-ready solutions with transparency & security'
        },
        {
            title: 'Home Entertainment & Streaming Setup',
            description: 'Professional setup for seamless movie and live sports streaming.',
            icon: Tv,
            features: [
                'High-Speed WiFi Optimization for Streaming',
                'Smart TV & Streaming Device Configuration',
                'IPTV / Football Streaming Setup (Legal Platforms)',
                'Multi-Device Streaming Solutions',
                '4K/HDR Optimization',
                'Parental Controls & Safe Streaming'
            ],
            price: 'From $800',
            metrics: 'Buffer-free, high-quality entertainment experience'
        },
    ];
    const scrollToContact = () => {
        setLocation('/contact');
    };
    return (_jsxs("div", { className: "min-h-screen bg-background relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-20 pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" })] }), _jsx(motion.div, { initial: { y: -100 }, animate: { y: 0 }, className: "sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/90", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5", children: _jsxs("div", { className: "flex items-center gap-5", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setLocation('/'), children: _jsx(ChevronLeft, { className: "w-6 h-6" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent", children: "Services" }), _jsx("p", { className: "text-muted-foreground", children: "Professional solutions tailored to your needs" })] })] }) }) }), _jsx("section", { className: "py-28 lg:py-40 relative z-10", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9 }, className: "text-center mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent", children: "My Services" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "From secure backend systems and robust networks to home entertainment setups I deliver reliable, practical, and professional technical solutions." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10", children: services.map((service, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.15, duration: 0.8 }, whileHover: { y: -10 }, className: "group", children: _jsxs(Card, { className: "h-full border-border/50 bg-background/60 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-700", children: [_jsxs(CardHeader, { className: "pb-8", children: [_jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors", children: _jsx(service.icon, { className: "w-9 h-9 text-primary" }) }), _jsx(CardTitle, { className: "text-2xl font-bold leading-tight", children: service.title }), _jsx(CardDescription, { className: "text-base mt-4 leading-relaxed", children: service.description })] }), _jsxs(CardContent, { className: "space-y-8", children: [_jsx("ul", { className: "space-y-4", children: service.features.map((feature, i) => (_jsxs("li", { className: "flex items-start gap-4", children: [_jsx(CheckCircle2, { className: "w-6 h-6 text-primary flex-shrink-0 mt-0.5" }), _jsx("span", { className: "text-muted-foreground leading-relaxed", children: feature })] }, i))) }), _jsx(Separator, { className: "my-6" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "bg-muted/40 rounded-xl p-4", children: [_jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Expected Outcome" }), _jsx("p", { className: "font-bold text-foreground", children: service.metrics })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: service.price }), _jsx(Button, { size: "lg", onClick: scrollToContact, className: "shadow-lg hover:shadow-xl transition-shadow", children: "Inquire Now" })] })] })] })] }) }, index))) }), _jsxs(motion.div, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, className: "text-center mt-32", children: [_jsx("p", { className: "text-2xl text-muted-foreground mb-8", children: "Need a reliable technical partner for your project or setup?" }), _jsx(Button, { size: "lg", className: "px-12 py-8 text-xl shadow-2xl bg-primary hover:bg-primary/90", onClick: scrollToContact, children: "Get in Touch" })] })] }) })] }));
};
export default Services;
