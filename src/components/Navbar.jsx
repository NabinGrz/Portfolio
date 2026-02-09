import React from 'react';
import { Home, User, Code, Rocket, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const navItems = [
    { icon: Home, label: 'Home', href: '#home', id: 'home' },
    { icon: User, label: 'About', href: '#about', id: 'about' },
    { icon: Code, label: 'Skills', href: '#skills', id: 'skills' },
    { icon: Rocket, label: 'Projects', href: '#projects', id: 'projects' },
    { icon: Briefcase, label: 'Work', href: '#work', id: 'work' },
    { icon: Mail, label: 'Contact', href: '#contact', id: 'contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      const sections = navItems.map(item => document.getElementById(item.id));
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-lg shadow-indigo-500/20 border border-white/20 backdrop-blur-md bg-white/70">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <a 
              key={index} 
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all duration-300 hover:text-indigo-600 group ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon 
                size={20} 
                className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'fill-current scale-110' : ''}`} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              <span className={`text-[10px] font-medium transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
