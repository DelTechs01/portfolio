import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/hooks/useTheme';
import { navItems } from '@/data/nav';

const Navbar = () => {
  const [location, setLocation] = useLocation();
  const { isDark, toggle } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) =>
    path === '/' ? location === '/' : location.startsWith(path);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => navigateTo('/')}
            aria-label="Go to home"
          >
            <img
              src="/pwa-192x192.png"
              alt="Kweyu Delron"
              className="h-9 w-9 rounded-full object-cover border border-border/60 shadow-sm"
            />
            <span className="text-xl md:text-2xl font-bold overflow-hidden">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-700 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500">
                Kweyu
              </span>
              <span className="text-primary">{' {Delron}'}</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateTo(item.path)}
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  isActive(item.path) ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              className="rounded-full h-10 w-10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              className="rounded-full h-10 w-10"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl border-l border-border/50">
                <div className="flex flex-col h-full pt-6 px-6">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold">
                      Kweyu<span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"> Delron</span>
                    </h3>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => navigateTo(item.path)}
                        className={`text-left text-lg font-medium py-4 px-3 rounded-lg transition-colors ${
                          isActive(item.path) ? 'bg-accent/50 text-foreground' : 'hover:bg-accent/30'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-auto pb-8">
                    <Separator className="my-8" />
                    <p className="text-sm text-muted-foreground">Secure • Scalable • Innovative</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
