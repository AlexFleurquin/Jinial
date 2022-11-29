import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function PronoSynthese() {
  const chartData = {
    labels: ['Garçon', 'Fille'],
    datasets: [
      {
        label: 'Top Countries',
        data: [65, 35],
        backgroundColor: [
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.pink[400],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.blue[600],
          tailwindConfig().theme.colors.pink[500],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800/10 shadow-lg rounded-lg border dark:border-slate-800 ">
      <header className="px-5 py-4">
        <h2 className="font-semibold dark:text-slate-300">Genre</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default PronoSynthese;
