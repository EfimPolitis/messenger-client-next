'use client';

import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeToggler } from '@/components/ui/buttons/theme-toggle';

import {
  type Colors,
  StorageKeyColor,
  StorageKeyTheme,
  ThemeContext,
  type Themes,
  getColor,
  getTheme,
  supportedColors,
  supportedThemes,
} from './theme.helper';

export const ThemeLayout = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(getTheme);
  const [color, setColor] = useState<Colors>(getColor);

  useEffect(() => {
    localStorage.setItem(StorageKeyTheme, theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(StorageKeyColor, color);
    document.documentElement.setAttribute('data-color', color);
  }, [theme, color]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        supportedColors,
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {props.children}
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: theme === 'dark' ? '#303030' : '#ffffff',
            color: theme === 'dark' ? '#d7d7d7' : '000',
            textAlign: 'center',
          },
          duration: 5000,
        }}
      />
    </ThemeContext.Provider>
  );
};

ThemeLayout.ThemeToggler = ThemeToggler;
