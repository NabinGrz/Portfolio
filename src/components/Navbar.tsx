'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Sync dark class on html tag
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl shadow-lg border border-slate-200 dark:border-slate-800'
                : 'bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60'
            }`}
          >
            {/* Brand / Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-[2px] shadow-sm">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-black">
                  NG
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white uppercase font-sans">
                  NABIN
                </span>
                <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 -mt-1 font-semibold">
                  FLUTTER DEV
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative text-xs font-bold uppercase tracking-wider transition duration-200 ${
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-orange-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Hub: Socials, Theme Switcher & Contact Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Social Icons (Header Desktop) */}
              <div className="hidden lg:flex items-center gap-1 pr-2 border-r border-slate-200 dark:border-slate-800">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Theme Toggle (Working iOS-style switch) */}
              <button
                type="button"
                onClick={() => setIsDark(!isDark)}
                className={`relative w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                  isDark ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
                aria-label="Toggle Dark/Light Mode"
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center ${
                    isDark ? 'ml-auto' : 'mr-auto'
                  }`}
                >
                  {isDark ? (
                    <Moon className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Sun className="w-3 h-3 text-amber-500" />
                  )}
                </motion.div>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-sm active:scale-95"
              >
                <span>Contact Me</span>
                <Send className="w-3 h-3" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-800 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold uppercase transition ${
                    activeSection === link.id
                      ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-black'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
