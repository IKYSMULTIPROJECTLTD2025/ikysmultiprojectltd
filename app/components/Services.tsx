'use client';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { useSEO } from './UseMemo';
import { Building, CheckCircle, Hammer, PencilRuler, Users,  } from 'lucide-react';
import { Button } from './Button';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string; 
}

const SERVICES_DATA: Service[] = [

  { id: 's1', title: 'Architectural Design',  
    description: `Comprehensive design services from conceptualization to detailed working drawings, ensuring aesthetic 
    brilliance and functional efficiency.`, 
    icon: PencilRuler,
    image: '/images/architectural-design.png',
  },

   
  { id: 's2', title: 'Construction Management', 
    description: `End-to-end project oversight, coordinating contractors, managing budgets, and ensuring strict 
    adherence to timelines and quality standards.`, 
    icon: Hammer,
    image: '/images/construction-management.png',
  },
  
  { id: 's3', title: 'Building Planning', 
    description: `Strategic site analysis, feasibility studies, and master planning for complex residential, commercial, 
    and industrial developments.`, 
    icon: Building,
    image: '/images/building-planning1.png',
  },
   

  { id: 's4', title: 'Consulting Services', 
      description: `Expert advisory on building codes, sustainability practices, material selection, and structural integrity.`, 
      icon: Users,
      image: '/images/consulting-services.png',
  },    
];    


export const Services = () => {
  useSEO("Our Services", "Architectural design, construction management, and building planning services by IKYS.");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full pt-24">
      <section className="bg-neutral-50 py-10 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <SectionTitle title="Professional Services" subtitle="Capabilities" />
          <p className="text-xl text-neutral-600 leading-relaxed">
            We provide a holistic suite of architectural and construction services. From the initial sketch to the final coat of paint, our multi-disciplinary team ensures excellence at every phase.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {SERVICES_DATA.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                 
                    <Image src={service.image} width={500} height={800}  alt={service.title} 
                    className="w-full object-cover rounded-none border-none bg-neutral-900" />

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
                   <a href={'#contact'}> <Button 
                     variant="outline">Request Consultation</Button></a>
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
