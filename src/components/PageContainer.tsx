
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={cn("min-h-screen bg-gradient-to-b from-[#0D1117] via-[#161B22] to-[#0D1117]", className)}>
      {children}
    </div>
  );
};

export default PageContainer;
