import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../partials/home/HeaderHome';

import Illustration from '../images/auth-illustration.svg';

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-light dark:bg-gray-900">
      {/* Site header */}
      <HeaderHome />

      <main className="grow">
        <section className="relative">
          {/* Illustration */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img src={Illustration} className="max-w-none" width="1440" height="332" alt="Page Illustration" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h2 font-hkgrotesk">Welcome back!</h1>
              </div>
              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate-500 font-medium mb-1" htmlFor="email">
                        Email
                      </label>
                      <input id="email" className="form-input text-sm py-2 w-full" type="email" required />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group">
                      Reset Password{' '}
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResetPassword;
