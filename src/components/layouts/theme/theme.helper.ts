import { createContext } from 'react';

// color
export const supportedColors = {
  purple: 'purple',
  red: 'red',
  orange: 'orange',
  green: 'green',
};

export type Colors = keyof typeof supportedColors;

export const StorageKeyColor = 'color';

export const getColor = (): Colors => {
  if (typeof window === 'undefined') {
    return 'purple'; // Возвращаем тему по умолчанию на сервере
  }

  let color = localStorage.getItem(StorageKeyColor);

  if (!color) {
    localStorage.setItem(StorageKeyColor, 'purple');
    color = 'purple';
  }

  return color as Colors;
};

// theme
export const supportedThemes = {
  light: 'light',
  dark: 'dark',
};

export type Themes = keyof typeof supportedThemes;

export const StorageKeyTheme = 'color-theme';

export const getTheme = (): Themes => {
  if (typeof window === 'undefined') {
    return 'light'; // Возвращаем тему по умолчанию на сервере
  }

  let theme = localStorage.getItem(StorageKeyTheme);

  if (!theme) {
    localStorage.setItem(StorageKeyTheme, 'light');
    theme = 'light';
  }

  return theme as Themes;
};

export const ThemeContext = createContext<
  | {
      color: Colors;
      setColor: (color: Colors) => void;
      supportedColors: { [key: string]: string };
      theme: Themes;
      setTheme: (theme: Themes) => void;
      supportedThemes: { [key: string]: string };
    }
  | undefined
>(undefined);
