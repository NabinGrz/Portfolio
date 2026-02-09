import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "CityPay Nepal",
      category: "FinTech / Digital Wallet",
      tags: ["Flutter", "Bloc", "QR Payment"],
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Namaste Pay",
      category: "Digital Wallet",
      tags: ["Flutter", "Cubit", "Utility Payments"],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Sajilo Krishi Beema",
      category: "AgriTech / Insurance",
      tags: ["Flutter", "Offline Support"],
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "Marsenger",
      category: "Communication",
      tags: ["Flutter", "WebRTC", "E2EE"],
      color: "from-purple-600 to-indigo-500",
    },
    {
      title: "Cronlink",
      category: "Construction Mgmt",
      tags: ["Flutter", "Socket.io", "Google Maps"],
      color: "from-amber-500 to-orange-400",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">App Gallery</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
