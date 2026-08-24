'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';

export const StatsBanner: React.FC = () => {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-10 rounded-[32px] bg-slate-900 text-white shadow-2xl relative overflow-hidden border border-slate-800"
      >
        {/* Ambient organic background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
