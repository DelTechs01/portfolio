'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useLocation } from 'wouter';
export default function Contact() {
    const [, setLocation] = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        timeline: '',
        message: '',
    });
    const handleContactSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }
        toast.success("Message sent! I'll respond within 24 hours.");
        setFormData({ name: '', email: '', budget: '', timeline: '', message: '' });
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-background to-muted/30", children: [_jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setLocation('/'), "aria-label": "Go back", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Get in Touch" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Let's discuss your project" })] })] }) }) }), _jsx("section", { className: "py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsxs("h2", { className: "mb-4 text-4xl font-bold tracking-tight md:text-5xl", children: ["Get in Touch", _jsx("span", { className: "block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text", children: "Let's Build Something Amazing" })] }), _jsx("p", { className: "mx-auto max-w-2xl text-lg text-muted-foreground", children: "Whether it's a new project, collaboration, or just a quick question, I'm here to help." })] }), _jsxs("div", { className: "grid gap-12 md:grid-cols-2", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.2 }, className: "space-y-8", children: [_jsx(Card, { className: "overflow-hidden border-none bg-background/80 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl", children: _jsxs(CardContent, { className: "p-8", children: [_jsx("div", { className: "mb-8 flex justify-center", children: _jsx("div", { className: "relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg ring-2 ring-accent/30", children: _jsx("img", { src: "/Profile.jpg", alt: "Kweyu Delron Muyale", className: "h-full w-full object-cover", loading: "lazy" }) }) }), _jsx("div", { className: "space-y-6", children: [
                                                                {
                                                                    icon: Mail,
                                                                    label: 'Email',
                                                                    value: 'kweyudelron37@gmail.com',
                                                                    href: 'mailto:kweyudelron37@gmail.com',
                                                                },
                                                                {
                                                                    icon: Phone,
                                                                    label: 'Phone',
                                                                    value: '+254 (708) 821-843',
                                                                    href: 'tel:+254708821843',
                                                                },
                                                                { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
                                                                { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
                                                            ].map((item, i) => (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "rounded-lg bg-primary/10 p-3", children: _jsx(item.icon, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-semibold", children: item.label }), item.href ? (_jsx("a", { href: item.href, className: "text-muted-foreground transition-colors hover:text-primary", children: item.value })) : (_jsx("p", { className: "text-muted-foreground", children: item.value }))] })] }), i < 3 && _jsx(Separator, { className: "mt-6" })] }, i))) })] }) }), _jsx("div", { className: "flex justify-center gap-4 md:justify-start", children: [
                                                    { icon: Github, href: 'https://github.com/DelTechs01' },
                                                    { icon: Linkedin, href: 'https://www.linkedin.com/in/kweyu-delron-3a4060244/' },
                                                    { icon: Twitter, href: 'https://x.com/BTripatakah' },
                                                ].map((social, i) => (_jsx(Button, { variant: "outline", size: "icon", className: "rounded-full transition-transform hover:scale-110 hover:shadow-md", asChild: true, children: _jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", children: _jsx(social.icon, { className: "h-5 w-5" }) }) }, i))) })] }), _jsx(motion.div, { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.4 }, children: _jsxs(Card, { className: "overflow-hidden border-none bg-background/80 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl", children: [_jsxs(CardHeader, { className: "pb-6", children: [_jsx(CardTitle, { className: "text-2xl", children: "Send a Message" }), _jsx(CardDescription, { className: "text-base", children: "Share details about your project I'll get back to you promptly." })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleContactSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Name *" }), _jsx(Input, { id: "name", placeholder: "Your full name", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), required: true, className: "transition-shadow focus:shadow-md focus:shadow-primary/20" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email *" }), _jsx(Input, { id: "email", type: "email", placeholder: "your.email@example.com", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true, className: "transition-shadow focus:shadow-md focus:shadow-primary/20" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "budget", children: "Budget Range" }), _jsxs(Select, { value: formData.budget, onValueChange: (value) => setFormData({ ...formData, budget: value }), children: [_jsx(SelectTrigger, { id: "budget", className: "transition-shadow focus:shadow-md focus:shadow-primary/20", children: _jsx(SelectValue, { placeholder: "Select budget" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "<5k", children: "Under Ksh5,000" }), _jsx(SelectItem, { value: "5k-10k", children: "Ksh5,000 - Ksh10,000" }), _jsx(SelectItem, { value: "10k-25k", children: "Ksh10,000 - Ksh25,000" }), _jsx(SelectItem, { value: "25k+", children: "Ksh25,000+" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "timeline", children: "Timeline" }), _jsxs(Select, { value: formData.timeline, onValueChange: (value) => setFormData({ ...formData, timeline: value }), children: [_jsx(SelectTrigger, { id: "timeline", className: "transition-shadow focus:shadow-md focus:shadow-primary/20", children: _jsx(SelectValue, { placeholder: "Select timeline" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "urgent", children: "ASAP (1-2 weeks)" }), _jsx(SelectItem, { value: "soon", children: "Soon (1 month)" }), _jsx(SelectItem, { value: "flexible", children: "Flexible (2-3 months)" }), _jsx(SelectItem, { value: "planning", children: "Planning phase" })] })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "message", children: "Message *" }), _jsx(Textarea, { id: "message", placeholder: "Tell me about your project or ideas...", rows: 6, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), required: true, className: "transition-shadow focus:shadow-md focus:shadow-primary/20" })] }), _jsxs(Button, { type: "submit", className: "w-full transition-transform hover:scale-[1.02] hover:shadow-lg", children: ["Send Message", _jsx(Send, { className: "ml-2 h-4 w-4" })] })] }) })] }) })] })] }) }) })] }));
}
