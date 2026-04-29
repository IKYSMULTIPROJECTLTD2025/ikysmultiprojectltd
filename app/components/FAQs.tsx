'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import {  ChevronUp, ChevronDown,  } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQS_DATA: FAQ[] = [
  { id: 'f1', question: 'What is your typical project process?', answer: 'Our process begins with a comprehensive consultation, followed by conceptual design, detailed schematic development, procurement, construction management, and final handover.' },
  { id: 'f2', question: 'Do you handle projects outside Nigeria?', answer: 'Yes, while we are primarily based in Nigeria, we have the capacity and partnerships to consult and manage architectural projects across West Africa.' },
  { id: 'f3', question: 'How do you ensure project budgets are met?', answer: 'We utilize rigorous cost-estimation software and maintain transparent communication with clients. Our construction management team closely monitors all contractor bids and material costs.' },
  { id: 'f4', question: 'Can you handle both design and construction?', answer: 'Absolutely. We offer an integrated Design-Build approach, acting as your single point of contact from the first sketch to the final brick.' },
];

export const FAQs = () => {
  useSEO("FAQs", "Frequently asked questions about our architectural services.");
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
    className="w-full pt-12 bg-white h-auto">
      <div className="container mx-auto px-6 lg:px-12 py-10 max-w-4xl">
        <SectionTitle title="Frequently Asked Questions" subtitle="Knowledge Base" />
        <div className="space-y-4 mt-12">
          {FAQS_DATA.map((faq) => (
            <div key={faq.id} className="border border-neutral-200">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 transition-colors"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="font-bold text-lg text-neutral-900 pr-4">{faq.question}</span>
                {openId === faq.id ? <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />}
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

