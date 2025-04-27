'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // If you plan to link elsewhere

export function BlogSection() {
  return (
    <section id="blog" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
       {/* Temporarily removed motion container for debugging */}
       {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      > */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Blog / Articles</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Thoughts, tutorials, and insights on AI, Robotics, and technology. Coming soon!
          </p>
           {/* Optional: Link to an external blog for now */}
          {/*
          <Button variant="outline" size="lg" asChild>
              <Link href="https://medium.com/@yourhandle" target="_blank" rel="noopener noreferrer">
                  Read on Medium (Coming Soon)
              </Link>
          </Button>
          */}
           <div className="mt-10 h-40 flex items-center justify-center bg-muted/50 rounded-lg border border-dashed border-border">
              <p className="text-muted-foreground italic">Blog content is under construction.</p>
           </div>
      {/* </motion.div> */}
    </section>
  );
}
