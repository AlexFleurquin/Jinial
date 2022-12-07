import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import HeaderHome from '../partials/home/HeaderHome';
import axios from '../api/axios';
const LOGIN_URL = '/users/sign_in';

function SignIn() {
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef(); // to be able to set the focus on it
  const errRef = useRef(); // to be able to set the focus on it (for better accessibility like screen-reader)

  const [user, setUser] = useState('');
  const [userEmail, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd); // SHOULD BE A COMMENT

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          user: {
            email: userEmail,
            password: pwd,
          },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true, // probablement à enlever car ça me faisait une erreur CORS avec le SignUp
        })
      );
      console.log(JSON.stringify(response?.data)); // SHOULD BE A COMMENT
      console.log(JSON.stringify(response)); // SHOULD BE A COMMENT
      const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles; // SHOULD BE A COMMENT AS THERE ARE NO ROLES FOR USERS YET IN MY API

      setAuth({ user, pwd, userEmail, accessToken });
      setUser('');
      setEmail('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username/Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-light dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/* Site header */}
      <HeaderHome />

      <main className="grow">
        <section className="relative">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h2 dark:text-slate-300">Welcome back !</h1>
              </div>
              {/* Form */}
              {success ? (
                <section>
                  <h1>You are logged in!</h1>
                  <button>Go to Home</button>
                </section>
              ) : (
                <div className="max-w-sm mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm text-slate-400 font-medium mb-1"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          className="form-input text-sm py-2 w-full"
                          type="email"
                          ref={userRef}
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label
                            className="block text-sm text-slate-400 font-medium mb-1"
                            htmlFor="password"
                          >
                            Mot de passe
                          </label>
                          <Link
                            className="text-sm font-medium text-indigo-500 ml-2"
                            to="/reset-password"
                          >
                            Oublié ?
                          </Link>
                        </div>
                        <input
                          id="password"
                          className="form-input text-sm py-2 w-full"
                          type="password"
                          autoComplete="on"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                        />
                      </div>
                    </div>
                    <p
                      ref={errRef}
                      className={errMsg ? 'errmsg' : 'offscreen'}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                    <div className="mt-6">
                      <button className="btn text-white bg-gray-700 hover:bg-gray-800 w-full hover:shadow group">
                        Se connecter
                      </button>
                    </div>
                  </form>
                  {/* Divider */}
                  <div className="flex items-center my-6">
                    <div
                      className="border-t border-slate-800 grow mr-3"
                      aria-hidden="true"
                    />
                    <div className="text-sm text-slate-500 italic">ou</div>
                    <div
                      className="border-t border-slate-800 grow ml-3"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Social login */}
                  <button className="btn text-white bg-rose-500 w-full relative flex after:flex-1">
                    <div className="flex-1 flex items-center">
                      <svg
                        className="w-4 h-4 fill-current text-rose-200 shrink-0"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                      </svg>
                    </div>
                    <span className="flex-auto text-rose-50 pl-3">
                      Continuer avec Google
                    </span>
                  </button>
                  <div className="text-center mt-6">
                    <div className="text-sm text-slate-500">
                      Pas de compte ?{' '}
                      <Link
                        className="font-medium text-indigo-500"
                        to="/signup"
                      >
                        Commencer
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
