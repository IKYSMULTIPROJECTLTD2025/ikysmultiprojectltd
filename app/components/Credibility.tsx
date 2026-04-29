'use client';
import { motion } from 'framer-motion';
import { ImagePlaceholder } from './ImagePlaceHolder';
import { FadeIn } from './FadeIn';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { FileText, ShieldCheck } from 'lucide-react';

export const Credibility = () => {
  useSEO("Credibility & Licenses", "Certifications, registrations, and licenses of IKYS Multi Project Ltd.");
  const docs = [
    { title: "Corporate Affairs Commission (CAC)", type: "Registration" },
    { title: "Architects Registration Council of Nigeria (ARCON)", type: "License" },
    { title: "Council for the Regulation of Engineering in Nigeria (COREN)", type: "Affiliation" },
    { title: "Tax Clearance Certificate", type: "Compliance" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ShieldCheck className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <SectionTitle title="Licenses & Certifications" subtitle="Our Credibility" />
          <p className="text-lg text-neutral-600">
            IKYS Multi Project Ltd operates with strict adherence to national and international building codes. We are fully registered, licensed, and insured, guaranteeing peace of mind for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white p-6 border border-neutral-200 text-center shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-10 h-10 text-neutral-300 mx-auto mb-4" />
                <h4 className="font-extrabold text-neutral-900 mb-2">{doc.title}</h4>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{doc.type}</span>
                <div className="mt-6">
                  <ImagePlaceholder text="Document Scan" aspect="aspect-[3/4]" className="bg-neutral-50 border-dashed" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
