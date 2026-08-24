'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { experienceData, educationData } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>my experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            My Experience So Far
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Engineering resilient, scalable Flutter applications across leading software studios and digital product teams.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8 mb-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-card transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block mb-1">
                    {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{exp.company}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500 font-normal flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Key Achievements &amp; Projects:
                </span>
                <ul className="space-y-1.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800/80 text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Education Milestone */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold text-lg">
            <GraduationCap className="w-5 h-5 text-[#3A36DB] dark:text-[#6366F1]" />
            <span>Education Background</span>
          </div>

          <div className="space-y-4">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {edu.institution} &bull; <span className="text-slate-500 font-normal">{edu.location}</span>
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                    {edu.details}
                  </p>
                </div>

                <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 shrink-0 self-start sm:self-center">
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
