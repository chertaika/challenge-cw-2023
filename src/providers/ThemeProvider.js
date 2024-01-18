import { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const getTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) return currentTheme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    console.log(window.matchMedia);
    if (userMedia.matches) return themes.light;

    return themes.dark;
  };

  useEffect(() => {
    setTheme(getTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
