import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function LeftNav() {
  return (
    <div className="mr-4 flex justify-start">
      <Link className="block" to="/" aria-label="Jinial">
        <Logo />
      </Link>
      <div className="inline">
        {/* Desktop nav links */}
        <ul className="flex justify-start flex-wrap items-center">
          <li>
            <Link
              className=" text-gray-600 hover:text-gray-600 dark:hover:text-gray-100 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
              to="/signin"
            >
              Mes bébés
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-gray-600 dark:hover:text-gray-100 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
              to="/signin"
            >
              Mes pronos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNav;
