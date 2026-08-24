'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  ArrowRight,
  Code2,
  Smartphone,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';
import { Avatar } from './ui/Avatar';

export const AboutHelp: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Avatar with Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center py-6"
          >
            <Avatar size="md" hasSpeechBubble={true} />
          </motion.div>

          {/* Right: Have an app idea copy & Follow Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Cycle Mobile Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Have an app idea? <span className="text-[#3A36DB] dark:text-[#6366F1]">I can Help You!</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              From initial wireframes and state management architecture to production deployment on the App Store and Google Play Store. I craft reactive, 60fps Flutter mobile applications engineered for high reliability, offline persistence, and seamless backend API synchronization.
            </p>

            {/* Follow Cards */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 block">
                You can also follow me here:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:border-slate-900 dark:hover:border-white transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-slate-900 dark:text-white block">
                        GITHUB
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">@NabinGrz</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 dark:group-hover:text-white transition" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:border-blue-600 dark:hover:border-blue-400 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-slate-900 dark:text-white block">
                        LINKEDIN
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">/in/nabin-gurung</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition" />
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:border-rose-500 dark:hover:border-rose-400 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-slate-900 dark:text-white block">
                        INSTAGRAM
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">@nabin_grz</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-rose-500 transition" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
