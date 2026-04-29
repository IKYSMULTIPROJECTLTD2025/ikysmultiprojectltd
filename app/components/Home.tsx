'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { Button } from './Button';
import {MapPin,  Building,  ArrowRight, PencilRuler, Hammer, Users,  } from 'lucide-react';
import { FadeIn } from './FadeIn';
import Image from 'next/image';
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { FAQs } from "../components/FAQs";
import { Contact } from '../components/Contact';

interface Project {
  id: string;
  name: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Public';
  status: 'Completed' | 'Ongoing' | 'Planned';
  date: string;
  description: string;
  image: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}


const COMPANY_INFO = {
  name: 'IKYS Multi Project Ltd',
  ceo: 'Arc. Imran Yusif Saleh (Imran Khan)',
  email: 'ikysmultiprojectltd@gmail.com',
  phone: '+234 813 733 8938',
  location: 'Nigeria',
  mission: 'To redefine architectural excellence in Nigeria and beyond by delivering innovative, sustainable, and culturally resonant design solutions.',
  vision: 'To be the premier architectural and construction management firm in Africa, known for shaping the skylines of tomorrow.',
};


const PROJECTS_DATA: Project[] = [
  {
    id: 'p1', name: 'Central Business Tower', category: 'Commercial', status: 'Completed', date: '2023',
    description: 'A 25-story state-of-the-art commercial complex featuring sustainable energy systems and intelligent building management.',
    image:'/images/main-project.png'
    
  },
  {
    id: 'p2', name: 'Luxury Residence', category: 'Residential', status: 'Ongoing', date: '2025',
    description: 'Premium waterfront residential apartments with modern minimalist aesthetics and private marina access.',
    image:'/images/residence1.png'
    
  },
  {
    id: 'p3', name: 'Industrial Park', category: 'Industrial', status: 'Planned', date: '2026',
    description: 'A comprehensive 50-hectare industrial zone designed for optimal logistics and manufacturing efficiency.',
    image:'/images/industry.png'

  },
  {
    id: 'p4', name: 'Private school', category: 'Public', status: 'Completed', date: '2022',
    description: 'A culturally significant public building that blends traditional Nigerian architectural motifs with contemporary materials.',
    image:'/images/school.png'

  },
  {
    id: 'p5', name: 'Victoria Island Corporate HQ', category: 'Commercial', status: 'Ongoing', date: '2024',
    description: 'Headquarters for a leading financial institution, emphasizing security, transparency, and corporate prestige.',
    image:''
    
  },
  {
    id: 'p6', name: 'Maitama Eco-Villas', category: 'Residential', status: 'Completed', date: '2021',
    description: 'A gated community of 12 eco-friendly luxury villas with passive cooling and solar integration.',
    image:'/images/main-project.png'
  },
];

const SERVICES_DATA: Service[] = [
  { id: 's1', title: 'Architectural Design', description: 'Comprehensive design services from conceptualization to detailed working drawings, ensuring aesthetic brilliance and functional efficiency.', icon: PencilRuler },
  { id: 's2', title: 'Construction Management', description: 'End-to-end project oversight, coordinating contractors, managing budgets, and ensuring strict adherence to timelines and quality standards.', icon: Hammer },
  { id: 's3', title: 'Building Planning', description: 'Strategic site analysis, feasibility studies, and master planning for complex residential, commercial, and industrial developments.', icon: Building },
  { id: 's4', title: 'Consulting Services', description: 'Expert advisory on building codes, sustainability practices, material selection, and structural integrity.', icon: Users },
];

