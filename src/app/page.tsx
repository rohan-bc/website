import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { EducationSection } from '@/components/sections/education-section'; // Added import
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { BlogSection } from '@/components/sections/blog-section'; // Placeholder for now
import { Separator } from '@/components/ui/separator';
import { resumeData } from '@/data/resume-data'; // Load resume data

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection resumeDetails={JSON.stringify(resumeData)} />
      <Separator className="my-12" />
      <EducationSection education={resumeData.education} /> {/* Added Education section */}
      <Separator className="my-12" />
      <SkillsSection skills={resumeData.skills} />
      <Separator className="my-12" />
      <ProjectsSection projects={resumeData.projects} />
      <Separator className="my-12" />
      <ExperienceSection experience={resumeData.experience} />
      <Separator className="my-12" />
      <CertificationsSection certifications={resumeData.certifications} achievements={resumeData.achievements} />
      <Separator className="my-12" />
      <BlogSection /> {/* Placeholder */}
      <Separator className="my-12" />
      <ContactSection email={resumeData.contact.email} linkedin={resumeData.contact.linkedin} github={resumeData.contact.github} />
    </div>
  );
}
