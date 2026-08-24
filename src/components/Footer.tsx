'use client';

import { Smartphone, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.specialization}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#hero" className="hover:text-cyan-400 transition">Overview</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            Designed for high-impact mobile presentation
          </p>
        </div>
      </div>
    </footer>
  );
};
