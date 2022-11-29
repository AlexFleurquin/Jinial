import React from 'react';

import FeaturesImage from '../../images/features.svg';

function FeaturesHome() {
  return (
    <section className="dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-36">
          <div class="relative px-6 lg:px-8">
            <div class="mx-auto max-w-3xl pt-24">
              <div>
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 border border-gray-600/10 hover:border-gray-600/30 dark:hover:bg-slate-900">
                    <span class="text-gray-600">
                      Prochainement un générateur de prénom.{' '}
                      <a href="#" class="font-semibold text-indigo-600">
                        <span
                          class="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                        En savoir plus <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <h2 class="font-oxygen font-bold tracking-tight text-center text-5xl dark:text-slate-300">
                    Bienvenue sur Jinial
                  </h2>
                  <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                </div>
                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fill-opacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9089FC"></stop>
                        <stop offset="1" stop-color="#FF80B5"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* feature section  */}

          <div class="mx-auto flex px-5 py-36 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-xl shadow-lg"
                alt="hero"
                src="https://images.unsplash.com/photo-1481728236344-b5c828da9edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="text-3xl mb-4 font-medium dark:text-slate-200">
                Découvez qui est l'élu
              </h1>
              <p class="mb-8 leading-relaxed dark:text-slate-500">
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, hella selvage wolf narwhal
                dreamcatcher.
              </p>
              <div class="flex w-full md:justify-start justify-center items-end pb-12">
                <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label
                    for="hero-field"
                    class="leading-7 text-sm text-gray-400"
                  >
                    Pour télécharger votre application
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    placeholder="elon.musk@spacex.com"
                    class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button class="btn text-gray-300 bg-gray-800 hover:bg-gray-700 shadow">
                  Reçevoir le lien
                </button>
              </div>
              <div class="flex lg:flex-row md:flex-col text-gray-300">
                <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-400 mb-1">GET IT ON</span>
                    <span class="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-400 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {/* 1st item */}
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon1-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon1-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon1-b)" xlinkHref="#icon1-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="M17 28h22" opacity=".64" />
                      <path d="M20 23v-3h3M33 20h3v3M36 33v3h-3M23 36h-3v-3" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">
                Ready for the future
              </h4>
              <p className="text-lg text-gray-400 text-center">
                A flexible foundation that evolves with complex ecosystem.
              </p>
            </div>
            {/* 2nd item */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon2-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon2-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon2-b)" xlinkHref="#icon2-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m22 24-4 4 4 4M34 24l4 4-4 4" />
                      <path d="m26 36 4-16" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">
                Ready for the future
              </h4>
              <p className="text-lg text-gray-400 text-center">
                A flexible foundation that evolves with complex ecosystem.
              </p>
            </div>
            {/* 3rd item */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div className="mb-4">
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <radialGradient
                      cx="50%"
                      cy="89.845%"
                      fx="50%"
                      fy="89.845%"
                      r="89.85%"
                      id="icon3-b"
                    >
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop
                        stopColor="#F472B6"
                        stopOpacity=".876"
                        offset="100%"
                      />
                    </radialGradient>
                    <circle id="icon3-a" cx="28" cy="28" r="28" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#icon3-b)" xlinkHref="#icon3-a" />
                    <g stroke="#FDF2F8" strokeLinecap="square" strokeWidth="2">
                      <path d="m18 31 4 4 12-15" />
                      <path d="M39 25h-3M39 30h-7M39 35H28" opacity=".64" />
                    </g>
                  </g>
                </svg>
              </div>
              <h4 className="h4 text-gray-200 text-center mb-2">
                Ready for the future
              </h4>
              <p className="text-lg text-gray-400 text-center">
                A flexible foundation that evolves with complex ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
