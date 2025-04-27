'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Download } from 'lucide-react';

export function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
     e.preventDefault();
     const contactSection = document.getElementById('contact');
     if (contactSection) {
        // Adjust offset as needed for navbar height
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top ?? 0;
        const elementRect = contactSection.getBoundingClientRect().top ?? 0;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
     }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden text-center bg-gradient-to-b from-background via-background to-muted">
       {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Rohan BC
        </motion.h1>

        <div className="text-xl sm:text-2xl md:text-3xl font-mono text-foreground mb-8 h-16 sm:h-10 md:h-8"> {/* Fixed height container */}
          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,
              'Robotics Enthusiast',
              2000,
              'Full Stack Developer?', // Optional: Add a fun one
              1500,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
            className="text-accent-foreground" // Use accent foreground for contrast
          />
        </div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Passionate about building intelligent systems and exploring the intersection of AI, Robotics, and Software Engineering.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button asChild size="lg">
             <Link href="#contact" onClick={handleScrollToContact}>
                Get In Touch
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
           <Button variant="outline" size="lg" asChild>
            <a href="https://drive.google.com/file/d/1Ldl2NPIrLNQarf3DcvoCVqLr3Ir0_VVv/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Rohan_BC_Resume.pdf"> {/* Updated href and added target/rel */}
                Download Resume
                <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

       {/* Subtle Animated Gradient/Shape */}
       <motion.div
        className="absolute inset-0 z-0 opacity-50 dark:opacity-30" // Adjusted opacity further for better visibility in light mode
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
            // Kept alpha values relatively low but increased element opacity above
            backgroundImage: 'radial-gradient(circle at top left, hsl(var(--primary)/0.6) 0%, transparent 60%), radial-gradient(circle at bottom right, hsl(var(--accent)/0.5) 0%, transparent 70%)', // Increased alpha slightly
            backgroundSize: '200% 200%',
        }}
        />

    </section>
  );
}
