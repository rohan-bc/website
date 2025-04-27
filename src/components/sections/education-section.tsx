'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react'; // Import icons
import type { EducationEntry } from '@/data/resume-data.d';

interface EducationSectionProps {
  education: EducationEntry[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation of cards
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  {edu.degree.toLowerCase().includes('btech') ? (
                     <GraduationCap className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  ) : (
                     <School className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-grow">
                    <CardTitle className="text-lg font-semibold leading-tight">{edu.institution}</CardTitle>
                     <CardDescription className="text-sm pt-1">
                      {edu.degree} {edu.field && `- ${edu.field}`}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                    <p className="text-sm text-muted-foreground">{edu.years}</p>
                  {/* Removed grade display */}
                  {/* <p className="text-sm text-muted-foreground">{edu.grade}</p> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
