
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun size={18} className={`${theme === 'light' ? 'text-accent' : 'text-white'} transition-colors`} />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon size={18} className={`${theme === 'dark' ? 'text-primary' : 'text-black'} transition-colors`} />
    </div>
  );
};

export default ThemeToggle;
