import { motion } from 'framer-motion';
import { MapPin, Coffee, Clock, Code2 } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '20+', icon: Code2 },
  { label: 'Happy Clients', value: '10+', icon: Coffee },
  { label: 'Based In', value: 'Sydney', icon: MapPin },
  { label: 'Availability', value: 'Open', icon: Clock },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative" data-testid="about-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" data-testid="about-title">
            <span className="text-primary">{'>'}</span> ABOUT<span className="text-primary">_</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-black/30 border border-primary/15 rounded-lg overflow-hidden mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-black/40">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-2 font-mono">about.md</span>
          </div>

          <div className="p-6 md:p-8 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm <span className="text-foreground font-medium">Waleed Zaryab</span> — a full stack developer based in Sydney, Australia.
              I build web applications that are fast, secure, and built to last.
            </p>
            <p>
              I work with startups, small businesses, and individuals who need a reliable developer
              to bring their ideas to life. Whether it's a landing page, a full-stack SaaS product,
              or an API integration — I handle the entire process from planning to deployment.
            </p>
            <p>
              My stack centres around <span className="neon-text">React</span>, <span className="cyan-text">Node.js</span>,
              <span className="text-secondary"> TypeScript</span>, and modern databases like PostgreSQL and MongoDB.
              I focus on writing clean code, following security best practices, and delivering on time.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="bg-black/30 border border-primary/15 rounded-lg p-5 text-center hover:border-primary/40 transition-colors"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold font-mono neon-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
