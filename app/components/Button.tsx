
export const Button = ({ children, onClick, variant = 'primary', className = "" }: { children: React.ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'outline', className?: string }) => {
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
