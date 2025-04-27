'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react'; // Example icons, replace if needed
import type { Project } from '@/data/resume-data'; // Import the Project type

interface ProjectsSectionProps {
  projects: Project[];
}

// Keep variants defined for potential re-integration
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger animation of project cards
      },
    },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9], // Example ease for a nice effect
    },
  },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
       {/* Temporarily commented out motion container for debugging */}
       {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the section is visible
          variants={containerVariants}
       > */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
              {projects.map((project, index) => (
              // Temporarily removed motion variants from individual cards for debugging
              // <motion.div key={project.id || index} variants={cardVariants} className="h-full">
              <div key={project.id || index} className="h-full">
                  {/* Temporarily removed hover effect classes for debugging */}
                  <Card className="flex flex-col h-full overflow-hidden shadow-lg border border-border/50 bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                      <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground pt-1">{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-foreground">
                          {project.description.map((point, i) => (
                             <li key={i}>{point}</li>
                          ))}
                      </ul>
                      {project.technologies && project.technologies.length > 0 && (
                           <div className="mt-4">
                              <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="bg-accent/50 text-accent-foreground border-accent/20">
                                      {tech}
                                  </Badge>
                              ))}
                              </div>
                          </div>
                      )}
                  </CardContent>
                  <CardFooter className="mt-auto pt-4 flex justify-end space-x-3">
                       {project.githubLink && (
                       <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                          <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                       )}
                       {project.liveLink && (
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                          <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                      </a>
                       )}
                  </CardFooter>
                  </Card>
              {/* </motion.div> */}
              </div>
              ))}
          </div>
       {/* </motion.div> */}
    </section>
  );
}
