import { createContext, useContext, useEffect, useState } from "react";

type Theme = "blue" | "red" | "purple" | "green";
type Mode = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "blue";
  });

  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem("mode") as Mode) || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.style.setProperty("--primary-color", `var(--${theme})`);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
      {children}

  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
};
