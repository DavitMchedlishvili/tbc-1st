'use client';
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react"; 
import { DarkButton } from "../ThemeButtons/DarkButton";
import { LightButton } from "../ThemeButtons/LightButton";

const themes = [
  { value: "light", label: "Light", icon: <LightButton className="w-5 h-5" /> },
  { value: "dark", label: "Dark", icon: <DarkButton className="w-5 h-5" /> },
  { value: "system", label: "System", icon: <button className="w-5 h-5" /> },
];

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  // Explicitly typing the ref as HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      // Casting event.target to Node and checking if it is not inside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null; // Prevents hydration issues

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {themes.find((t) => t.value === currentTheme)?.icon}
          <span className="ml-2">
            {themes.find((t) => t.value === currentTheme)?.label}
          </span>
        </div>
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-slate-600 shadow-lg dark:bg-gray-700">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              className="flex items-center rounded-md w-full p-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              onClick={() => handleThemeChange(themeOption.value)}
            >
              {themeOption.icon}
              <span className="ml-2">{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;


