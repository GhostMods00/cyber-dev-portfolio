import { motion } from 'framer-motion';
import { Globe, Server, Smartphone, Shield, Rocket, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web apps built with React, Next.js, and modern frameworks. Fast, responsive, and optimized for SEO.',
    features: ['React / Next.js', 'Responsive Design', 'Performance Optimized', 'SEO Ready'],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable server-side solutions with Node.js and Express. RESTful APIs, database design, and third-party integrations.',
    features: ['Node.js / Express', 'REST APIs', 'Database Design', 'Authentication'],
  },
  {
    icon: Smartphone,
    title: 'Full Stack Apps',
    description: 'End-to-end application development from database to UI. Complete solutions that scale with your business.',
    features: ['Full Stack Architecture', 'Real-time Features', 'Cloud Deployment', 'CI/CD Pipelines'],
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    description: 'Secure authentication systems, data protection, and security best practices baked into every project.',
    features: ['OAuth / JWT', 'Data Encryption', 'Security Audits', 'Best Practices'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, bug fixes, performance tuning, and feature additions to keep your app running smoothly.',
    features: ['Bug Fixes', 'Performance Tuning', 'Feature Updates', 'Monitoring'],
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Rapid prototyping and MVP builds to validate your idea fast. Get to market quickly without cutting corners.',
    features: ['Rapid Prototyping', 'Lean Development', 'Quick Iteration', 'Launch Support'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative" data-testid="services-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" data-testid="services-title">
            <span className="text-primary">{'>'}</span> SERVICES<span className="text-primary">_</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to bring your idea to life and keep it running.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-black/30 border border-primary/15 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 font-mono group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-mono">+</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need something custom? I'm flexible and happy to discuss your specific requirements.
          </p>
          <Button
            size="lg"
            className="rounded-full glow-primary neon-border font-mono"
            asChild
          >
            <a href="#contact" data-testid="button-get-quote">
              GET A QUOTE
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
