import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    type: 'work',
    company: 'Freelancer',
    role: 'Full Stack Developer',
    duration: '2023 - Present',
    location: 'Remote',
    description: 'Developing and maintaining web applications using React, Node.js, and MongoDB. Implementing responsive UIs and RESTful APIs for diverse clients.',
    achievements: [
      'Built multiple full-stack web applications for clients worldwide',
      'Implemented secure authentication and authorization systems',
      'Developed RESTful APIs and integrated third-party services',
      'Delivered responsive, mobile-first user interfaces',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
  },
];

const education = [
  {
    type: 'education',
    institution: 'University of Sydney x edX',
    degree: 'Full Stack Web Development Bootcamp',
    duration: '2024',
    location: 'Sydney, Australia',
    description: 'Intensive program covering JavaScript, React, Node.js, databases, and modern development practices.',
    highlights: [
      'Mastered full-stack JavaScript development',
      'Built multiple production-ready applications',
      'Learned agile development methodologies',
      'Completed capstone project with distinction',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative" data-testid="experience-section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" data-testid="experience-title">
            <span className="text-primary">{'>'}</span> EXPERIENCE<span className="text-primary">_</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            # My professional journey and growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative mb-24"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden md:block" 
               style={{ boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              }`}
              data-testid={`experience-item-${index}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block z-10 animate-glow-pulse" />

              <div className={`terminal-glass rounded-xl overflow-hidden ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-black/40">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <Briefcase className="w-4 h-4 text-primary ml-2" />
                  <span className="text-xs text-muted-foreground font-mono">work_experience.log</span>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className={`flex flex-col gap-2 mb-4 ${
                    index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                  }`}>
                    <div className="flex items-center gap-2 text-sm text-primary font-mono">
                      <Building2 className="w-4 h-4" />
                      <span data-testid={`company-name-${index}`}>{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-semibold" data-testid={`job-role-${index}`}>
                      {exp.role}
                    </h3>
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-4 h-4 text-accent" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-4 h-4 text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-muted-foreground mb-4 text-sm ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 mb-4 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`text-primary mt-0.5 font-mono ${index % 2 === 0 ? 'md:order-2' : ''}`}>{'>'}</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-mono neon-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-accent">{'>'}</span> EDUCATION<span className="text-accent">_</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            # Continuous learning and growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className="max-w-3xl mx-auto"
              data-testid={`education-item-${index}`}
            >
              <div className="terminal-glass rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/20 bg-black/40">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <GraduationCap className="w-4 h-4 text-accent ml-2" />
                  <span className="text-xs text-muted-foreground font-mono">education.log</span>
                </div>

                <div className="p-6">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-accent font-mono">
                      <span>{edu.institution}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-4 h-4 text-primary" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-4 h-4 text-primary" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">{edu.description}</p>

                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5 font-mono">{'>'}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-mono cyan-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
