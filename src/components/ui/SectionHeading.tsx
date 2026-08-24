'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-3xl mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>

      <p className="text-slate-400 text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
};
