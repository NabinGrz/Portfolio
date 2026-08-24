'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Smartphone, Zap } from 'lucide-react';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  hasSpeechBubble?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'lg',
  className = '',
  hasSpeechBubble = false,
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-48 h-48 sm:w-60 sm:h-60',
    lg: 'w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96',
  };

  const imageSrc = hasSpeechBubble ? '/images/dev_aboutme.png' : '/images/dev_header.png';

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Organic colorful blob background */}
      <div className="absolute w-[86%] h-[86%] bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-400 opacity-90 blob-orange blur-[1px] shadow-2xl shadow-orange-500/20" />
      
      {/* Secondary accent glow */}
      <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-blue-600/30 rounded-full blur-2xl pointer-events-none" />

      {/* Real Developer Character Asset from Original Site */}
      <div className={`relative z-10 ${sizeClasses[size]} flex items-center justify-center`}>
        <img
          src={imageSrc}
          alt="Nabin Gurung - Flutter Developer"
          className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -right-1 z-20 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
      >
        <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
        <span>Flutter Specialist</span>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-1 -left-1 z-20 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
      >
        <Zap className="w-3.5 h-3.5 text-amber-500" />
        <span>BLoC &amp; MobX</span>
      </motion.div>

      {/* Speech Bubble */}
      {hasSpeechBubble && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-8 left-4 z-30 px-4 py-2 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-2xl border border-white/20 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Any Idea?? Let's Build It!</span>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-white/20" />
        </motion.div>
      )}
    </div>
  );
};
