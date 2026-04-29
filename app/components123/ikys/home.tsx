import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Building, Hammer, PencilRuler, Users, 
  Search, Phone, Mail, MapPin, CheckCircle, ChevronDown, 
  ChevronUp, Star, Award, ShieldCheck, ChevronRight, ChevronLeft, 
  XCircle, FileText, ExternalLink 
} from 'lucide-react';


interface Project {
  id: string;
  name: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Public';
  status: 'Completed' | 'Ongoing' | 'Planned';
  date: string;
  description: string;
  images: string[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface RouteProps {
  setRoute: (route: string) => void;
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
    id: 'p1', name: 'Abuja Central Business Tower', category: 'Commercial', status: 'Completed', date: '2023',
    description: 'A 25-story state-of-the-art commercial complex featuring sustainable energy systems and intelligent building management.',
    images: ['tower-main', 'tower-lobby', 'tower-office', 'tower-exterior', 'tower-night', 'tower-plan', 'tower-detail-1', 'tower-detail-2', 'tower-roof', 'tower-basement']
  },
  {
    id: 'p2', name: 'Lagos Luxury Residences', category: 'Residential', status: 'Ongoing', date: '2025',
    description: 'Premium waterfront residential apartments with modern minimalist aesthetics and private marina access.',
    images: ['res-main', 'res-pool', 'res-interior', 'res-balcony', 'res-kitchen', 'res-bedroom', 'res-bath', 'res-gym', 'res-lounge', 'res-facade']
  },
  {
    id: 'p3', name: 'Kano Industrial Park', category: 'Industrial', status: 'Planned', date: '2026',
    description: 'A comprehensive 50-hectare industrial zone designed for optimal logistics and manufacturing efficiency.',
    images: ['ind-main', 'ind-warehouse', 'ind-roads', 'ind-admin', 'ind-solar', 'ind-gates', 'ind-loading', 'ind-interior', 'ind-masterplan', 'ind-render']
  },
  {
    id: 'p4', name: 'National Heritage Museum', category: 'Public', status: 'Completed', date: '2022',
    description: 'A culturally significant public building that blends traditional Nigerian architectural motifs with contemporary materials.',
    images: ['mus-main', 'mus-atrium', 'mus-gallery', 'mus-exterior', 'mus-night', 'mus-landscape', 'mus-entrance', 'mus-cafe', 'mus-roof', 'mus-details']
  },
  {
    id: 'p5', name: 'Victoria Island Corporate HQ', category: 'Commercial', status: 'Ongoing', date: '2024',
    description: 'Headquarters for a leading financial institution, emphasizing security, transparency, and corporate prestige.',
    images: ['hq-main', 'hq-boardroom', 'hq-lobby', 'hq-facade', 'hq-plaza', 'hq-offices', 'hq-cafeteria', 'hq-parking', 'hq-bridge', 'hq-render']
  },
  {
    id: 'p6', name: 'Maitama Eco-Villas', category: 'Residential', status: 'Completed', date: '2021',
    description: 'A gated community of 12 eco-friendly luxury villas with passive cooling and solar integration.',
    images: ['eco-main', 'eco-living', 'eco-garden', 'eco-solar', 'eco-kitchen', 'eco-bed', 'eco-bath', 'eco-street', 'eco-pool', 'eco-gate']
  },
];

const SERVICES_DATA: Service[] = [
  { id: 's1', title: 'Architectural Design', description: 'Comprehensive design services from conceptualization to detailed working drawings, ensuring aesthetic brilliance and functional efficiency.', icon: PencilRuler },
  { id: 's2', title: 'Construction Management', description: 'End-to-end project oversight, coordinating contractors, managing budgets, and ensuring strict adherence to timelines and quality standards.', icon: Hammer },
  { id: 's3', title: 'Building Planning', description: 'Strategic site analysis, feasibility studies, and master planning for complex residential, commercial, and industrial developments.', icon: Building },
  { id: 's4', title: 'Consulting Services', description: 'Expert advisory on building codes, sustainability practices, material selection, and structural integrity.', icon: Users },
];

const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 't1', name: 'Alhaji Musa Ibrahim', role: 'Property Developer', feedback: 'IKYS Multi Project Ltd delivered our commercial plaza ahead of schedule. Arc. Imran’s attention to detail is unmatched in the industry.' },
  { id: 't2', name: 'Dr. Sarah Okafor', role: 'Homeowner', feedback: 'They transformed our vision into a breathtaking reality. The luxury residence they designed for us is both beautiful and highly functional.' },
  { id: 't3', name: 'Chief Emeka Nnamdi', role: 'Corporate Client', feedback: 'Professionalism at its peak. The structural integrity and modern aesthetic of our new headquarters speak volumes about IKYS’s capabilities.' },
];

