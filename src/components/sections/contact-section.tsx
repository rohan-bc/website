'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Link from 'next/link';

interface ContactSectionProps {
  email: string;
  linkedin: string;
  github: string;
}

// Keep variants defined for potential re-integration
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15, // Stagger children: paragraph, button, icons
        delayChildren: 0.2,
      },
    },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};


export function ContactSection({ email, linkedin, github }: ContactSectionProps) {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8">
       {/* Temporarily removed motion container for debugging */}
       {/* <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         variants={containerVariants}
         className="max-w-3xl mx-auto"
       > */}
       <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>

            <Card className="shadow-xl border border-border/50 bg-card/70 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Let's Connect!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    {/* Temporarily removed motion items for debugging */}
                    {/* <motion.p variants={itemVariants} className="text-muted-foreground mb-8 text-lg"> */}
                    <p className="text-muted-foreground mb-8 text-lg">
                        Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                    {/* </motion.p> */}
                    </p>

                     {/* <motion.div variants={itemVariants} className="mb-8"> */}
                     <div className="mb-8">
                        <Button size="lg" asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <a href={`mailto:${email}`}>
                                <Mail className="mr-2 h-5 w-5" /> Send an Email
                            </a>
                        </Button>
                    {/* </motion.div> */}
                    </div>

                    {/* <motion.div variants={itemVariants} className="flex justify-center space-x-6"> */}
                    <div className="flex justify-center space-x-6">
                         <Button variant="outline" size="icon" asChild className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                            <Link href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                             <Link href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                         {/* Add other social links if needed */}
                    {/* </motion.div> */}
                    </div>
                </CardContent>
            </Card>
        {/* </motion.div> */}
        </div>
    </section>
  );
}
