import { useLocation } from "wouter";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/data/nav";

const socialLinks = [
  { icon: Github, href: "https://github.com/DelTechs01", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/delron-zynthos-labs-3a4060244",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/BTripatakah", label: "X" },
];

export default function Footer() {
  const [, setLocation] = useLocation();
  const navigateTo = (path: string) => setLocation(path);

  return (
    <footer className="bg-card border-t border-border pt-14 pb-28 md:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Kweyu Delron
            </h3>
            <p className="text-muted-foreground mb-5 max-w-xs text-sm">
              Building the future, one secure line of code at a time.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:kweyudelron37@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  kweyudelron37@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+254708821843"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +254 (708) 821-843
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Kweyu Delron . All rights reserved.
          </p>
          <button
            onClick={() => navigateTo("/projects")}
            className="self-start text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            See the work &rarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
