'use client';
import { Building, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export const Navbar = ({ route }: { route: string, }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#about' },
    { name: 'Services', id: '#services' },
    { name: 'Process', id: '#process' },
    { name: 'Projects', id: '#projects' },
   // { name: 'Credibility', id: 'credibility' },
    { name: 'Contact', id: '#contact' },
    //{ name: 'Testimonials', id: '#testimonials' },
    //{ name: 'faqs', id: '#faqs' },
  ];

  // Determine if we need dark or light text based on route & scroll
  const isDarkBg = route === 'home' && !isScrolled;
  const textColorClass = isDarkBg ? 'text-white' : 'text-neutral-900';
  const logoColorClass = isDarkBg ? 'text-white' : 'text-neutral-900';
  const bgColorClass = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColorClass} ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
       
          <a href={'#home'}>
          <div className="cursor-pointer flex items-center">
            {/* <Building className={`w-8 h-8 mr-2 ${isDarkBg ? 'text-amber-500' : 'text-amber-600'}`} /> */}
             <Image src={'/projects/logo.png'} width={50} height={80}  alt='logo'  
                         className={`w-12 h-12 mr-2 rounded ${isDarkBg ? 'border-2 border-amber-500' : 'border-2 border-amber-600'}`}/>
            <div>
              <h1 className={`text-xl font-extrabold tracking-widest uppercase leading-none ${logoColorClass}`}>IKYS</h1>
              <span className={`text-[0.65rem] font-bold tracking-[0.3em] uppercase 
                ${isDarkBg ? 'text-amber-500' : 'text-neutral-600'}`}>Multi Project Ltd</span>
            </div>
          </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-amber-500 
                  ${route === link.id ? 'text-amber-500' : textColorClass}`}
              >
               <a href={link.id}>{link.name}</a> 
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={`w-6 h-6 ${textColorClass}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween' }}
            className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-neutral-800">
              <div className="flex items-center">
                 <Building className="w-8 h-8 mr-2 text-amber-500" />
                 <h1 className="text-xl font-extrabold tracking-widest uppercase text-white">IKYS</h1>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-amber-500">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-6">
               {navLinks.concat([{ name: 'Testimonials', id: '#testimonials' }, { name: 'FAQs', id: '#faqs' }]).map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-extrabold text-left uppercase tracking-wider ${route === link.id ? 'text-amber-500' : 'text-white'}`}
                  >
                     <a href={link.id}>{link.name}</a> 
                  </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
