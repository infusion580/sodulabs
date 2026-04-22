import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

const STORAGE_KEY = "sudo-theme";

type Theme = "dark" | "light";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full glass text-foreground transition-all hover:bg-primary/10"
    >
      <SunIcon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
