'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Award, CheckCircle, ExternalLink, FileText } from 'lucide-react';
import type { Certification, Achievement } from '@/data/resume-data';
import { Button } from '../ui/button';

interface CertificationsSectionProps {
  certifications: Certification[];
  achievements: Achievement[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjusted stagger slightly for the two columns
      },
    },
};

// Variants for individual items within columns
const itemContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger items within each column
        },
    },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export function CertificationsSection({ certifications, achievements }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="container mx-auto px-4 sm:px-6 lg:px-8">
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications Column */}
              <motion.div variants={itemContainerVariants}>
                  <h3 className="text-2xl font-semibold text-center md:text-left mb-6 flex items-center justify-center md:justify-start gap-2"><CheckCircle className="h-6 w-6 text-primary"/> Certifications</h3>
                  <div className="space-y-6">
                      {certifications.map((cert, index) => (
                           <motion.div key={cert.id || index} variants={itemVariants}>
                              <Card className="shadow-md bg-card/70 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20">
                                  <CardHeader className="pb-3">
                                      <CardTitle className="text-lg font-medium">{cert.name}</CardTitle>
                                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                                  </CardHeader>
                                  <CardContent className="flex flex-col space-y-2">
                                      {cert.validationNumber && (
                                          <Badge variant="outline" className="text-xs border-primary/30 text-primary/80 self-start">
                                              Validation: {cert.validationNumber}
                                          </Badge>
                                      )}
                                       <div className="flex flex-wrap gap-4 items-center">
                                           {cert.link && ( // Validation Link
                                               <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto hover:underline">
                                                   <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                       Validate Credential <ExternalLink className="ml-1 h-3 w-3" />
                                                   </Link>
                                               </Button>
                                           )}
                                            {cert.certificateLink && ( // Certificate View Link
                                               <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto hover:underline">
                                                   <Link href={cert.certificateLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                      View Certificate <FileText className="ml-1 h-3 w-3" />
                                                   </Link>
                                               </Button>
                                           )}
                                       </div>
                                  </CardContent>
                              </Card>
                          </motion.div>
                      ))}
                  </div>
              </motion.div>

              {/* Achievements Column */}
              <motion.div variants={itemContainerVariants}>
                  <h3 className="text-2xl font-semibold text-center md:text-left mb-6 flex items-center justify-center md:justify-start gap-2"><Award className="h-6 w-6 text-primary"/> Achievements</h3>
                   <div className="space-y-6">
                      {achievements.map((ach, index) => (
                           <motion.div key={ach.id || index} variants={itemVariants}>
                              <Card className="shadow-md bg-card/70 backdrop-blur-sm transition-all duration-300 hover:shadow-primary/20">
                                  <CardHeader className="pb-3">
                                      <CardTitle className="text-lg font-medium">{ach.name}</CardTitle>
                                       <p className="text-sm text-muted-foreground">{ach.date}</p>
                                  </CardHeader>
                                   <CardContent>
                                      <p className="text-sm text-foreground">{ach.description}</p>
                                      {ach.certificateLink && ( // Certificate Link for Achievements
                                           <div className="mt-2">
                                               <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto hover:underline">
                                                   <Link href={ach.certificateLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                      View Certificate <FileText className="ml-1 h-3 w-3" />
                                                   </Link>
                                               </Button>
                                           </div>
                                       )}
                                  </CardContent>
                              </Card>
                          </motion.div>
                      ))}
                  </div>
              </motion.div>
          </div>
      </motion.div>
    </section>
  );
}
