import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../partials/home/HeaderHome';
import axios from '../api/axios';

import Illustration from '../images/auth-illustration.svg';
import Avatar01 from '../images/avatar-01.jpg';
import Avatar02 from '../images/avatar-02.jpg';
import Avatar03 from '../images/avatar-03.jpg';
import Avatar04 from '../images/avatar-04.jpg';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; // NO USE FOR MY RAILS API BOILERPLATE (because no username)
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/users'; // <- here, we are defining a suffix for axios to use in HTTP request for signup (it is devise route for method users/registrations#create)

function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false); // NO USE FOR MY RAILS API BOILERPLATE (because no username) ... BUT THIS TUTORIAL https://www.youtube.com/watch?v=3MA6kS2xpNA&t=38s EXPLAINS HOW TO ADD USERNAME TO DEVISE
  const [userFocus, setUserFocus] = useState(false);

  const [userEmail, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdConfirm, setPwdConfirm] = useState('');
  const [validPwdConfirm, setValidPwdConfirm] = useState(false);
  const [pwdConfirmFocus, setPwdConfirmFocus] = useState(false);

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    // console.log(result);
    // console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userEmail);
    // console.log(result);
    // console.log(userEmail);
    setValidEmail(result);
  }, [userEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
    const match = pwd === pwdConfirm;
    setValidPwdConfirm(match);
  }, [pwd, pwdConfirm]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, pwdConfirm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(userEmail);
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    }
    // console.log('user, pwd =>', user, pwd); // SHOULD BE A COMMENT
    // setSuccess(true); // SHOULD BE A COMMENT
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          user: {
            email: userEmail,
            password: pwd,
          },
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true, // strangely, it brings a CORS error despite being in the tutorial I was following...
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);

      // this would be a good place to clear the input fields out of the form (by setting their state back to empty strings), but it's completely optionnal
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username already taken');
      } else {
        setErrMsg('Registration failed');
      }
      errRef.current.focus();
    }
  };

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
                {success ? (
                  <section>
                    <h1>Success!</h1>
                    <button>Sign Up</button>
                  </section>
                ) : (
                  <form onSubmit={handleSubmit}>
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
                            ref={userRef}
                            autoComplete="on"
                            onChange={(e) => setUser(e.target.value)}
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby="usernamenote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
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
                          ref={userRef}
                          autocomplete="on"
                          onChange={(e) => setEmail(e.target.value)}
                          aria-invalid={validEmail ? 'false' : 'true'}
                          aria-describedby="emailnote"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
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
                          onChange={(e) => setPwd(e.target.value)}
                          aria-invalid={validPwd ? 'false' : 'true'}
                          aria-describedby="pwdnote"
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="btn text-white bg-gray-800 w-full hover:shadow group">
                        Créer mon compte
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
