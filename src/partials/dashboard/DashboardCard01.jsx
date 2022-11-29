import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Avatar from '../../images/user-64-14.jpg';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

const BabiesData = [
  {
    id: 1,
    avatar: Avatar,
    firstName: 'Elon',
    lastName: 'Musk',
    age: 1,
    weight: 250,
    height: 76,
  },
  {
    id: 2,
    avatar: Avatar,
    firstName: 'Ella',
    lastName: 'Musk',
    age: 3,
    weight: 250,
    height: 76,
  },
];

function BabyCard({ id, avatar, firstName, lastName, age, weight, height }) {
  return (
    <div className="bg-white/10 dark:bg-slate-800/40 bg-white rounded-lg shadow-lg">
      <div className="p-5">
        <header className="flex justify-between items-start">
          {/* Icon */}
          <div className="flex justify-start">
            <img
              src={Avatar}
              width="64"
              height="64"
              alt="Icon 01"
              className="rounded-lg"
            />
            <div className="flex-column">
              <h2 className="text-lg font-semibold dark:text-white text-slate-800 ml-2">
                {firstName}
              </h2>
              <p className="text-sm dark:text-slate-200 text-slate-700 ml-2">
                {age} mois
              </p>
            </div>
          </div>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Editer
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Supprimer
              </Link>
            </li>
          </EditMenu>
        </header>
      </div>
    </div>
  );
}

function DashboardCard01() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {BabiesData.map((item) => (
        <BabyCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default DashboardCard01;
