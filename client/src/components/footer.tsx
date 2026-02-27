import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { SiX, SiCodepen } from 'react-icons/si';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com/GhostMods00', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/waleed-zaryab-79571517a', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com/O_zee9', label: 'X' },
  { icon: SiCodepen, href: 'https://codepen.io/GhostMods00', label: 'CodePen' },
  { icon: Mail, href: 'mailto:westendcrew1982@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 relative" data-testid="footer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-2 group" data-testid="footer-logo">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold font-mono">
                <span className="neon-text">WZ</span>
                <span className="text-primary animate-blink">_</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Full Stack Developer based in Sydney.
              <br />
              Building web solutions that deliver results.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-mono text-primary">QUICK LINKS</h4>
            <nav className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  data-testid={`footer-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-sm font-mono text-primary">CONNECT</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:neon-border"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      data-testid={`footer-social-${social.label.toLowerCase()}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "{currentYear} Waleed Zaryab. All rights reserved."
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and lots of <span className="font-mono text-primary">{'<code/>'}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
