
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn("min-h-screen bg-black relative", className)}>
      {/* Background grid effect with new primary color */}
      <div className="absolute inset-0 bg-[radial-gradient(#8A5CFF_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />
      
      {/* Content with gradient overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default PageContainer;
