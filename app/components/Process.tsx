'use client';
import {  motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { FadeIn } from './FadeIn';

export const Process = () => {
  useSEO("Our Process", "The architectural and construction workflow at IKYS Multi Project Ltd.");
  const steps = [
    { title: "Consultation & Briefing",  desc: "Understanding your vision, requirements, budget, and timeline. We conduct initial site assessments and feasibility studies." },
    { title: "Conceptual Design",  desc: "Translating ideas into sketches and 3D visualizations. We present architectural concepts for your feedback and approval." },
    { title: "Detailed Engineering", desc: "Developing comprehensive architectural, structural, and MEP (Mechanical, Electrical, Plumbing) working drawings." },
    { title: "Execution & Management", desc: "On-site construction management, coordinating contractors, and ensuring strict adherence to design specifications." },
    { title: "Delivery & Handover", desc: "Final quality assurance checks, snagging, and handing over the keys to your completed masterpiece." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <SectionTitle title="Our Workflow" subtitle="The Process" />
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-neutral-200 -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative flex flex-col md:flex-row items-center mb-16 
                ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full p-6 md:px-12">
                  <div className={`bg-neutral-50 p-8 border border-neutral-300 shadow-sm relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-amber-500 font-extrabold text-5xl absolute -top-6 -left-4 opacity-100">0{idx + 1}</span>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow -translate-x-1/2 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
