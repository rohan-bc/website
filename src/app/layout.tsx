import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ParticleBackground } from '@/components/particle-background';

// Removed DroneLoader import as requested


export const metadata: Metadata = {
  title: 'Rohan BC - AI & Robotics Engineer',
  description: 'Personal portfolio website of Rohan BC, showcasing skills, projects, and experience in AI and Robotics.',
  keywords: 'Rohan BC, AI Engineer, Robotics Engineer, Portfolio, Web Developer, Computer Science, VIT Chennai',
  authors: [{ name: 'Rohan BC' }],
  creator: 'Rohan BC',
  // Add Open Graph and Twitter card metadata for better sharing
  openGraph: {
    title: 'Rohan BC - AI & Robotics Engineer',
    description: 'Explore the portfolio of Rohan BC, an AI and Robotics Engineer.',
    url: 'https://rohan-bc.com', // Replace with actual domain
    siteName: 'Rohan BC Portfolio',
    // images: [ // Add a good preview image
    //   {
    //     url: 'https://rohan-bc.com/og-image.png', // Replace with actual image URL
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan BC - AI & Robotics Engineer',
    description: 'Explore the portfolio of Rohan BC, an AI and Robotics Engineer.',
    // siteId: 'YourTwitterSiteID', // Replace if you have one
    // creator: '@YourTwitterHandle', // Replace with Twitter handle
    // creatorId: 'YourTwitterCreatorID', // Replace if you have one
    // images: ['https://rohan-bc.com/twitter-image.png'], // Replace with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set default theme to dark
          // enableSystem is removed as we force dark mode
          disableTransitionOnChange
        >
          <ParticleBackground />
           {/* Drone related components removed */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
