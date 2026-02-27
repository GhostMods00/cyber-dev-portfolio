import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, CheckCircle, Loader2, Download, Terminal } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import { SiX, SiCodepen } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const contactInfo = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'westendcrew1982@gmail.com',
    href: 'mailto:westendcrew1982@gmail.com',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Sydney, Australia',
    href: null,
  },
  {
    icon: Clock,
    label: 'AVAILABILITY',
    value: 'Open to freelance & full-time opportunities',
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/GhostMods00', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/waleed-zaryab-79571517a', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com/O_zee9', label: 'X' },
  { icon: SiCodepen, href: 'https://codepen.io/GhostMods00', label: 'CodePen' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: 'Message sent!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" data-testid="contact-section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" data-testid="contact-title">
            <span className="text-primary">{'>'}</span> CONNECT<span className="text-primary">_</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            # Interested in working together? Have a question? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="terminal-glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-black/40">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <Terminal className="w-4 h-4 text-primary ml-2" />
                <span className="text-xs text-muted-foreground font-mono">SEND A MESSAGE</span>
              </div>

              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-mono">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="neon-border font-mono"
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-mono text-xs text-primary">NAME*</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary font-mono"
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-mono text-xs text-primary">EMAIL*</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary font-mono"
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-mono text-xs text-primary">SUBJECT</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary font-mono"
                        data-testid="input-subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-mono text-xs text-primary">MESSAGE*</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-background/50 border-primary/20 focus:border-primary font-mono resize-none"
                        data-testid="input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full glow-primary neon-border font-mono"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          SEND MESSAGE
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="terminal-glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-black/40">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">CONTACT INFO</span>
              </div>
              <div className="p-4 space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-mono">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block"
                        data-testid={`contact-info-${info.label.toLowerCase()}`}
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={info.label} data-testid={`contact-info-${info.label.toLowerCase()}`}>{content}</div>;
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="terminal-glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/20 bg-black/40">
                <span className="text-xs text-muted-foreground font-mono">CONNECT ONLINE</span>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.label}
                        size="icon"
                        variant="outline"
                        className="rounded-full neon-border hover:bg-primary/10"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          data-testid={`contact-social-${social.label.toLowerCase()}`}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="terminal-glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-secondary/20 bg-black/40">
                <Download className="w-4 h-4 text-secondary" />
                <span className="text-xs text-muted-foreground font-mono">DOWNLOAD RESUME</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Get a comprehensive overview of my skills, experience, and education.
                </p>
                <Button
                  variant="outline"
                  className="w-full font-mono cyan-border hover:bg-accent/10"
                  asChild
                >
                  <a
                    href="https://www.waleedzaryab.com/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-download-cv"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    DOWNLOAD CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
