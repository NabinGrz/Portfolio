import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBanner } from '@/components/StatsBanner';
import { MobileArchitecture } from '@/components/MobileArchitecture';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { AboutHelp } from '@/components/AboutHelp';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0A0D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <Navbar />
      <Hero />
      <StatsBanner />
      <MobileArchitecture />
      <TechStack />
      <Projects />
      <AboutHelp />
      <Experience />
      <Contact />
    </main>
  );
}
