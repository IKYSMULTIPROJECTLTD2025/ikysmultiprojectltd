'use client';
import { motion } from 'framer-motion';
import { ImagePlaceholder } from './ImagePlaceHolder';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { Button } from './Button';
import { Phone, Mail, MapPin,  } from 'lucide-react';
import Image from 'next/image';

const COMPANY_INFO = {
  name: 'IKYS Multi Project Ltd',
  ceo: 'Arc. Imran Yusif Saleh (Imran Khan)',
  email: 'ikysmultiprojectltd@gmail.com',
  phone: '+234 813 733 8938',
  location: ' No. 609 Kofar Ruwa A. Kano State 700252.',
  mission: 'To redefine architectural excellence in Nigeria and beyond by delivering innovative, sustainable, and culturally resonant design solutions.',
  vision: 'To be the premier architectural and construction management firm in Africa, known for shaping the skylines of tomorrow.',
};

export const Contact = () => {
  useSEO("Contact Us", "Get in touch with IKYS Multi Project Ltd.");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Please use this number to send us a message via WhatsApp:  " + COMPANY_INFO.phone);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-12 bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <SectionTitle title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-extrabold text-neutral-900 mb-6">Let's Discuss Your Next Project</h3>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Whether you have a clear vision or need expert guidance to start planning, our team is ready to assist you. Reach out via phone, email, or visit our office.
              </p>
            </div>
            
            <div className="space-y-6">
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Phone</h4>
                  <a href="tel:+2348137338938"><p className="text-neutral-600">{COMPANY_INFO.phone}</p></a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Email</h4>
                  <a href="mailto:ikysmultiprojectltd@gmail.com"><p className="text-neutral-600">{COMPANY_INFO.email}</p></a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Head Office</h4>
                  <p className="text-neutral-600">{COMPANY_INFO.location}</p>
                </div>
              </div>

            </div>

            <div className="w-full  max-sm:hidden h-64 bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <ImagePlaceholder text="Interactive Map " className="w-full h-full" />

               {/* <Image src={'/projects/logo2.png'} width={500} height={800}  alt='Company'  
                           className='w-full h-full'/> */}

            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-50 p-8 md:p-12 border border-neutral-200 shadow-sm">
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-700 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors" />
              </div>
            
              <div>
                <label className="block text-sm font-bold text-neutral-700 uppercase tracking-widest mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors resize-none"></textarea>
              </div>
              <Button variant="primary" className="w-full">Submit Message</Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

