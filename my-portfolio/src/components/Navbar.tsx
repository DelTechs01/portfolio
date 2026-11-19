import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/hooks/useTheme';
import { navItems } from '@/data/nav';

const Navbar = () => {
  const [location] = useLocation();
  const { isDark, toggle } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location === '/' : location.startsWith(path);

  const themeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  const ThemeToggle = (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      className="rounded-full size-10 text-muted-foreground hover:text-foreground"
      aria-label={themeLabel}
      title={themeLabel}
    >
      {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </Button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          aria-label="Kweyu Delron - home"
          className="group flex items-center gap-2.5 text-[15px] font-medium tracking-tight"
        >
          <span
            aria-hidden
            className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)] transition-transform duration-300 group-hover:scale-125"
          />
          Kweyu Delron
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                isActive(item.path)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden className="mx-2 h-4 w-px bg-border" />
          {ThemeToggle}
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-1 md:hidden">
          {ThemeToggle}

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full size-10"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>

              <div className="flex h-full flex-col px-6 pt-16 pb-8">
                <p className="label-mono mb-4">Menu</p>
                <nav aria-label="Mobile" className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      className={`border-b border-border py-4 text-2xl font-medium tracking-tight transition-colors ${
                        isActive(item.path)
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <p className="mt-auto text-sm text-muted-foreground">
                  Secure • Scalable • Innovative
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
