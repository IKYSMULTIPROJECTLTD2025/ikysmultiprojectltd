'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { X, Search,  } from 'lucide-react';
import { useMemo, useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  name: string;
  category: 'Commercial' | 'Residential' | 'Industrial' | 'Public';
  status: 'Completed' | 'Ongoing' | 'Planned' | 'Proposed';
  date: string;
  description: string;
  images: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'p1', name: 'IKYS Grand Crown Waterfront Hotel & Resort ', category: 'Commercial', status: 'Proposed', date: '2026',
    description: `   The IKYS Grand Crown Waterfront Hotel & Resort is a proposed world-class five-star 
    hospitality destination designed to become an iconic landmark for luxury tourism, international conferences, 
    and high-end business travel. Strategically located along a premium waterfront, the development integrates iconic 
    architecture, lush landscapes, and cutting-edge hotel infrastructure to meet global hospitality standards.
`,
    images: [
      'projects/main1.png', 
      'projects/main2.png', 
      'projects/main3.png', 
      'projects/main4.png', 
      'projects/main5.jpg', 
      'projects/main6.png'
     ]
  },

  {
    id: 'p2', name: 'Luxury Residences', category: 'Residential', status: 'compled', date: '2024',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro01.png', 
      'projects/pro02.png'
     ]
  },

  {
    id: 'p3', name: 'Luxury Residences', category: 'Residential', status: 'Planned', date: '2026',
    description: 'Premium waterfront residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro05.png', 
      'projects/pro03.jpg', 
      'projects/pro04.jpg', 
      'projects/pro06.jpg', 
      'projects/pro07.png',
      'projects/pro08.jpg',
      'projects/pro09.png',
      'projects/pro10.png'
      ]
  },

  {
    id: 'p4', name: 'PROPOSED MIXED-USE DEVELOPMENT', category: 'Residential', status: 'Proposed', date: '2026',
    description: 
    `Project Overview:

     The proposed development is a mixed-use facility designed to integrate multiple complementary functions within a 
     single, well-organized environment. The project combines commercial, educational, residential, and religious 
     spaces, creating a vibrant and self-sustaining hub that serves diverse community needs.

     The development will include a restaurant, painting/printing press, computer training centre, residential 
     rest rooms (bedrooms), and a mosque, all carefully planned to ensure functionality, accessibility, and harmony 
     between uses.

     The proposed mixed-use development offers a holistic approach to urban and community planning, combining essential 
     services and functions within a single development. It is designed to be practical, sustainable, and economically viable, 
     while meeting the social and cultural needs of its users.`,

    images: [
      'projects/pro11.png'
      ]
  },
  {
    id: 'p5', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2024',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro12.png', 
      'projects/pro13.jpg', 
      'projects/pro14.jpg',
      'projects/pro15.jpg'
    ]
  },
  {
    id: 'p6', name: 'Public School', category: 'Public', status: 'Proposed', date: '2026',
    description: 'A culturally significant public building that blends traditional Nigerian architectural motifs with contemporary materials.',
    images: [
      'projects/pro17.png', 
      'projects/pro16.png'
     ]
  },
  {
    id: 'p7', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2023',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro18.png'
      
     ]
  },
    {
    id: 'p8', name:'Children’s Day Care Center', category: 'Residential', status: 'Completed', date: '2021',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro19.png', 
      'projects/pro20.png'
     ]
  },
     {
    id: 'p9', name:'Royal Palace Residence', category: 'Residential', status: 'Completed', date: '2023',
    description: `

        The IKYS Royal Palace Residence is a luxury residential development inspired by the rich heritage of 
        Northern Nigerian and Islamic architecture, drawing influence from iconic traditional complexes such 
        as the Emir of Kano’s Palace. The project expresses a bold fusion of culture, prestige, and modern 
        comfort—carefully tailored for high-profile clients who value identity, privacy, and refined living.

    `,
    images: [
      'projects/pro21.png', 
      'projects/pro22.png'
     ]
  },
      {
    id: 'p10', name: 'Proposed Development of a 3-star  hotel', category: 'Commercial', status: 'Proposed', date: '2026',
    description: `
    Project Overview: 

        The proposed development entails the design and construction of a modern 3-star hotel facility aimed at delivering safe, 
         comfortable, and efficient hospitality services. The project is conceived to meet the growing demand for mid-range 
         accommodation while maintaining high standards of functionality and user satisfaction.`,

    images: [
      'projects/pro23.png'
      
     ]
  },
      {
    id: 'p11', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2025',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro24.png'
     
     ]
  },
      {
    id: 'p12', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2025',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro25.png'
    
     ]
  },
  {
    id: 'p13', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2025',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro26.jpg'
    
     ]
  },
  {
    id: 'p14', name: 'Luxury Residences', category: 'Residential', status: 'Completed', date: '2025',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro27.jpg'
    
     ]
  },
  {
    id: 'p15', name: 'Luxury Residences', category: 'Residential', status: 'Ongoing', date: '2026',
    description: 'Premium residential building with modern minimalist aesthetics and private marina access.',
    images: [
      'projects/pro28.jpg',
      'projects/pro29.jpg',
      'projects/pro30.jpg'
    
     ]
  },
];

export const Projects = () => {
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
    className="w-full pt-12 min-h-screen bg-neutral-50">
      <section className="py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle title="Our Portfolio" subtitle="Selected Works" />
          
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 
          shadow-sm border border-neutral-100">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors
                  ${filter === cat ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
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
                className="w-full pl-10 pr-4 py-3 bg-neutral-100 border-none focus:ring-2 
                focus:ring-amber-500 outline-none font-medium"
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
                  className="group bg-white border  border-neutral-200 cursor-pointer overflow-hidden shadow-sm 
                  hover:shadow-xl transition-all rounded-2xl"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">

                    <Image src={`/${project.images[0]}`} alt={project.name} width={500} height={375}
                    className="w-full h-full p-2 rounded-2xl object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"/>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold 
                    uppercase tracking-widest text-neutral-900">
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
                  <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">
                  {selectedProject.category} | {selectedProject.status} | {selectedProject.date}</span>
                </div>
                <button onClick={() => setSelectedProject(null)} 
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-neutral-900" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg text-neutral-700 mb-8 max-w-4xl">{selectedProject.description}</p>
                
                <h4 className="font-bold text-sm uppercase tracking-widest text-neutral-500 mb-4">
                  Project Gallery ({selectedProject.images.length} Images)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.images.map((img, idx) => (

                    <div key={idx} className={`relative overflow-hidden ${
                      idx === 0 ? "aspect-square sm:col-span-2 lg:col-span-2" : "aspect-square" }`}>
                      
                       <Image src={`/${img}`} alt={`${selectedProject.name} - Img ${idx + 1}`} fill className="object-cover" />
                    </div>
                    
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
