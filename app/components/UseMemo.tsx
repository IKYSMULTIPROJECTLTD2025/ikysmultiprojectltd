'use client';
import { useEffect } from 'react';

const COMPANY_INFO = {
  name: 'IKYS Multi Project Ltd',
  ceo: 'Arc. Imran Yusif Saleh (Imran Khan)',
  email: 'ikysmultiprojectltd@gmail.com',
  phone: '+234 813 733 8938',
  location: 'Nigeria',
  mission: 'To redefine architectural excellence in Nigeria and beyond by delivering innovative, sustainable, and culturally resonant design solutions.',
  vision: 'To be the premier architectural and construction management firm in Africa, known for shaping the skylines of tomorrow.',
};

export const useSEO = (title: string, description: string) => {
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

