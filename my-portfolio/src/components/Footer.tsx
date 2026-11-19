import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";
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

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-medium tracking-tight">Kweyu Delron</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Building the future, one secure line of code at a time.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="label-mono mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-mono mb-4">Get in touch</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:kweyudelron37@gmail.com"
                  className={`${linkClass} break-all`}
                >
                  kweyudelron37@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254708821843" className={linkClass}>
                  +254 (708) 821-843
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kweyu Delron. All rights reserved.
          </p>
          <Link href="/projects" className={`${linkClass} self-start font-medium`}>
            See the work &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
