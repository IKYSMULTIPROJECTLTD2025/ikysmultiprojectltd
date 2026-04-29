
export const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
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

