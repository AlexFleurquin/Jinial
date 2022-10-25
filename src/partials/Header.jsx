import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const [dark, setDark] = useState(false);

  useEffect(() => {
      const root = window.document.documentElement;
      if (dark) {
        return root.classList.add("dark");
      }
      root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="absolute w-full z-30">
    <div className="max-w-8xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Site branding */}
        <div className="mr-4 flex justify-start">
          {/* Logo */}
          <Link className="block" to="/" aria-label="Jinial">
            <svg className="w-8 h-8" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-b">
                  <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                  <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                </radialGradient>
                <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-d">
                  <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                  <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%" />
                  <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%" />
                </radialGradient>
                <path d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z" id="logo1-a" />
                <path d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z" id="logo1-c" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlinkHref="#logo1-a" />
                <use fill="url(#logo1-d)" opacity=".961" xlinkHref="#logo1-c" />
              </g>
            </svg>
          </Link>
          <nav className="inline">
            {/* Desktop nav links */}
            <ul className="flex justify-start flex-wrap items-center">
              <li>
                <Link className="font-oxygen font-normal text-gray-600 hover:text-gray-600 dark:hover:text-gray-100 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Mon bébé</Link>
              </li>
              <li>
                <Link className="font-oxygen font-normal text-gray-600 hover:text-gray-600 dark:hover:text-gray-100 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" to="/signin">Mes pronos</Link>
              </li>
            </ul>
          </nav>
        </div>



        {/* Desktop navigation */}
        <nav className="flex justify-between">
          {/* Desktop sign in links */}
          <ul className="flex grow justify-end flex-wrap items-center">
            <li>
              <button
                className={`w-8 h-8 flex items-center justify-center dark:bg-slate-700 dark:hover:bg-slate-600 bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && 'bg-slate-200'}`}
                onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
              <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
            </li>
            <li className="ml-3">
              <Notifications align="right" />
            </li>
            <li className="ml-3">
              <Help align="right" />
            </li>
            <li className="ml-3">
              <UserMenu align="right" />
            </li>
            <li className="text-gray-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
              <button onClick={() => setDark(!dark)} >
                {dark ? (
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
            </li>
          </ul>

        </nav>
      </div>
    </div>
  </header>

  );
}

export default Header;
