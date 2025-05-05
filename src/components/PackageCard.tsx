
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

export interface Package {
  id: number;
  name: string;
  description: string;
  duration: string;
  license: string;
  price: number;
}

interface PackageCardProps {
  package: Package;
  isSelected: boolean;
  onClick: () => void;
}

export default function PackageCard({ package: pkg, isSelected, onClick }: PackageCardProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={cn(
        "cursor-pointer p-6 rounded-xl border transition-all duration-300",
        isSelected ? 
          `ring-2 ring-primary shadow-[0_0_15px_rgba(138,92,255,0.5)]` : 
          `border-border/50 hover:border-primary/30 hover:shadow-[0_0_10px_rgba(138,92,255,0.2)]`,
        theme === 'dark' ? 'bg-black/30' : 'bg-white/5'
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
      <p className="text-sm mb-4 opacity-90 line-clamp-2">{pkg.description}</p>
      
      <div className="space-y-1 text-sm opacity-80 mb-4">
        <div>{pkg.duration} • {pkg.license}</div>
      </div>
      
      <div className="text-xl font-bold text-primary">{pkg.price} RON</div>
    </motion.div>
  );
}
