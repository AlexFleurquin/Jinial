import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative p-4 sm:p-6 mt-8 mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-4xl md:text-4xl text-slate-800 dark:text-white font-bold font-oxygen mb-1">Hello Alex 👋🏼</h1>
        <p className='text-slate-600'>Qu'est ce qu'on fait aujourd'hui ? </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
