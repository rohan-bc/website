import React from 'react';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/data/resume-data'; // Assuming contact info is here

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
           <Link href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
           {/* Add other social links if needed */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Rohan BC. All rights reserved.
        </p>
         <p className="text-xs mt-2">
          Built with Next.js, Tailwind CSS, Shadcn/ui, Framer Motion.
        </p>
      </div>
    </footer>
  );
}
