'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutSectionProps {
    resumeDetails: string; // Keep prop for potential future use, but not used now
}

export function AboutSection({ resumeDetails }: AboutSectionProps) {

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Profile Picture */}
          <motion.div
            className="md:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* User's Image */}
            <Image
              src="/resume/images/about.jpg" // Updated image path
              alt="Rohan BC"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              priority // Load image eagerly as it's likely above the fold
            />
          </motion.div>

          {/* Bio Card */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                    I&apos;m an AI & Robotics engineer in the making — blending intelligent algorithms with real-world action.
                 </p>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                    Pursuing B.Tech in Computer Science and Engineering (AI & Robotics) at VIT Chennai (2021–2025), I specialize in crafting smart systems that move, sense, and adapt.
                 </p>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                    Skilled in Python, C++, ROS, TensorFlow, PyTorch, and computer vision (OpenCV, MediaPipe, YOLOv8), I&apos;ve built solutions from real-time drone tracking and autonomous attendance to motion analysis and robotic automation.
                 </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    AWS Certified (CCP & SAA) and passionate about pushing the boundaries where AI meets robotics. Always ready for the next frontier.
                 </p>
                  <p className="text-foreground font-medium italic text-center border-t pt-4 mt-4 border-border/50">
                    &quot;Crafting intelligence. Engineering autonomy. Shaping the future of robotics and AI.&quot;
                  </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
