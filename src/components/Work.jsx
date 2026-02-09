import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      role: "Mid Level Flutter Developer",
      company: "Veda Studios",
      period: "May 2024 - Present",
      description: "Working on Marsenger-Encryption (Chat App). Migrated group chat from Provider to Riverpod. Implemented message reactions, push notifications, real-time audio/video calls using WebRTC/Mediasoup, screen sharing, PIP, and RSA end-to-end encryption."
    },
    {
      role: "Mid Level Flutter Developer",
      company: "Ekbana Solutions",
      period: "May 2023 - Jan 2024",
      description: "Developed Sajilo Krishi Beema (Agriculture Insurance). For CityPay (Digital Wallet), rewrote KYC from MobX to Bloc, developed flight booking and QR scanning modules, and designed dashboard screens."
    },
    {
      role: "Junior Flutter Developer",
      company: "Kodiary Technologies",
      period: "Mar 2022 - Apr 2023",
      description: "Worked on Cronlink (Construction Mgmt) and Namaste Pay. Implemented MobX/Bloc architecture, real-time tracking with Socket, and various utility services (Recharge, Bank Transfer). Published Sitedeck app to stores."
    },
    {
      role: "Flutter Developer Intern",
      company: "Thakur International",
      period: "Aug 2021 - Dec 2021",
      description: "Designed frontend for a restaurant app and admin panel. Managed WordPress content and published 2 apps to the Play Store."
    }
  ];

  return (
    <section id="work" className="py-20 px-4 md:px-12 relative bg-white/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Resume</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">Work Experience</h2>
        </div>

        <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
               {/* Timeline Dot */}
               <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm md:left-1/2 md:-translate-x-1/2"></div>
               
               <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="flex-1 md:text-right">
                    {/* Spacer for alternating layout */}
                 </div>
                 
                 <div className="flex-1 glass p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="flex flex-col gap-1 mb-2">
                       <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                       <div className="text-indigo-600 font-medium flex items-center gap-1 text-sm md:justify-start">
                         <Briefcase size={14} /> {exp.company}
                       </div>
                       <div className="text-slate-400 text-xs flex items-center gap-1 md:justify-start">
                         <Calendar size={12} /> {exp.period}
                       </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-4">
                      {exp.description}
                    </p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
