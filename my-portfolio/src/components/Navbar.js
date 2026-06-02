import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/hooks/useTheme';
export const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Services', path: '/services' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
];
const Navbar = () => {
    const [location, setLocation] = useLocation();
    const { isDark, toggle } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigateTo = (path) => {
        setLocation(path);
        setMobileMenuOpen(false);
    };
    const isActive = (path) => path === '/' ? location === '/' : location.startsWith(path);
    return (_jsx(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, className: "sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80", children: _jsx("div", { className: "mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-14 md:h-16", children: [_jsxs("button", { className: "text-xl md:text-2xl font-bold cursor-pointer overflow-hidden", onClick: () => navigateTo('/'), "aria-label": "Go to home", children: [_jsx("span", { className: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-700 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500", children: "Kweyu" }), _jsx("span", { className: "text-primary", children: ' {Delron}' })] }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [navItems.map((item) => (_jsxs("button", { onClick: () => navigateTo(item.path), className: `text-sm font-medium transition-colors relative group py-2 ${isActive(item.path) ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'}`, children: [item.label, _jsx("span", { className: `absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}` })] }, item.label))), _jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, className: "rounded-full h-10 w-10", "aria-label": "Toggle theme", children: isDark ? _jsx(Sun, { className: "h-5 w-5" }) : _jsx(Moon, { className: "h-5 w-5" }) })] }), _jsxs("div", { className: "flex items-center gap-3 md:hidden", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: toggle, className: "rounded-full h-10 w-10", "aria-label": "Toggle theme", children: isDark ? _jsx(Sun, { className: "h-5 w-5" }) : _jsx(Moon, { className: "h-5 w-5" }) }), _jsxs(Sheet, { open: mobileMenuOpen, onOpenChange: setMobileMenuOpen, children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full h-10 w-10", "aria-label": "Open menu", children: _jsx(Menu, { className: "h-6 w-6" }) }) }), _jsx(SheetContent, { side: "right", className: "w-80 bg-background/95 backdrop-blur-xl border-l border-border/50", children: _jsxs("div", { className: "flex flex-col h-full pt-6 px-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-12", children: [_jsxs("h3", { className: "text-2xl font-bold", children: ["Kweyu", _jsx("span", { className: "bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent", children: " Delron" })] }), _jsx(Button, { variant: "ghost", size: "icon", onClick: () => setMobileMenuOpen(false), "aria-label": "Close menu", children: _jsx(X, { className: "h-6 w-6" }) })] }), _jsx("nav", { className: "flex flex-col space-y-1", children: navItems.map((item) => (_jsx("button", { onClick: () => navigateTo(item.path), className: `text-left text-lg font-medium py-4 px-3 rounded-lg transition-colors ${isActive(item.path) ? 'bg-accent/50 text-foreground' : 'hover:bg-accent/30'}`, children: item.label }, item.label))) }), _jsxs("div", { className: "mt-auto pb-8", children: [_jsx(Separator, { className: "my-8" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Secure \u2022 Scalable \u2022 Innovative" })] })] }) })] })] })] }) }) }));
};
export default Navbar;
