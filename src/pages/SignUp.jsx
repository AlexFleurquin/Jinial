import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../partials/home/HeaderHome';

import Illustration from '../images/auth-illustration.svg';
import Avatar01 from '../images/avatar-01.jpg';
import Avatar02 from '../images/avatar-02.jpg';
import Avatar03 from '../images/avatar-03.jpg';
import Avatar04 from '../images/avatar-04.jpg';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-light dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/* Site header */}
      <HeaderHome />

      <main>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center min-h-screen space-x-20">
            {/* Left side */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Avatars */}
              <div className="flex -space-x-3 -ml-0.5 mb-6">
                <img
                  className="rounded-full border-2 border-slate-900 box-content"
                  src={Avatar01}
                  width="40"
                  height="40"
                  alt="Avatar 01"
                />
                <img
                  className="rounded-full border-2 border-slate-900 box-content"
                  src={Avatar02}
                  width="40"
                  height="40"
                  alt="Avatar 02"
                />
                <img
                  className="rounded-full border-2 border-slate-900 box-content"
                  src={Avatar03}
                  width="40"
                  height="40"
                  alt="Avatar 03"
                />
                <img
                  className="rounded-full border-2 border-slate-900 box-content"
                  src={Avatar04}
                  width="40"
                  height="40"
                  alt="Avatar 04"
                />
              </div>
              {/* Headline */}
              <h1 className="h2 font-oxygen mb-8 text-center lg:text-left dark:text-slate-300">
                Bienvenue sur Jinial
              </h1>
              {/* List */}
              <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Excepteur sint occaecat cupidatat non proident sunt in
                    culpa.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </li>
              </ul>
            </div>
            {/* Right side */}
            <div className="flex w-full max-w-md mx-auto">
              <div className="p-6 md:p-8">
                {/* Form */}
                <form>
                  <div className="space-y-4">
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                      <div className="sm:w-1/2">
                        <label
                          className="block text-sm text-slate-400 font-medium mb-1"
                          htmlFor="name"
                        >
                          Prénom <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name"
                          className="form-input text-sm py-2 w-full"
                          type="text"
                          placeholder="Elon"
                          required
                        />
                      </div>
                      <div className="sm:w-1/2">
                        <label
                          className="block text-sm text-slate-400 font-medium mb-1"
                          htmlFor="surname"
                        >
                          Nom <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="surname"
                          className="form-input text-sm py-2 w-full"
                          type="text"
                          placeholder="Musk"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm text-slate-400 font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        className="form-input text-sm py-2 w-full"
                        type="email"
                        placeholder="elon.musk@spacx.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm text-slate-400 font-medium mb-1"
                        htmlFor="email"
                      >
                        Mot de passe <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="password"
                        className="form-input text-sm py-2 w-full"
                        type="password"
                        placeholder="**********"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn text-white dark:bg-gray-800 w-full hover:shadow group">
                      Créer mon compte
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
