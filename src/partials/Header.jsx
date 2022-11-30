import React from 'react';
import RightNav from '../utils/RightNav';
import LeftNav from '../utils/LeftNav';

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <LeftNav />
          <RightNav />
        </nav>
      </div>
    </header>
  );
}

export default Header;
