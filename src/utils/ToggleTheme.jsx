import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from './../contexts/ThemeContext';

function DarkMode() {
  const [toggleTheme, theme] = useContext(ThemeContext);

  console.log(theme);

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');

  return (
    <button onClick={toggleTheme}>
      {theme ? (
        <svg
          class="w-6 h-6 hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ) : (
        <svg
          class="w-6 h-6 hover:text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      )}
    </button>
  );
}

export default DarkMode;
