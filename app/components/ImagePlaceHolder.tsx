import { Building } from "lucide-react";

export const ImagePlaceholder = ({ text, className = "", aspect = "aspect-video" }: { text: string, className?: string, aspect?: string }) => (
  <div className={`bg-neutral-100 border border-neutral-200 flex flex-col items-center justify-center text-neutral-400 p-6 overflow-hidden ${aspect} ${className}`}>
    <Building className="w-8 h-8 mb-2 opacity-50" />
    <span className="text-sm font-medium text-center uppercase tracking-wider">{text}</span>
  </div>
);
