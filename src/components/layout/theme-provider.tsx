"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AppTheme {
  id: string;
  name: string;
  is_default: boolean;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  background_color: string;
  surface_color: string;
  text_primary: string;
  text_secondary: string;
  border_color: string;
  gradient_start: string;
  gradient_end: string;
}

interface ThemeContextType {
  theme: AppTheme | null;
  setTheme: (theme: AppTheme) => void;
  availableThemes: AppTheme[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setTheme: () => {},
  availableThemes: [],
});

export function ThemeProvider({ 
  children, 
  themes, 
  defaultTheme 
}: { 
  children: React.ReactNode; 
  themes: AppTheme[]; 
  defaultTheme: AppTheme | null;
}) {
  const [theme, setThemeState] = useState<AppTheme | null>(defaultTheme);

  useEffect(() => {
    // Check local storage for user's preferred theme
    const savedThemeId = localStorage.getItem("csu_active_theme");
    if (savedThemeId) {
      const saved = themes.find(t => t.id === savedThemeId);
      if (saved) {
        setThemeState(saved);
        return;
      }
    }
  }, [themes]);

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    localStorage.setItem("csu_active_theme", newTheme.id);
  };

  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply CSS variables
    root.style.setProperty("--color-background", theme.background_color);
    root.style.setProperty("--color-foreground", theme.text_primary);
    
    root.style.setProperty("--color-luxury-gold", theme.primary_color);
    root.style.setProperty("--color-luxury-rose", theme.secondary_color);
    root.style.setProperty("--color-luxury-black", theme.background_color);
    root.style.setProperty("--color-luxury-charcoal", theme.surface_color);
    
    // Optionally update other custom variables based on the theme
    // We seamlessly override the globals.css defaults
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
