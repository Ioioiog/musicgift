
import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Default to light theme for the new design
    if (!savedTheme) {
      return 'light';
    }
    // Return saved theme if valid, otherwise default to light
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    
    // Add transition class before changing theme to ensure smooth transition
    root.classList.add('color-theme-in-transition');
    
    if (theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Remove transition class after change is complete
    setTimeout(() => {
      root.classList.remove('color-theme-in-transition');
    }, 300);
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
