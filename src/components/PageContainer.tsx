
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={cn(
      "min-h-screen relative",
      theme === 'dark' ? 'bg-black' : 'bg-white',
      className
    )}>
      {/* Background grid effect with theme-aware styling */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-[radial-gradient(#8A5CFF_1px,transparent_1px)]' 
          : 'bg-[radial-gradient(#8A5CFF_1px,transparent_1px)]'
      } [background-size:40px_40px] opacity-10`} />
      
      {/* Content with gradient overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-black to-transparent'
          : 'bg-gradient-to-t from-white to-transparent'
      }`} />
    </div>
  );
};

export default PageContainer;
