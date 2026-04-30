'use client';
import { Phone, Mail, MapPin, Building, ExternalLink,  } from 'lucide-react';
import Image from 'next/image';

const COMPANY_INFO = {
  name: 'IKYS Multi Project Ltd',
  ceo: 'Arc. Imran Yusif Saleh (Imran Khan)',
  email: 'ikysmultiprojectltd@gmail.com',
  phone: '+234 813 733 8938',
  location: 'No. 609 Kofar Ruwa A. Kano State 700252.',
  mission: 'To redefine architectural excellence in Nigeria and beyond by delivering innovative, sustainable, and culturally resonant design solutions.',
  vision: 'To be the premier architectural and construction management firm in Africa, known for shaping the skylines of tomorrow.',
};

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-12 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 mr-2 text-amber-500" />
              <div>
                <h1 className="text-xl font-extrabold tracking-widest uppercase text-white leading-none">IKYS</h1>
                <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-neutral-300">Multi Project Ltd</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Redefining architectural excellence and construction management in Nigeria 
              with visionary designs and uncompromising quality.
            </p>
            <div className="flex space-x-4">

              <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                 {/* <ExternalLink className="w-4 h-4"/> */}
                 <a href={'#home'}>
                 <Image src={'/projects/logo4.jpeg'} width={50} height={800}  alt='Ikys'  
                 className='w-8 h-8 rounded-full bord er border-white'/></a>

              </div>
             
              <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                hover:bg-amber-600  hover:text-white transition-colors cursor-pointer">
                <a href={'https://www.tiktok.com/@arc_ikys001?is_from_webapp=1&sender_device=pc'} 
                target="_blank" rel="noopener noreferrer">
                <Image src={'/images/tiktok.png'} width={50} height={800}  alt='TikTok'  
                className='w-8 h-8 rounded-full'/></a>
              </div>
             
               <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                hover:bg-amber-600  hover:text-white transition-colors cursor-pointer">
                 <a href={'https://www.instagram.com/@arc_ikys001/?igshid=YmMyMTA%3D'} 
                 target="_blank" rel="noopener noreferrer">
                <Image src={'/images/instagram.png'} width={50} height={800}  
                alt='Instagram' className='w-8 h-8 rounded-full'/></a>
              </div>
          
              {/* <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                <a href={'https://x.com/@ikysmulti_projectltd'} 
                target="_blank" rel="noopener noreferrer">
                <Image src={'/images/twitter.png'} width={50} height={800}  
                alt='Twitter' className='w-8 h-8 rounded-full'/></a>
              </div> */}
            
              <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                <a href={'https://www.facebook.com/imran.khan.yusuf.991059'}
                target="_blank" rel="noopener noreferrer">
                <Image src={'/images/facebook.png'} width={50} height={800}  
                alt='Facebook' className='w-8 h-8 rounded-full'/></a>
              </div>
            
              <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center 
                hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                <a href={'https://wa.me/2348137338938'}
                target="_blank" rel="noopener noreferrer">
                <Image src={'/images/whatsapp.png'} width={50} height={800}  
                alt='WhatsApp' className='w-8 h-8 rounded-full'/></a>
              </div>
          
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">

              <a href={'#about'}><li><button 
              className="hover:text-amber-500 mb-3 transition-colors">About Us</button></li></a>

              <a href={'#projects'}><li><button 
              className="hover:text-amber-500 mb-3 transition-colors">Portfolio</button></li></a>

              <a href={'#services'}><li><button 
              className="hover:text-amber-500 mb-3 transition-colors">Services</button></li></a>

              <a href={'#process'}><li><button 
              className="hover:text-amber-500 transition-colors">Our Process</button></li></a>

             {/* <a href={'#home'}> <li><button 
              className="hover:text-amber-500 transition-colors">Licenses & Certifications</button></li></a> */}

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Resources</h4>
            <ul className="space-y-3  text-sm">

               <a href={'#testimonials'}><li><button  
              className="hover:text-amber-500 mb-3 transition-colors">Testimonials</button></li></a>

               <a href={'#faqs'}><li><button 
              className="hover:text-amber-500 mb-3 transition-colors">FAQs</button></li></a>

              <li><button className="hover:text-amber-500 transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-amber-500 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                <a href="tel:+2348137338938"><span>{COMPANY_INFO.phone}</span> </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-amber-400 mr-3 flex-shrink-0" />
                <a href="mailto:ikysmultiprojectltd@gmail.com"><span className="truncate">{COMPANY_INFO.email}</span></a>
              </li>
               <li className="flex items-start">
                <MapPin className="w-4 h-4 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-300 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} IKYS Multi Project Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Engineered for Production.</p>
        </div>
      </div>
    </footer>
  );
};
