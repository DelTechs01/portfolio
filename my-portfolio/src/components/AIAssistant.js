'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Kweyu's AI assistant. I can help you learn about his skills, projects, experience, and more. What would you like to know?",
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const quickQuestions = [
        "What are Kweyu's top skills?",
        'Tell me about his projects',
        'What services does he offer?',
        'How can I contact him?',
    ];
    const getAIResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();
        if (['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'].some((greet) => lowerMessage.includes(greet))) {
            return "Hello! 👋 I'm Kweyu's AI assistant. How can I help you today?";
        }
        if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
            return 'Kweyu excels in Full-Stack Development using React, TypeScript, Node.js, Python (Django/Flask), AI/ML integration, and cybersecurity. He has 3+ years building secure, scalable apps with modern tools like AWS, Docker, TensorFlow, and M-Pesa integrations.';
        }
        if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
            return `Here are some of Kweyu's standout projects:\n\n• **UniConnectKE** – Social platform for Kenyan university students\n• **AI Learning Platform** – Personalized training with adaptive AI\n• **M-Pesa E-Commerce** – Secure online store with mobile payments\n• **Cybersecurity Audit Tool** – Automated vulnerability scanner`;
        }
        if (lowerMessage.includes('service') || lowerMessage.includes('hire') || lowerMessage.includes('offer')) {
            return 'Kweyu offers:\n• Custom Web & Mobile Development\n• AI/ML Integration & Consulting\n• E-Commerce with M-Pesa\n• Cybersecurity Audits & Hardening\n\nRates start from Ksh3,000 for small tasks. Full projects priced by scope.';
        }
        if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
            return 'You can reach Kweyu via:\n📧 kweyudelron37@gmail.com\n📱 +254 708 821 843\n\nHe typically responds within 24 hours.';
        }
        if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
            return 'Kweyu has deep AI/ML expertise with TensorFlow, PyTorch, LangChain, OpenAI APIs, and Hugging Face. He builds recommendation systems, NLP tools, chatbots, and predictive analytics.';
        }
        if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
            return 'Kweyu has 3+ years as a Full-Stack & AI Developer. He’s pursuing a B.S. in Software Engineering at Kirinyaga University and holds multiple certifications in AWS, Google Cloud, Ethical Hacking, and TensorFlow.';
        }
        return "That's an interesting question! Feel free to explore the portfolio sections or send a direct message for more personalized details. 😊";
    };
    const handleSend = () => {
        if (!input.trim())
            return;
        const userMessage = input.trim();
        setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
        setInput('');
        setIsTyping(true);
        setTimeout(() => {
            const response = getAIResponse(userMessage);
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1200);
    };
    const handleQuickQuestion = (question) => {
        setMessages((prev) => [...prev, { role: 'user', content: question }]);
        setIsTyping(true);
        setTimeout(() => {
            const response = getAIResponse(question);
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1200);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.9, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.9, y: 20 }, transition: { type: 'spring', damping: 25, stiffness: 300 }, className: "fixed bottom-24 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] rounded-2xl shadow-2xl", children: _jsxs(Card, { className: "overflow-hidden border-none shadow-2xl", children: [_jsxs(CardHeader, { className: "bg-gradient-to-r from-primary to-accent text-primary-foreground", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Sparkles, { className: "h-6 w-6" }), _jsx(CardTitle, { className: "text-xl", children: "AI Assistant" })] }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => setIsOpen(false), className: "hover:bg-white/20", children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx(Badge, { variant: "secondary", className: "mt-2 w-fit", children: "Powered by Intelligence" })] }), _jsxs(CardContent, { className: "p-0 flex flex-col h-96", children: [_jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-4", children: [messages.map((message, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: `flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`, children: [message.role === 'assistant' && (_jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10", children: _jsx(Bot, { className: "h-5 w-5 text-primary" }) })), _jsx("div", { className: `max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${message.role === 'user'
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'bg-muted'}`, children: message.content }), message.role === 'user' && (_jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10", children: _jsx(User, { className: "h-5 w-5 text-accent-foreground" }) }))] }, index))), isTyping && (_jsxs("div", { className: "flex gap-3", children: [_jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10", children: _jsx(Bot, { className: "h-5 w-5 text-primary" }) }), _jsx("div", { className: "rounded-2xl bg-muted px-4 py-3", children: _jsxs("div", { className: "flex space-x-1", children: [_jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60", style: { animationDelay: '0ms' } }), _jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60", style: { animationDelay: '150ms' } }), _jsx("span", { className: "h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60", style: { animationDelay: '300ms' } })] }) })] })), _jsx("div", { ref: messagesEndRef })] }), messages.length === 1 && (_jsxs("div", { className: "border-t border-border px-4 py-3", children: [_jsx("p", { className: "mb-3 text-xs font-medium text-muted-foreground", children: "Quick questions:" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: quickQuestions.map((q, i) => (_jsx(Button, { variant: "outline", size: "sm", className: "h-auto py-2 text-left text-xs justify-start", onClick: () => handleQuickQuestion(q), children: q }, i))) })] })), _jsx("div", { className: "border-t border-border p-4", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === 'Enter' && !e.shiftKey && handleSend(), placeholder: "Type your message...", className: "flex-1" }), _jsx(Button, { onClick: handleSend, size: "icon", disabled: !input.trim(), children: _jsx(Send, { className: "h-4 w-4" }) })] }) })] })] }) })) }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: () => setIsOpen(!isOpen), className: "fixed bottom-8 right-8 z-40 rounded-full bg-primary p-4 text-primary-foreground shadow-2xl transition-shadow hover:shadow-primary/50", "aria-label": "Open AI Assistant", children: isOpen ? _jsx(X, { className: "h-7 w-7" }) : _jsx(MessageSquare, { className: "h-7 w-7" }) })] }));
}
