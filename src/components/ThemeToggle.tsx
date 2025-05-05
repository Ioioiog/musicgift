
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: theme === 'light' ? 1 : 0.5,
          scale: theme === 'light' ? 1.1 : 0.9
        }}
        transition={{ duration: 0.2 }}
      >
        <Sun 
          size={18} 
          className={`${theme === 'light' ? 'text-accent' : 'text-white/60'} transition-colors`} 
        />
      </motion.div>
      
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-accent"
      />
      
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: theme === 'dark' ? 1 : 0.5,
          scale: theme === 'dark' ? 1.1 : 0.9
        }}
        transition={{ duration: 0.2 }}
      >
        <Moon 
          size={18} 
          className={`${theme === 'dark' ? 'text-primary' : 'text-black/60'} transition-colors`} 
        />
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
