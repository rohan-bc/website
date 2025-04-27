'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' }, // Added Education link
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [hidden, setHidden] = React.useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const { scrollY } = useScroll();

  // Set mounted state only on the client
  React.useEffect(() => setMounted(true), []);


  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    // Ensure previous is a number before comparison
     if (typeof previous === 'number' && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Scroll Spy Logic
  React.useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.href.substring(1))).filter(Boolean) as HTMLElement[];

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target?.id) {
                // Prioritize sections higher up if multiple are visible
                const visibleSections = sections.filter(section => {
                    const rect = section.getBoundingClientRect();
                    // Check if section is within the middle 50% of the viewport
                    return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
                });

                if (visibleSections.length > 0) {
                    // Find the topmost visible section
                    const topMostVisible = visibleSections.reduce((prev, curr) => {
                        return (prev.getBoundingClientRect().top < curr.getBoundingClientRect().top) ? prev : curr;
                    });
                    setActiveSection(topMostVisible.id);
                } else if (entry.intersectionRatio >= 0.1) { // Fallback if no section is dominant
                     setActiveSection(entry.target.id);
                }
            }
        });
    };


    const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '-20% 0px -80% 0px', // Adjust rootMargin to focus on the top part of the viewport
        threshold: [0, 0.1, 0.5, 1.0], // Multiple thresholds for finer control
    });


    sections.forEach((section) => section && observer.observe(section)); // Check if section exists

     return () => sections.forEach((section) => section && observer.unobserve(section)); // Check if section exists
  }, []);

  const toggleTheme = () => {
    // Use resolvedTheme to determine the *actual* current theme (handles 'system')
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
        const offset = 80; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top ?? 0; // Provide default value
        const elementRect = targetElement.getBoundingClientRect().top ?? 0; // Provide default value
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    setIsOpen(false); // Close mobile menu
  };

   // Render theme toggle button only when mounted
   const renderThemeToggle = () => {
     if (!mounted) {
        // Render a placeholder or null during server render/initial client render
        // Use a div with the same size as the button to prevent layout shifts
        return <div className="h-9 w-9 md:h-10 md:w-10" />;
      }

      // Determine the icon and label based on the resolved theme
      const isDarkMode = resolvedTheme === 'dark';
      const IconToDisplay = isDarkMode ? Sun : Moon;
      const label = `Switch to ${isDarkMode ? 'light' : 'dark'} mode`;

      return (
         <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={label} // Dynamic aria-label
            className="transition-transform duration-300 ease-in-out hover:rotate-12"
          >
           {/* Apply rotation animation to the icon */}
          <motion.div
            key={resolvedTheme} // Change key on theme change to trigger animation
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 180, scale: 0}}
            transition={{ duration: 0.3 }}
          >
            <IconToDisplay className="h-5 w-5" />
          </motion.div>
        </Button>
      );
   };


  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold font-mono text-primary">
              RohanBC.ai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative',
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary/80',
                  'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300',
                   activeSection === item.href.substring(1) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                )}
                aria-current={activeSection === item.href.substring(1) ? 'page' : undefined} // Better accessibility for active link
              >
                {item.name}
              </Link>
            ))}
             {renderThemeToggle()} {/* Render theme toggle button */}
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center md:hidden">
             {/* Render theme toggle for mobile */}
             <div className="mr-2">{renderThemeToggle()}</div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background z-[60]"> {/* Ensure sheet content is above navbar */}
                <div className="flex flex-col space-y-4 p-4 mt-8">
                   <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold font-mono text-primary mb-4">
                      RohanBC.ai
                    </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={cn(
                        'block px-3 py-2 rounded-md text-base font-medium',
                        activeSection === item.href.substring(1)
                          ? 'text-primary bg-accent'
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      )}
                      aria-current={activeSection === item.href.substring(1) ? 'page' : undefined} // Accessibility
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
