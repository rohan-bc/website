'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim'; // or loadFull for more features
import { useTheme } from 'next-themes';

export function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  // this initializes the particles engine (window.tsParticles)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // console.log('Initializing particles engine...');
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
      // console.log('Particles engine initialized with slim bundle.');
    }).then(() => {
      setInit(true);
      // console.log('Particles engine initialization promise resolved.');
    }).catch(err => {
        console.error("Failed to initialize particles engine:", err);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log('Particles loaded, container:', container);
    // You can interact with the container instance here if needed
  }, []);

  const particleOptions = React.useMemo(() => {
    const isDarkMode = theme === 'dark';
    const particleColor = isDarkMode ? '#7DF9FF' : '#0077B6'; // Electric blue (dark) vs. a darker blue (light)
    const lineColor = isDarkMode ? '#ffffff' : '#333333'; // White lines (dark) vs. dark gray lines (light)

    return {
      background: {
        color: {
          value: 'transparent', // Background is handled by CSS
        },
      },
      fpsLimit: 60, // Optimize performance
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse', // Or 'grab', 'bubble'
          },
          onClick: {
            enable: false, // Disable click events
            mode: 'push',
          },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
          },
           grab: { // Example grab mode options
             distance: 150,
             links: {
               opacity: 0.5,
             },
           },
           bubble: { // Example bubble mode options
             distance: 200,
             size: 40,
             duration: 2,
             opacity: 0.8,
           },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: lineColor,
          distance: 150,
          enable: true,
          opacity: 0.2, // Make lines subtle
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce', // Keep particles within viewport
          },
          random: true, // More natural movement
          speed: 1, // Slow speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Adjust density
          },
          value: 60, // Number of particles
        },
        opacity: {
          value: { min: 0.1, max: 0.5 }, // Random opacity
           animation: {
             enable: true,
             speed: 0.5,
             minimumValue: 0.1,
             sync: false,
           },
        },
        shape: {
          type: 'circle',
        },
        size: {
           value: { min: 1, max: 3 }, // Random size
           animation: {
             enable: true,
             speed: 2,
             minimumValue: 1,
             sync: false,
           },
        },
      },
      detectRetina: true,
    };
  }, [theme]); // Recompute options when theme changes

  if (!init) {
    // console.log("Particles engine not initialized yet.");
    return null; // Don't render until engine is ready
  }

   // console.log("Rendering Particles component with options:", particleOptions);

  return (
    <div id="particles-js"> {/* Ensure this ID matches the CSS */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particleOptions}
        className="absolute inset-0 z-[-1]" // Ensure it's behind content using Tailwind
      />
    </div>
  );
}
