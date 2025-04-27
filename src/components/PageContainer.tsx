
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn("min-h-screen bg-gradient-to-b from-[#0D1117] via-[#161B22] to-[#0D1117] relative", className)}>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      
      {/* Content with gradient overlay */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
    </div>
  );
};

export default PageContainer;
