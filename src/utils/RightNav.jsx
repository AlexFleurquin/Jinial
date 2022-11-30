import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import DarkMode from '../utils/DarkMode';

function RightNav({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div>
      <ul className="flex grow justify-end flex-wrap items-center">
        <li>
          <button
            className={`w-8 h-8 flex items-center justify-center dark:bg-slate-700 dark:hover:bg-slate-600 bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${
              searchModalOpen && 'bg-slate-200'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSearchModalOpen(true);
            }}
            aria-controls="search-modal"
          >
            <span className="sr-only">Search</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-slate-500"
                d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
              />
              <path
                className="fill-current text-slate-400"
                d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
              />
            </svg>
          </button>
          <SearchModal
            id="search-modal"
            searchId="search"
            modalOpen={searchModalOpen}
            setModalOpen={setSearchModalOpen}
          />
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
          <DarkMode />
        </li>
      </ul>
    </div>
  );
}

export default RightNav;
