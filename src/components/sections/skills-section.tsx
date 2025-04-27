'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Library } from 'lucide-react'; // Icons for categories

interface Skills {
  languages: string[];
  tools: string[];
  frameworks: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const iconMap = {
  languages: <Code className="h-6 w-6 text-primary" />,
  tools: <Wrench className="h-6 w-6 text-primary" />,
  frameworks: <Library className="h-6 w-6 text-primary" />,
};

const categoryTitles = {
  languages: "Languages",
  tools: "Tools & Technologies",
  frameworks: "Libraries & Frameworks",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = Object.entries(skills) as [keyof Skills, string[]][];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation of child cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const badgeVariants = {
     hidden: { opacity: 0, scale: 0.5 },
     visible: (i: number) => ({ // Custom prop i for stagger index
       opacity: 1,
       scale: 1,
       transition: {
         delay: i * 0.05, // Stagger badges within each card
         duration: 0.3,
       },
     }),
  };

  return (
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8">
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skillset</h2>
      {/* Removed redundant motion.div wrapping the grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        // Removed variants, initial, whileInView, viewport from here
      >
        {skillCategories.map(([category, skillList]) => (
          <motion.div key={category} variants={cardVariants}>
            {/* Removed h-full from Card */}
            <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 {iconMap[category]}
                <CardTitle className="text-xl font-semibold">{categoryTitles[category]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                     <motion.div key={skill} custom={index} variants={badgeVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
                        <Badge variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                         {skill}
                        </Badge>
                     </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
       </motion.div>
    </section>
  );
}
