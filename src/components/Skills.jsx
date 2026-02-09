import React from 'react';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, delay }) => (
  <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-2 py-1 bg-white/50 border border-slate-100 rounded-md text-xs font-medium text-slate-600">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter (Expert)", "Dart (Expert)", "iOS/Android (Novice)", "Kotlin", "Swift/SwiftUI"]
    },
    {
      icon: Code,
      title: "Core Tech",
      skills: ["REST API", "JSON", "Socket.io", "WebRTC", "Mediasoup"]
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["Firebase", "SQL Cipher", "Drift DB", "Node.js (Basic)"]
    },
    {
      icon: Layout,
      title: "Architecture & Tools",
      skills: ["Clean Architecture", "Bloc/Cubit", "Riverpod", "Provider", "Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Expertise</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">My Skills</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build high-quality, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <SkillCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
