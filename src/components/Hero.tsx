'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Briefcase,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';
import { Avatar } from './ui/Avatar';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden pattern-dots">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Headline & Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Mobile Engineering Roles</span>
            </div>

            {/* Name & Specialization */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi! I'm <span className="text-slate-900 dark:text-white">{personalInfo.name}</span> —
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A36DB] dark:text-[#6366F1] tracking-tight">
                Mobile Application Engineer
              </h2>
            </div>

            {/* Authentic Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-2">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Email
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Location &amp; GitHub
                </span>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                  <span>{personalInfo.location}</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs font-mono"
                  >
                    @NabinGrz &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons & Outlined Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#3A36DB] hover:bg-[#2d28b8] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/25 transition active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 font-bold text-sm flex items-center gap-2 transition shadow-md active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Me Now</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Signature 3D Character Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center py-6"
          >
            <Avatar size="lg" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
