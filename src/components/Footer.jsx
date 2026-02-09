import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-center text-slate-500 text-sm pb-24 space-y-8">
      {/* Social Links */}
      <div className="flex justify-center gap-6">
        <a href="https://github.com/NabinGrz/NabinGrz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nabin-gurung-206ab91b1/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Linkedin size={20} />
        </a>
        <a href="https://www.instagram.com/nabin_grz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Instagram size={20} />
        </a>
        <a href="mailto:lama.gurung.nabin@gmail.com" className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <Mail size={20} />
        </a>
      </div>

      <div>
        <p>© {new Date().getFullYear()} Nabin Gurung. All rights reserved.</p>
        <p className="mt-2 text-slate-400 text-xs">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
