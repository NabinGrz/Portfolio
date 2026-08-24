'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  CloudLightning,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '@/data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>my skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            What My App Development Skills Include
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            I develop simple, intuitive and responsive user interfaces that help users get things done with less effort and time using modern mobile technologies.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Mobile App Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Mobile App Development
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Specialized in cross-platform Android &amp; iOS development using Flutter and native Android (Kotlin). Crafting fluid 60fps animations and offline-first mobile apps.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Flutter & Dart', 'Android (Kotlin)', 'BLoC / Cubit', 'MobX', 'Hive DB', 'SQLite'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Architecture & Clean Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Clean Architecture &amp; Scale
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Strict 3-Layer architecture (Domain, Data, Presentation) with dependency inversion, immutable Freezed models, declarative AutoRoute, and bloc testing.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Patterns &amp; Tooling:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Clean Architecture', 'GetIt / Injectable', 'Freezed Models', 'AutoRoute', 'bloc_test', 'DevTools'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Fintech & Real-Time Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CloudLightning className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Fintech &amp; Cloud Integrations
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Production experience in digital payment gateways, QR code processing, real-time GPS tracking with WebSockets, Dio interceptors, and Firebase.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Integrations:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['QR & Payment APIs', 'Dio REST Caching', 'Google Maps SDK', 'WebSockets', 'Firebase FCM', 'Play Store Tracks'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
