import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { SiX, SiCodepen } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useMemo } from 'react';

function MatrixRain() {
  const columns = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const count = 30;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i / count) * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      chars: Array.from({ length: 25 }, () => chars[Math.floor(Math.random() * chars.length)]).join('\n'),
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
      {columns.map((col) => (
        <motion.div
          key={col.id}
          className="absolute text-primary font-mono text-xs leading-tight"
          style={{ left: col.left }}
          initial={{ y: '-100%' }}
          animate={{ y: '100vh' }}
          transition={{
            duration: col.duration,
            repeat: Infinity,
            delay: col.delay,
            ease: 'linear',
          }}
        >
          {col.chars}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const tagline = "BUILD. SHIP. SCALE.";

  const terminalCommands = useMemo(() => [
    { text: "$ init project --type=fullstack" },
    { text: "Setting up development environment..." },
    { text: "$ deploy --target=production" },
    { text: "Deployment successful. Your app is live." },
  ], []);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < tagline.length) {
        setTypedText(tagline.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    let lineIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (lineIndex < terminalCommands.length) {
          const cmd = terminalCommands[lineIndex];
          if (cmd) {
            setTerminalLines(prev => [...prev, cmd.text]);
          }
          lineIndex++;
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [terminalCommands]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
      data-testid="hero-section"
    >
      <MatrixRain />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-primary mb-6 tracking-widest"
        >
          WALEED ZARYAB // FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          data-testid="hero-name"
        >
          <span className="gradient-text">
            {typedText}
            <span className="animate-blink text-primary">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-3xl mx-auto"
          data-testid="hero-role"
        >
          I help businesses launch <span className="neon-text">high-performance</span> web applications.
          <br className="hidden sm:block" />
          From concept to deployment, I handle the full stack.
        </motion.p>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="terminal-glass rounded-lg p-4 max-w-md mx-auto mt-8 text-left"
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-primary/20">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-2 font-mono">~/projects</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            {terminalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={line.startsWith('$') ? 'text-primary' : 'text-muted-foreground'}
              >
                {line}
              </motion.p>
            ))}
            <span className="text-primary animate-blink">_</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            className="min-w-[160px] rounded-full glow-primary neon-border"
            data-testid="button-view-services"
          >
            VIEW SERVICES
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="min-w-[160px] rounded-full glass"
            data-testid="button-contact"
          >
            LET'S TALK
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="flex items-center justify-center gap-4"
        >
          <Button size="icon" variant="ghost" className="rounded-full hover:neon-border" asChild>
            <a href="https://github.com/GhostMods00" target="_blank" rel="noopener noreferrer" data-testid="social-github">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:neon-border" asChild>
            <a href="https://www.linkedin.com/in/waleed-zaryab-79571517a" target="_blank" rel="noopener noreferrer" data-testid="social-linkedin">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:neon-border" asChild>
            <a href="https://x.com/O_zee9" target="_blank" rel="noopener noreferrer" data-testid="social-x">
              <SiX className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:neon-border" asChild>
            <a href="https://codepen.io/GhostMods00" target="_blank" rel="noopener noreferrer" data-testid="social-codepen">
              <SiCodepen className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full hover:neon-border" asChild>
            <a href="mailto:westendcrew1982@gmail.com" data-testid="social-email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Scroll Down</span>
        <motion.button
          onClick={() => scrollToSection('services')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="p-2 rounded-full glass neon-border animate-glow-pulse"
          data-testid="scroll-indicator"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
}
