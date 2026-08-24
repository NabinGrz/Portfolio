'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Building2
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { projectsData } from '@/data/portfolioData';
import { PhoneMockup } from './mockups/PhoneMockup';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Fintech', 'Agriculture', 'Tracking & IoT', 'Finance'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Fintech') return project.category.includes('Fintech');
    if (activeCategory === 'Agriculture') return project.category.includes('Agriculture');
    if (activeCategory === 'Tracking & IoT') return project.category.includes('Tracking') || project.category.includes('Workforce');
    if (activeCategory === 'Finance') return project.category.includes('Finance');
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>my works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Meet My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world Flutter applications engineered for production with clean architecture, high-security transaction flows, and offline-first synchronization.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="p-6 sm:p-10 rounded-[36px] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft hover:shadow-card transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Project Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {project.category}
                      </span>
                      {project.company && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-slate-400" />
                          {project.company}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        Key Engineering Highlights:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-sm"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:border-slate-900 dark:hover:border-white transition"
                        >
                          <span>Live Context</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Phone Mockup Frame */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                      <PhoneMockup screenType={project.screenType} interactive={false} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