const FAQS_DATA: FAQ[] = [
  { id: 'f1', question: 'What is your typical project process?', answer: 'Our process begins with a comprehensive consultation, followed by conceptual design, detailed schematic development, procurement, construction management, and final handover.' },
  { id: 'f2', question: 'Do you handle projects outside Nigeria?', answer: 'Yes, while we are primarily based in Nigeria, we have the capacity and partnerships to consult and manage architectural projects across West Africa.' },
  { id: 'f3', question: 'How do you ensure project budgets are met?', answer: 'We utilize rigorous cost-estimation software and maintain transparent communication with clients. Our construction management team closely monitors all contractor bids and material costs.' },
  { id: 'f4', question: 'Can you handle both design and construction?', answer: 'Absolutely. We offer an integrated Design-Build approach, acting as your single point of contact from the first sketch to the final brick.' },
];


const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = `${title} | ${COMPANY_INFO.name}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    window.scrollTo(0, 0);
  }, [title, description]);
};


const ImagePlaceholder = ({ text, className = "", aspect = "aspect-video" }: { text: string, className?: string, aspect?: string }) => (
  <div className={`bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center text-neutral-400 p-6 overflow-hidden ${aspect} ${className}`}>
    <Building className="w-8 h-8 mb-2 opacity-50" />
    <span className="text-sm font-medium text-center uppercase tracking-wider">{text}</span>
  </div>
);

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 md:mb-16">
    {subtitle && (
      <span className={`text-sm font-bold tracking-[0.2em] uppercase mb-3 block ${light ? 'text-amber-500' : 'text-amber-600'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-neutral-900'}`}>
      {title}
    </h2>
    <div className={`w-16 h-1 mt-6 ${light ? 'bg-amber-500' : 'bg-neutral-900'}`}></div>
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = "" }: { children: React.ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'outline', className?: string }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300";
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-amber-600",
    secondary: "bg-amber-600 text-white hover:bg-neutral-900",
    outline: "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);


