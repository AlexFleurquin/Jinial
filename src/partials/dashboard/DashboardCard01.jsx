import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Avatar from '../../images/user-64-14.jpg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 dark:bg-slate-800 bg-white shadow-lg rounded-lg">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <div className="flex justify-start">
            <img src={Avatar} width="64" height="64" alt="Icon 01" className='rounded-lg'/>
            <div className='flex-column'>
              <h2 className="text-lg font-semibold dark:text-white text-slate-800 ml-2">Juliette</h2>
              <p className="text-sm dark:text-slate-200 text-slate-700 ml-2">2 mois</p>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Editer</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard01;
