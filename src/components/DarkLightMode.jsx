import { useEffect, useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';

export default function DarkLightMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="flex items-center gap-2" onClick={handleThemeSwitch}>
      <span className="text-sm">{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
      <IoSunnyOutline size={22} />
    </button>
  );
}