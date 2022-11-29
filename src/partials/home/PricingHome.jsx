import React from 'react';

import Illustration from '../../images/pricing-illustration.svg';

function PricingHome() {
  return (
    <section className="relative dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          width="618"
          height="468"
          alt="Pricing Illustration"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4 dark:text-white">
              Trouve le plan qui te correspond
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est.
              </p>
            </div>
          </div>
          {/* Pricing tables */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-6 items-center pt-4 content-center place-content-center">
            {/* Pricing table 1 */}
            <div
              className="relative flex flex-col h-full p-6 content-center"
              data-aos="zoom-out"
            >
              <div className="mb-6">
                <div className="text-lg font-semibold mb-1 dark:text-slate-300">
                  Starter
                </div>
                <div className="text-3xl font-bold leading-7 dark:text-white my-2">
                  Gratuit
                </div>
                <div className="text-gray-400 mb-6">
                  Pour les petits joueurs.
                </div>
                <a
                  className="btn border border-slate-500 w-full dark:text-slate-500 hover:bg-white hover:text-gray-900 hover:border-transparent"
                  href="#0"
                >
                  Commencer
                </a>
              </div>
              <div className="font-medium mb-4">Features include:</div>
              <ul className="text-gray-400 space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
            </div>
            {/* Pricing table 2 */}
            <div
              className="relative flex flex-col h-full p-6 bg-slate-200/10 dark:bg-slate-800/50 rounded-lg shadow-lg"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 mr-6 -mt-4">
                <div className="inline-flex items-center text-sm font-semibold py-1 px-3 text-emerald-600 bg-emerald-200 rounded-lg">
                  <svg
                    className="fill-emerald-500 mr-2"
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z" />
                  </svg>
                  <span>Le plus populaire</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-lg font-semibold mb-1 dark:text-slate-300">
                  Jinial Plus
                </div>
                <div className="font-uncut-sans inline-flex items-baseline my-2">
                  <span className="text-4xl font-bold leading-7 dark:text-white">
                    5€
                  </span>
                  <span className="mx-2 font-medium text-gray-400">/mois</span>
                </div>
                <div className="text-gray-400 mb-6">
                  Pour encore plus de jeux &amp; de rires.
                </div>
                <button
                  className="btn bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-400 to-pink-600 hover:to-pink-600 hover:shadow-lg w-full"
                  href="#0"
                >
                  Commencer
                </button>
              </div>
              <div className="font-medium mb-4">
                Everything in Starter, plus:
              </div>
              <ul className="text-gray-400 space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingHome;
