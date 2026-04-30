'use client';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import Image from 'next/image';


const COMPANY_INFO = {
  name: 'IKYS Multi Project Ltd',
  ceo: 'Arc. Imran Yusuf Saleh (Imran Khan)',
  email: 'ikysmultiprojectltd@gmail.com',
  phone: '+234 813 733 8938',
  location: 'Nigeria',
  mission: 'To redefine architectural excellence in Nigeria and beyond by delivering innovative, sustainable, and culturally resonant design solutions.',
  vision: 'To be the premier architectural and construction management firm in Africa, known for shaping the skylines of tomorrow.',
};

export const About = () => {
  useSEO("About Us", "Learn about IKYS Multi Project Ltd and our CEO Arc. Imran Yusif Saleh.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-12">
      {/* Header */}
      <section className="bg-neutral-50 py-10 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="About IKYS" subtitle="Our Story" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <Image src={'/projects/logo2.png'} width={500} height={800}  alt='Company Office / Team'  
             className='w-full rounded-lg p- border-2 border-neutral-300 shadow-2xl'/>
            <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
              <p>
                        IKYS MULTI PROJECT LTD is a leading and fast-growing construction company 
                        specializing in building planning, architectural design, and construction management. 
                        We provide a broad spectrum of professional services tailored to meet the unique needs of 
                        clients across residential, commercial, and infrastructure sectors. Our expertise covers 
                        the entire project lifecycle—from concept development and planning to execution and delivery. 
                        With a strong commitment to innovation, quality, and sustainability, we deliver solutions 
                        that align with modern industry standards while ensuring efficiency, durability,
                         and client satisfaction. Our team combines technical excellence with practical 
                         experience to transform ideas into outstanding structures.

              </p>
             
              <p>
                We do not just design buildings; we craft environments that inspire, function seamlessly, and stand the test of time. Our multi-disciplinary approach ensures that every project, regardless of scale, receives the meticulous attention it deserves from conceptualization to final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
               <Image src={'/images/imran.png'} width={500} height={800}  alt='"CEO Portrait'  
             className='rounded-t-full shadow-2xl'/>
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Leadership</span>
              <h2 className="text-4xl font-extrabold text-neutral-900 mb-2">{COMPANY_INFO.ceo}</h2>
              <h3 className="text-xl text-neutral-500 mb-8 font-light">Chief Executive Officer & Lead Architect</h3>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  Arc. Imran Yusuf Saleh, known in the industry as Imran Khan, brings decades of visionary experience to IKYS Multi Project Ltd. His design philosophy marries contemporary global aesthetics with profound local cultural relevance.
                </p>
                <p>
                  Under his leadership, the firm has successfully delivered complex residential, commercial, and public infrastructure projects across Nigeria. Arc. Imran is deeply committed to sustainable architecture and rigorous construction standards, ensuring that every IKYS structure is a testament to durability and elegance.
                </p>
              </div>
              
              <div className="mt-10 flex gap-4">
                <div className="p-4 bg-neutral-50 border border-neutral-100 rounded text-center min-w-[120px]">
                  <span className="block text-3xl font-extrabold text-amber-600 mb-1">10+</span>
                  <span className="text-xs uppercase tracking-wider font-bold text-neutral-500">Years Exp.</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-100 rounded text-center min-w-[120px]">
                  <span className="block text-3xl font-extrabold text-amber-600 mb-1">100+</span>
                  <span className="text-xs uppercase tracking-wider font-bold text-neutral-500">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="border-l-4 border-amber-500 pl-8">
                <h3 className="text-3xl font-extrabold mb-6">Our Mission</h3>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  {/* {COMPANY_INFO.mission} */}
                  
               <Image src={'/projects/mission.png'} width={500} height={800}  alt='Company'  
                           className='w-full h-full'/>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-l-4 border-amber-500 pl-8">
                <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  {/* {COMPANY_INFO.vision} */}
                  
               <Image src={'/projects/vision.png'} width={500} height={800}  alt='Company'  
                           className='w-full h-full'/>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  );
};


