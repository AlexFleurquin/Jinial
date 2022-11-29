import React from 'react';

import Illustration from '../../images/hero-illustration.svg';

function HeroHome() {
  return (
    <section className="relative overflow-hidden dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none z-1"
          width="2143"
          height="737"
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300 bg-gray-800 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-gradient-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                <div className="text-gray-400 dark:text-white">
                  Nouveau générateur de prénom.{' '}
                  <a
                    className="font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="https://alexfleurquin.com"
                  >
                    En savoir plus{' '}
                    <span className="tracking-normal font-inter group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <h1
              className="h1 font-oxygen text-5xl mb-6 text-slate-900 dark:text-white"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Un bébé,
              <br />
              Des amis,
              <br />
              Des barres de rires
            </h1>
            <p
              className="text-xl text-gray-700 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Faites deviner le prénom, le sexe, le poids, la taille et la date
              où bébé pointera son nez.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-gray-900 dark:bg-white dark:text-gray-900 w-full shadow-lg group"
                  href="/signin"
                >
                  Commencer{' '}
                  <span className="tracking-normal font-inter text-blue-200 dark:text-gray-900 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-gray-300 bg-gray-800 hover:bg-gray-700 w-full shadow-lg"
                  href="#0"
                >
                  Comment ça marche ?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
