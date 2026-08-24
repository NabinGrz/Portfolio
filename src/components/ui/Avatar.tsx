'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Smartphone, Zap } from 'lucide-react';

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
    md: 'w-48 h-48 sm:w-56 sm:h-56',
    lg: 'w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96',
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Organic colorful blob background */}
      <div className="absolute w-[88%] h-[88%] bg-gradient-to-tr from-orange-500 via-rose-500 to-amber-400 opacity-90 blob-orange blur-[1px] shadow-2xl shadow-orange-500/20" />
      
      {/* Secondary accent glow */}
      <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-blue-600/30 rounded-full blur-2xl pointer-events-none" />

      {/* Stylized 3D Avatar Illustration */}
      <div className={`relative z-10 ${sizeClasses[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 320 320"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBD5B5" />
              <stop offset="100%" stopColor="#E5A67C" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Shoulders & Hoodie */}
          <path
            d="M 60 300 C 60 230, 100 210, 160 210 C 220 210, 260 230, 260 300 Z"
            fill="url(#hoodieGrad)"
          />
          {/* Hoodie Collar Strings */}
          <path d="M 145 225 L 145 270" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <path d="M 175 225 L 175 270" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="145" cy="272" r="3" fill="#38BDF8" />
          <circle cx="175" cy="272" r="3" fill="#38BDF8" />

          {/* Neck */}
          <rect x="140" y="180" width="40" height="40" rx="10" fill="#E5A67C" />

          {/* Head */}
          <ellipse cx="160" cy="140" rx="55" ry="65" fill="url(#skinGrad)" />

          {/* Ears */}
          <ellipse cx="102" cy="142" rx="10" ry="14" fill="#E5A67C" />
          <ellipse cx="218" cy="142" rx="10" ry="14" fill="#E5A67C" />

          {/* Hair (Signature Modern Styled Blue Cut) */}
          <path
            d="M 105 130 C 100 70, 140 45, 175 48 C 210 52, 225 80, 220 125 C 215 105, 195 95, 170 95 C 140 95, 120 115, 105 130 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair Tufts */}
          <path
            d="M 140 50 C 155 35, 180 40, 190 55 C 180 50, 160 50, 140 50 Z"
            fill="#3B82F6"
          />

          {/* Glasses Frame (Modern Developer Glasses) */}
          <rect x="115" y="122" width="38" height="28" rx="8" fill="url(#glassGrad)" stroke="#0F172A" strokeWidth="4" />
          <rect x="167" y="122" width="38" height="28" rx="8" fill="url(#glassGrad)" stroke="#0F172A" strokeWidth="4" />
          <path d="M 153 134 L 167 134" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <path d="M 105 130 L 115 130" stroke="#0F172A" strokeWidth="3.5" />
          <path d="M 205 130 L 215 130" stroke="#0F172A" strokeWidth="3.5" />

          {/* Eyes behind glass */}
          <circle cx="134" cy="136" r="4" fill="#0F172A" />
          <circle cx="135.5" cy="134.5" r="1.5" fill="#FFFFFF" />
          <circle cx="186" cy="136" r="4" fill="#0F172A" />
          <circle cx="187.5" cy="134.5" r="1.5" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M 118 114 Q 134 110 148 114" stroke="#1E40AF" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 172 114 Q 186 110 202 114" stroke="#1E40AF" strokeWidth="3.5" strokeLinecap="round" />

          {/* Friendly Smile */}
          <path d="M 146 172 Q 160 184 174 172" stroke="#A85934" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Cheerful Blush */}
          <circle cx="120" cy="155" r="6" fill="#F87171" opacity="0.4" />
          <circle cx="200" cy="155" r="6" fill="#F87171" opacity="0.4" />
        </svg>
      </div>

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-2 z-20 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
      >
        <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
        <span>Flutter Pro</span>
      </motion.div>

      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-2 -left-2 z-20 px-3 py-1.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
      >
        <Zap className="w-3.5 h-3.5 text-amber-500" />
        <span>BLoC &amp; MobX</span>
      </motion.div>

      {/* Speech Bubble (for About/Help Section) */}
      {hasSpeechBubble && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-10 left-6 z-30 px-4 py-2 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-2xl border border-white/20 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Any Idea?? Let's Build It!</span>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-white/20" />
        </motion.div>
      )}
    </div>
  );
};
