import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Eye, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
const AccessibilityControls = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    useEffect(() => {
        const storedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
        const storedHighContrast = localStorage.getItem('highContrast') === 'true';
        const storedFontSize = parseInt(localStorage.getItem('fontSize') || '100');
        setReducedMotion(storedReducedMotion);
        setHighContrast(storedHighContrast);
        setFontSize(storedFontSize);
        if (storedReducedMotion) {
            document.documentElement.classList.add('reduce-motion');
        }
        if (storedHighContrast) {
            document.documentElement.classList.add('high-contrast');
        }
        document.documentElement.style.fontSize = `${storedFontSize}%`;
    }, []);
    const toggleReducedMotion = () => {
        const newValue = !reducedMotion;
        setReducedMotion(newValue);
        localStorage.setItem('reducedMotion', newValue.toString());
        if (newValue) {
            document.documentElement.classList.add('reduce-motion');
        }
        else {
            document.documentElement.classList.remove('reduce-motion');
        }
    };
    const toggleHighContrast = () => {
        const newValue = !highContrast;
        setHighContrast(newValue);
        localStorage.setItem('highContrast', newValue.toString());
        if (newValue) {
            document.documentElement.classList.add('high-contrast');
        }
        else {
            document.documentElement.classList.remove('high-contrast');
        }
    };
    const handleFontSizeChange = (value) => {
        const newSize = value[0];
        setFontSize(newSize);
        localStorage.setItem('fontSize', newSize.toString());
        document.documentElement.style.fontSize = `${newSize}%`;
    };
    const resetSettings = () => {
        setReducedMotion(false);
        setHighContrast(false);
        setFontSize(100);
        localStorage.removeItem('reducedMotion');
        localStorage.removeItem('highContrast');
        localStorage.removeItem('fontSize');
        document.documentElement.classList.remove('reduce-motion', 'high-contrast');
        document.documentElement.style.fontSize = '100%';
    };
    return (_jsxs(_Fragment, { children: [_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 }, className: "fixed top-24 right-8 z-50 w-80 max-w-[calc(100vw-2rem)]", children: _jsxs(Card, { className: "shadow-2xl border-2", children: [_jsx(CardHeader, { className: "bg-accent text-accent-foreground", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Eye, { className: "w-5 h-5" }), _jsx(CardTitle, { className: "text-lg", children: "Accessibility" })] }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => setIsOpen(false), className: "text-accent-foreground hover:bg-accent-foreground/20", children: _jsx(X, { className: "w-5 h-5" }) })] }) }), _jsxs(CardContent, { className: "p-6 space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "space-y-0.5", children: [_jsx(Label, { htmlFor: "reduced-motion", className: "text-base font-semibold", children: "Reduce Motion" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Minimize animations" })] }), _jsx(Switch, { id: "reduced-motion", checked: reducedMotion, onCheckedChange: toggleReducedMotion })] }), _jsx(Separator, {}), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "space-y-0.5", children: [_jsx(Label, { htmlFor: "high-contrast", className: "text-base font-semibold", children: "High Contrast" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Increase color contrast" })] }), _jsx(Switch, { id: "high-contrast", checked: highContrast, onCheckedChange: toggleHighContrast })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Label, { htmlFor: "font-size", className: "text-base font-semibold", children: "Text Size" }), _jsxs("span", { className: "text-sm text-muted-foreground", children: [fontSize, "%"] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Button, { variant: "outline", size: "icon", onClick: () => handleFontSizeChange([Math.max(80, fontSize - 10)]), disabled: fontSize <= 80, children: _jsx(Minus, { className: "w-4 h-4" }) }), _jsx(Slider, { id: "font-size", value: [fontSize], onValueChange: handleFontSizeChange, min: 80, max: 150, step: 10, className: "flex-1" }), _jsx(Button, { variant: "outline", size: "icon", onClick: () => handleFontSizeChange([Math.min(150, fontSize + 10)]), disabled: fontSize >= 150, children: _jsx(Plus, { className: "w-4 h-4" }) })] })] }), _jsx(Separator, {}), _jsx(Button, { variant: "outline", className: "w-full", onClick: resetSettings, children: "Reset to Defaults" }), _jsx("div", { className: "bg-muted/50 rounded-lg p-3", children: _jsx("p", { className: "text-xs text-muted-foreground", children: "This site is designed to meet WCAG 2.1 AA standards. For additional assistance, please contact us." }) })] })] }) })) }), _jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, className: "fixed top-20 right-8 z-40", children: _jsx(Button, { variant: "outline", size: "icon", onClick: () => setIsOpen(!isOpen), className: "rounded-full shadow-lg", "aria-label": "Accessibility Settings", children: _jsx(Settings, { className: "w-5 h-5" }) }) })] }));
};
export default AccessibilityControls;
