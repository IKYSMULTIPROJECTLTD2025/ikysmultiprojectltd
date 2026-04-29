'use client';
import { AnimatePresence } from 'framer-motion';
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { FAQs } from "../components/FAQs";
import { Credibility } from "../components/Credibility";
import { useEffect, useState } from "react";
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Home as HomeIcon, GroupIcon, UsersIcon, Building, Globe, Mail, LucideIcon } from 'lucide-react';

type TabId =
  | 'home'
  | 'about'
  | 'services'
  | 'process'
  | 'projects'
  | 'testimonials'
  | 'faqs'
  | 'credibility'
  | 'contact';


// ✅ Proper nav item typing
type NavItem = {
  id: TabId;
  icon: LucideIcon;
  label: string;
  href: string;
};

export default function App() {
  const [route, setRoute] = useState<TabId>('home');
  const [activeTab, setActiveTab] = useState<TabId>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route,  activeTab]);

  
  // ✅ Strongly typed nav items
  const navItems: NavItem[] = [
    { id: 'home', icon: HomeIcon, label: 'Home', href: '#' },
    { id: 'about', icon:  UsersIcon, label: 'About', href: '#about' },
    { id: 'services', icon: Globe, label: 'Services', href: '#services' },
    { id: 'process', icon: GroupIcon , label: 'Process', href: '#process' },
    { id: 'projects', icon: Building, label: 'Projects', href: '#projects' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const renderPage = () => {
    switch (route) {
      case 'home': return <Home  />;
      case 'about': return <About  />;
      case 'services': return <Services  />;
      case 'projects': return <Projects />;
      case 'process': return <Process />;
      case 'testimonials': return <Testimonials />;
      case 'faqs': return <FAQs />;
      case 'credibility': return <Credibility />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
      
      <Navbar route={route} />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <div key={route} className="flex-grow flex flex-col">
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 backdrop-blur-xl border-t-4 px-6 py-3 flex 
      justify-between items-center rounded-t-2xl border-white md:hidden z-50">

         {/* setRoute(item.id); */}
        
        {navItems.map((item) => (
          <button   key={item.id}
            onClick={() => { setActiveTab(item.id);  }}
            className={`flex flex-col items-center gap-1 ${
              activeTab === item.id ? 'text-amber-600' : 'text-white' }`} >
            <a href={item.href} className="flex flex-col items-center gap-1">
              <item.icon size={22} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </a>
          </button>
        ))}

      </div>

    </div>
  );
}

