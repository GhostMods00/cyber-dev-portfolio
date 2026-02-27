import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'PropertyCare',
    description: 'A property maintenance management platform for property managers to track requests, assign tasks, and communicate with stakeholders.',
    technologies: ['React', 'Node.js', 'React Router DOM', 'Express'],
    liveUrl: 'https://propertycare-1.onrender.com/',
    githubUrl: 'https://github.com/GhostMods00/PropertyCare',
    featured: true,
  },
  {
    title: 'Business Website',
    description: 'Professional website for an accounting firm featuring a modern landing page, services overview, contact form, and fully responsive design.',
    technologies: ['Tailwind', 'React', 'Node.js'],
    liveUrl: 'https://www.primebalanceadvisory.com/',
    githubUrl: null,
    featured: true,
  },
  {
    title: 'TaskMasterPro',
    description: 'Project management app for teams to collaborate, manage projects, and track productivity with a clean, intuitive interface.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React'],
    liveUrl: 'https://taskmasterpro2.onrender.com/',
    githubUrl: 'https://github.com/GhostMods00/TaskMasterPro',
    featured: true,
  },
  {
    title: 'DevRadar',
    description: 'GitHub talent acquisition platform to discover, evaluate, and manage developer candidates through their GitHub profiles.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'GitHub API'],
    liveUrl: 'https://devradar-pe79.onrender.com/',
    githubUrl: 'https://github.com/GhostMods00/DEVRadar',
    featured: false,
  },
  {
    title: 'CookWise',
    description: 'Smart recipe finder that helps users discover dishes based on available ingredients and dietary preferences.',
    technologies: ['JavaScript', 'CSS', 'Bootstrap', 'API Integration'],
    liveUrl: 'https://algomystique.github.io/CookWiseGroupProject_1/',
    githubUrl: 'https://github.com/AlgoMystique/CookWiseGroupProject_1',
    featured: false,
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Automated CI/CD pipeline using GitHub Actions for testing and deployment of a full-stack TypeScript application.',
    technologies: ['GitHub Actions', 'Render', 'Express', 'TypeScript'],
    liveUrl: 'https://github.com/GhostMods00/pipeline-pilot/actions/workflows/test.yml',
    githubUrl: 'https://github.com/GhostMods00/pipeline-pilot',
    featured: false,
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

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 relative" data-testid="projects-section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" data-testid="projects-title">
            <span className="text-primary">{'>'}</span> RECENT_WORK<span className="text-primary">_</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A few projects I've built for clients and the community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-black/30 border border-primary/15 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
              data-testid={`project-card-${index}`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/10 bg-black/40">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono truncate">{project.title.toLowerCase().replace(/\s+/g, '_')}</span>
                {project.featured && (
                  <Badge className="ml-auto bg-primary/20 text-primary border-primary/30 text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    CLIENT
                  </Badge>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors font-mono" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-primary/10">
                  {project.liveUrl && (
                    <Button size="sm" variant="ghost" className="font-mono text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-testid={`project-live-${index}`}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        LIVE
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="ghost" className="font-mono text-xs" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-testid={`project-github-${index}`}>
                        <Github className="h-4 w-4 mr-1" />
                        CODE
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
