'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, ExternalLink } from 'lucide-react';
import type { ExperienceEntry } from '@/data/resume-data'; // Import the Experience type

interface ExperienceSectionProps {
  experience: ExperienceEntry[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
      >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="relative pl-6 border-l-2 border-primary/30">
              {experience.map((job, index) => (
                  <motion.div
                      key={job.id || index}
                      className="mb-12 relative"
                      variants={itemVariants}
                  >
                      {/* Timeline dot */}
                      <div className="absolute -left-[1.875rem] top-1.5 flex items-center justify-center w-8 h-8 bg-background rounded-full border-2 border-primary">
                          <Briefcase className="w-4 h-4 text-primary" />
                      </div>

                      <Card className="ml-4 shadow-md bg-card/70 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20">
                          <CardHeader>
                              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground mt-1 sm:mt-0">{job.date}</CardDescription>
                              </div>
                              <p className="text-md font-medium text-primary">{job.company}</p>
                          </CardHeader>
                          <CardContent>
                              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-foreground">
                                  {job.responsibilities.map((resp, i) => (
                                  <li key={i}>{resp}</li>
                                  ))}
                              </ul>
                          </CardContent>
                          {job.certificateLink && (
                              <CardFooter>
                                  <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto hover:underline">
                                      <Link href={job.certificateLink} target="_blank" rel="noopener noreferrer">
                                          View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                                      </Link>
                                  </Button>
                              </CardFooter>
                          )}
                      </Card>
                  </motion.div>
              ))}
          </div>
      </motion.div>
    </section>
  );
}
