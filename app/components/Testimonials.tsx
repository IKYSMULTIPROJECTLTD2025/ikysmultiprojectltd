'use client';
import {  motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 't1', name: 'Alhaji Musa Ibrahim', role: 'Property Developer', feedback: 'IKYS Multi Project Ltd delivered our commercial plaza ahead of schedule. Arc. Imran’s attention to detail is unmatched in the industry.' },
  { id: 't2', name: 'Dr. Sarah Okafor', role: 'Homeowner', feedback: 'They transformed our vision into a breathtaking reality. The luxury residence they designed for us is both beautiful and highly functional.' },
  { id: 't3', name: 'Chief Emeka Nnamdi', role: 'Corporate Client', feedback: 'Professionalism at its peak. The structural integrity and modern aesthetic of our new headquarters speak volumes about IKYS’s capabilities.' },
];

export const Testimonials = () => {
  useSEO("Testimonials", "What our clients say about IKYS Multi Project Ltd.");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full 
    py-0 bg-neutral-50 h-auto">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <SectionTitle title="Client Voices" subtitle="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS_DATA.map((test, idx) => (
            <FadeIn key={test.id} delay={idx * 0.1}>
              <div className="bg-white p-8 border border-neutral-200 shadow-sm relative h-full flex flex-col">
                <div className="flex text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-neutral-700 italic leading-relaxed mb-8 flex-grow">"{test.feedback}"</p>
                <div className="mt-auto">
                  <h4 className="font-extrabold text-neutral-900">{test.name}</h4>
                  <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