// h-[100vh] min-h-[600px]
export const Home = () => {
  useSEO("Home", "IKYS Multi Project Ltd - Premium Architectural & Construction Management in Nigeria.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
      {/* Hero Section */}
      <section id='home' className="relative min-h-screen pt-10 pb-7 flex items-center justify-center bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-0">
          <Image src={'/images/main-project.png'} width={500} height={800}  alt='Hero Background Architecture Image' 
          className="w-full h-full object-cover rounded-none border-none bg-neutral-900" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
        
      <div className='flex xl:flex-row flex-col'>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center md:text-left flex  flex-col md:flex-row items-center mt-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-amber-500  font-bold tracking-[0.2em] uppercase text-sm md:text-base block mb-3">
                Shaping Tomorrow's Skyline</span>
              <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight mb-3">
               Ikys Multi Project Ltd. <br/><span className="text-amber-500">Building Planning & Construction Management</span>
              </h1>
              <p className="text-sm md:text-xl text-neutral-200 mb-5 max-w-2xl font-light">
                {COMPANY_INFO.mission}
               
              </p>
              <div className="flex flex-col sm:flex-row gap-4  justify-center md:justify-start">
                 <a href={'#projects'}><Button 
                variant="secondary"
                className="hover:border-amber-500 max-sm:w-full hover:border-2 rounded">View Our Portfolio</Button></a>
                 <a href={'#contact'}><Button  
                variant="outline" 
                className="border-white text-white max-sm:w-full hover:border-amber-500 rounded"> Consult With Us </Button></a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center md:text-left
         items-center mt-5">
        <Image src={'/images/main-project.png'} width={500} height={800}  alt='Hero Background Architecture Image' 
          className="w-full h-full object-cover rounded-3xl border-none bg-neutral-900 " />
        </div>

        </div>

      </section>

      {/* Services Summary */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="Our Expertise" subtitle="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="group p-8 bg-neutral-50 border border-neutral-300 hover:border-amber-500
                 transition-colors duration-300 h-full flex flex-col cursor-pointer">
                  <service.icon className="w-12 h-12 text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <span className="text-sm font-bold text-neutral-900 uppercase tracking-widest 
                  flex items-center group-hover:text-amber-600 transition-colors">
                   <a href={'#projects'}>  Learn More </a><ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
     
      <section className="py-12 bg-neutral-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-0">
            <SectionTitle title="Featured Work" subtitle="Portfolio" light />
         
              <a href={'#projects'}><Button 
                variant="outline" 
                className="border-2 mb-10 text-white hover:border-amber-500 hover:text-amber-500
                 rounded border-white hidden md:flex">
                View All Projects
              </Button></a>
          
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.slice(0, 4).map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <a href={'#projects'}>
                <div className="group rounded-2xl relative overflow-hidden bg-neutral-900 cursor-pointer"  >

                  <Image src={project.image} width={500} height={800}  alt={project.name} 
                  className="w-full p-2 border-2 border-neutral-500 rounded-2xl
                  aspect-[4/3] group-hover:scale-105 
                  transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <div className="flex items-center text-neutral-300 text-sm">
                      <MapPin className="w-4 h-4 mr-1" /> {COMPANY_INFO.location}
                    </div>
                  </div>
                
                </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
              <a href={'#projects'}><Button 
             variant="secondary">View All Projects</Button></a>

          </div>
        </div>
      </section>

      
 
      <section id="about"> <About  /> </section>
      <section id="services"> <Services  /> </section>
      <section id="process"> <Process /> </section>
      <section id="projects"> <Projects  /> </section>
      {/* <section id="credibility"> <Credibility /> </section> */}
      <section id="testimonials"> <Testimonials /> </section>
      <section id="faqs"> <FAQs /> </section>
      <section id="contact"> <Contact /> </section>

      {/* CTA Section */}
      <section className="py-12 bg-amber-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter 
        blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700 rounded-full mix-blend-multiply 
        filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Build Your Vision?</h2>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Partner with IKYS Multi Project Ltd for uncompromising quality, innovative design, and expert construction management.
          </p>
          <a href={'#contact'}> <Button 
           variant="primary" className="rounded-full hover:bg-amber-950 px-12 py-4">
            Start a Conversation
          </Button></a>
        </div>
      </section>
    </motion.div>
  );
};