const Home = ({ setRoute }: RouteProps) => {
  useSEO("Home", "IKYS Multi Project Ltd - Premium Architectural & Construction Management in Nigeria.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ImagePlaceholder text="Hero Background Architecture Image" className="w-full h-full object-cover rounded-none border-none bg-neutral-900" aspect="aspect-auto" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base block mb-4">Shaping Tomorrow's Skyline</span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Visionary Architecture. <br/><span className="text-neutral-400">Precision Execution.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl font-light">
                {COMPANY_INFO.mission}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => setRoute('projects')} variant="secondary">View Our Portfolio</Button>
                <Button onClick={() => setRoute('contact')} variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900">Consult With Us</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="Our Expertise" subtitle="What We Do" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.1}>
                <div className="group p-8 bg-neutral-50 border border-neutral-100 hover:border-amber-500 transition-colors duration-300 h-full flex flex-col cursor-pointer" onClick={() => setRoute('services')}>
                  <service.icon className="w-12 h-12 text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <span className="text-sm font-bold text-neutral-900 uppercase tracking-widest flex items-center group-hover:text-amber-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionTitle title="Featured Work" subtitle="Portfolio" light />
            <Button onClick={() => setRoute('projects')} variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-white hover:text-neutral-900 hidden md:flex">
              View All Projects
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.slice(0, 4).map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <div className="group relative overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setRoute('projects')}>
                  <ImagePlaceholder text={`Project Image: ${project.name}`} className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <div className="flex items-center text-neutral-300 text-sm">
                      <MapPin className="w-4 h-4 mr-1" /> {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
             <Button onClick={() => setRoute('projects')} variant="secondary">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Build Your Vision?</h2>
          <p className="text-amber-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Partner with IKYS Multi Project Ltd for uncompromising quality, innovative design, and expert construction management.
          </p>
          <Button onClick={() => setRoute('contact')} variant="primary" className="bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white shadow-xl">
            Start a Conversation
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

const About = ({ setRoute }: RouteProps) => {
  useSEO("About Us", "Learn about IKYS Multi Project Ltd and our CEO Arc. Imran Yusif Saleh.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24">
      {/* Header */}
      <section className="bg-neutral-50 py-20 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="About IKYS" subtitle="Our Story" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
              <p>
                Founded on the principles of integrity, innovation, and uncompromising quality, <strong>{COMPANY_INFO.name}</strong> has established itself as a cornerstone of architectural and construction excellence in Nigeria.
              </p>
              <p>
                We do not just design buildings; we craft environments that inspire, function seamlessly, and stand the test of time. Our multi-disciplinary approach ensures that every project, regardless of scale, receives the meticulous attention it deserves from conceptualization to final delivery.
              </p>
            </div>
            <ImagePlaceholder text="Company Office / Team Placeholder" aspect="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <ImagePlaceholder text="CEO Portrait Placeholder" aspect="aspect-[3/4]" className="rounded-t-full shadow-2xl" />
            </div>
            <div className="w-full md:w-2/3">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Leadership</span>
              <h2 className="text-4xl font-extrabold text-neutral-900 mb-2">{COMPANY_INFO.ceo}</h2>
              <h3 className="text-xl text-neutral-500 mb-8 font-light">Chief Executive Officer & Lead Architect</h3>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
                <p>
                  Arc. Imran Yusif Saleh, known in the industry as Imran Khan, brings decades of visionary experience to IKYS Multi Project Ltd. His design philosophy marries contemporary global aesthetics with profound local cultural relevance.
                </p>
                <p>
                  Under his leadership, the firm has successfully delivered complex residential, commercial, and public infrastructure projects across Nigeria. Arc. Imran is deeply committed to sustainable architecture and rigorous construction standards, ensuring that every IKYS structure is a testament to durability and elegance.
                </p>
              </div>
              
              <div className="mt-10 flex gap-4">
                <div className="p-4 bg-neutral-50 border border-neutral-100 rounded text-center min-w-[120px]">
                  <span className="block text-3xl font-extrabold text-amber-600 mb-1">15+</span>
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
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-l-4 border-amber-500 pl-8">
                <h3 className="text-3xl font-extrabold mb-6">Our Vision</h3>
                <p className="text-xl text-neutral-300 font-light leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Services = ({ setRoute }: RouteProps) => {
  useSEO("Our Services", "Architectural design, construction management, and building planning services by IKYS.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24">
      <section className="bg-neutral-50 py-20 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <SectionTitle title="Professional Services" subtitle="Capabilities" />
          <p className="text-xl text-neutral-600 leading-relaxed">
            We provide a holistic suite of architectural and construction services. From the initial sketch to the final coat of paint, our multi-disciplinary team ensures excellence at every phase.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {SERVICES_DATA.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <ImagePlaceholder text={`${service.title} Visualization`} aspect="aspect-[4/3]" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <service.icon className="w-16 h-16 text-amber-600" />
                  <h2 className="text-3xl font-extrabold text-neutral-900">{service.title}</h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mt-6">
                    {[1, 2, 3].map(item => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-700">Detailed aspect of {service.title.toLowerCase()} service offering ensuring quality and precision.</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Button onClick={() => setRoute('contact')} variant="outline">Request Consultation</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Projects = ({ setRoute }: RouteProps) => {
  useSEO("Portfolio", "Explore the architectural portfolio of IKYS Multi Project Ltd.");
  
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(p => {
      const matchFilter = filter === 'All' || p.status === filter || p.category === filter;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  const categories = ['All', 'Completed', 'Ongoing', 'Planned', 'Commercial', 'Residential', 'Public'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 min-h-screen bg-neutral-50">
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="Our Portfolio" subtitle="Selected Works" />
          
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 shadow-sm border border-neutral-100">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${filter === cat ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-neutral-100 border-none focus:ring-2 focus:ring-amber-500 outline-none font-medium"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.length > 0 ? filteredProjects.map(project => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id} 
                  className="group bg-white border border-neutral-200 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder text={project.name} aspect="aspect-[4/3]" className="group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2 flex justify-between">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mb-3">{project.name}</h3>
                    <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-20 text-center text-neutral-500">
                  <FolderOpenIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p className="text-xl">No projects found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal Viewer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
            >
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-2xl font-extrabold">{selectedProject.name}</h2>
                  <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">{selectedProject.category} | {selectedProject.status} | {selectedProject.date}</span>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-neutral-900" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg text-neutral-700 mb-8 max-w-4xl">{selectedProject.description}</p>
                
                <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-500 mb-4">Project Gallery ({selectedProject.images.length} Images)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, idx) => (
                    <ImagePlaceholder key={idx} text={`${selectedProject.name} - Img ${idx+1}`} aspect={idx === 0 ? "aspect-square sm:col-span-2 lg:col-span-2" : "aspect-square"} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Fallback icon for empty state
const FolderOpenIcon = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>;

const Process = () => {
  useSEO("Our Process", "The architectural and construction workflow at IKYS Multi Project Ltd.");
  const steps = [
    { title: "Consultation & Briefing", desc: "Understanding your vision, requirements, budget, and timeline. We conduct initial site assessments and feasibility studies." },
    { title: "Conceptual Design", desc: "Translating ideas into sketches and 3D visualizations. We present architectural concepts for your feedback and approval." },
    { title: "Detailed Engineering", desc: "Developing comprehensive architectural, structural, and MEP (Mechanical, Electrical, Plumbing) working drawings." },
    { title: "Execution & Management", desc: "On-site construction management, coordinating contractors, and ensuring strict adherence to design specifications." },
    { title: "Delivery & Handover", desc: "Final quality assurance checks, snagging, and handing over the keys to your completed masterpiece." },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <SectionTitle title="Our Workflow" subtitle="The Process" />
        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-neutral-200 -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`relative flex flex-col md:flex-row items-center mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full p-6 md:px-12">
                  <div className={`bg-neutral-50 p-8 border border-neutral-100 shadow-sm relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-amber-500 font-extrabold text-5xl absolute -top-6 -left-4 opacity-20">0{idx + 1}</span>
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

const Testimonials = () => {
  useSEO("Testimonials", "What our clients say about IKYS Multi Project Ltd.");
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-20">
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

const FAQs = () => {
  useSEO("FAQs", "Frequently asked questions about our architectural services.");
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-20 max-w-4xl">
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

const Credibility = () => {
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

const Contact = () => {
  useSEO("Contact Us", "Get in touch with IKYS Multi Project Ltd.");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a production environment, this would submit to an API endpoint.");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
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
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Head Office</h4>
                  <p className="text-neutral-600">{COMPANY_INFO.location} (Detailed address placeholder)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Phone</h4>
                  <p className="text-neutral-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1 uppercase tracking-widest text-sm">Email</h4>
                  <p className="text-neutral-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-neutral-200 border border-neutral-300 relative overflow-hidden">
              <ImagePlaceholder text="Interactive Map Placeholder" className="w-full h-full" />
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
                <label className="block text-sm font-bold text-neutral-700 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors">
                  <option>New Project Inquiry</option>
                  <option>Consultation Request</option>
                  <option>Career Opportunity</option>
                  <option>Other</option>
                </select>
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


const Navbar = ({ route, setRoute }: { route: string, setRoute: (r: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Credibility', id: 'credibility' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setRoute(id);
    setMobileMenuOpen(false);
  };

  // Determine if we need dark or light text based on route & scroll
  const isDarkBg = route === 'home' && !isScrolled;
  const textColorClass = isDarkBg ? 'text-white' : 'text-neutral-900';
  const logoColorClass = isDarkBg ? 'text-white' : 'text-neutral-900';
  const bgColorClass = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-transparent';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColorClass} ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer flex items-center" onClick={() => handleNavClick('home')}>
            <Building className={`w-8 h-8 mr-2 ${isDarkBg ? 'text-amber-500' : 'text-amber-600'}`} />
            <div>
              <h1 className={`text-xl font-extrabold tracking-widest uppercase leading-none ${logoColorClass}`}>IKYS</h1>
              <span className={`text-[0.65rem] font-bold tracking-[0.3em] uppercase ${isDarkBg ? 'text-neutral-400' : 'text-neutral-500'}`}>Multi Project Ltd</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-amber-500 ${route === link.id ? 'text-amber-500' : textColorClass}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
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
               {navLinks.concat([{ name: 'Testimonials', id: 'testimonials' }, { name: 'FAQs', id: 'faqs' }]).map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => handleNavClick(link.id)}
                    className={`text-2xl font-extrabold text-left uppercase tracking-wider ${route === link.id ? 'text-amber-500' : 'text-white'}`}
                  >
                    {link.name}
                  </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = ({ setRoute }: RouteProps) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-10 border-t border-neutral-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 mr-2 text-amber-500" />
              <div>
                <h1 className="text-xl font-extrabold tracking-widest uppercase text-white leading-none">IKYS</h1>
                <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-neutral-500">Multi Project Ltd</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Redefining architectural excellence and construction management in Nigeria with visionary designs and uncompromising quality.
            </p>
            <div className="flex space-x-4">
               {/* Social Icons Placeholders */}
               <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><ExternalLink className="w-4 h-4"/></div>
               <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><ExternalLink className="w-4 h-4"/></div>
               <div className="w-10 h-10 rounded bg-neutral-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><ExternalLink className="w-4 h-4"/></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setRoute('about')} className="hover:text-amber-500 transition-colors">About Us</button></li>
              <li><button onClick={() => setRoute('projects')} className="hover:text-amber-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => setRoute('services')} className="hover:text-amber-500 transition-colors">Services</button></li>
              <li><button onClick={() => setRoute('process')} className="hover:text-amber-500 transition-colors">Our Process</button></li>
              <li><button onClick={() => setRoute('credibility')} className="hover:text-amber-500 transition-colors">Licenses & Certifications</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setRoute('testimonials')} className="hover:text-amber-500 transition-colors">Testimonials</button></li>
              <li><button onClick={() => setRoute('faqs')} className="hover:text-amber-500 transition-colors">FAQs</button></li>
              <li><button className="hover:text-amber-500 transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-amber-500 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} IKYS Multi Project Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Engineered for Production.</p>
        </div>
      </div>
    </footer>
  );
};


export default function App() {
  const [route, setRoute] = useState<string>('home');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case 'home': return <Home setRoute={setRoute} />;
      case 'about': return <About setRoute={setRoute} />;
      case 'services': return <Services setRoute={setRoute} />;
      case 'projects': return <Projects setRoute={setRoute} />;
      case 'process': return <Process />;
      case 'testimonials': return <Testimonials />;
      case 'faqs': return <FAQs />;
      case 'credibility': return <Credibility />;
      case 'contact': return <Contact />;
      default: return <Home setRoute={setRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
      <Navbar route={route} setRoute={setRoute} />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <div key={route} className="flex-grow flex flex-col">
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>

      <Footer setRoute={setRoute} />
    </div>
  );
}