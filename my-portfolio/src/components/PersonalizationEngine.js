import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const PersonalizationEngine = ({ onPersonalize }) => {
    const [visitorType, setVisitorType] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    useEffect(() => {
        const stored = localStorage.getItem('visitorType');
        const isDismissed = localStorage.getItem('personalizationDismissed') === 'true';
        if (stored) {
            setVisitorType(stored);
            onPersonalize?.(stored);
        }
        else if (!isDismissed) {
            // Show prompt after 3 seconds
            const timer = setTimeout(() => {
                setShowPrompt(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [onPersonalize]);
    const handleSelection = (type) => {
        setVisitorType(type);
        setShowPrompt(false);
        if (type) {
            localStorage.setItem('visitorType', type);
            onPersonalize?.(type);
        }
    };
    const handleDismiss = () => {
        setShowPrompt(false);
        setDismissed(true);
        localStorage.setItem('personalizationDismissed', 'true');
    };
    if (!showPrompt || dismissed)
        return null;
    return (_jsx(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 }, className: "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4", children: _jsx(Card, { className: "shadow-2xl border-2 border-primary/20", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Target, { className: "w-5 h-5 text-primary" }), _jsx("h3", { className: "font-semibold", children: "Personalize Your Experience" })] }), _jsx(Button, { variant: "ghost", size: "icon", onClick: handleDismiss, className: "h-8 w-8", children: _jsx(X, { className: "w-4 h-4" }) })] }), _jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "I'm here to help! What brings you to my portfolio today?" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-3", children: [_jsxs(Button, { variant: "outline", className: "h-auto py-4 flex flex-col items-start gap-2 hover:border-primary", onClick: () => handleSelection('developer'), children: [_jsx(Badge, { variant: "secondary", className: "mb-1", children: "Developer" }), _jsx("span", { className: "text-sm text-left", children: "Exploring tech stack & architecture" })] }), _jsxs(Button, { variant: "outline", className: "h-auto py-4 flex flex-col items-start gap-2 hover:border-primary", onClick: () => handleSelection('client'), children: [_jsx(Badge, { variant: "secondary", className: "mb-1", children: "Client" }), _jsx("span", { className: "text-sm text-left", children: "Looking for development services" })] }), _jsxs(Button, { variant: "outline", className: "h-auto py-4 flex flex-col items-start gap-2 hover:border-primary", onClick: () => handleSelection('recruiter'), children: [_jsx(Badge, { variant: "secondary", className: "mb-1", children: "Recruiter" }), _jsx("span", { className: "text-sm text-left", children: "Reviewing experience & skills" })] })] }), _jsx(Button, { variant: "ghost", size: "sm", className: "w-full mt-3 text-xs", onClick: handleDismiss, children: "Skip personalization" })] }) }) }));
};
export default PersonalizationEngine;
