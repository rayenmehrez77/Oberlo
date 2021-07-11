import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import fb from "../images/facebook.svg";
import google from "../images/google.svg";
import github from "../images/github.svg";

const SignInPage = () => {
  return (
    <div className="h-full w-full bg-white md:bg-gray-50 flex items-start justify-center pt-12 md:py-16 ">
      <div className="max-w-lg w-full p-8 bg-white rounded-md md:shadow-lg">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 font-bold text-center md:text-4xl text-2xl">
            Sign in to your account
          </h2>
          <p className="text-gray-900 font-medium mt-4 text-center">
            Or{" "}
            <a href="/" className="text-indigo-600 cursor-pointer">
              start your 14-day free trial
            </a>
          </p>
          <form className="mt-8">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 rounded border-gray-300 outline-none focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block text-sm text-gray-600 font-medium ml-2 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="/"
                  className="text-indigo-700 font-medium text-sm cursor-pointer"
                >
                  forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center mt-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-8">
            <div className="text-center font-medium text-gray-600 flex items-center">
              <span className="h-0.5 w-1/2 bg-gray-300 block"></span>
              <h1 className="mx-8 text-sm w-56">Or continue with</h1>
              <span className="h-0.5 w-1/2 bg-gray-300 block"></span>
            </div>
            <div className="flex items-center justify-around mt-8">
              <div className="h-10 w-32 flex items-center justify-center cursor-pointer border py-4 rounded shadow-inner">
                <img src={fb} alt="fb logo" className="w-8 h-6" />
              </div>
              <div className="h-10 w-32 flex items-center justify-center cursor-pointer border py-4 rounded shadow-inner">
                <img src={google} alt="fb logo" className="w-8 h-6" />
              </div>
              <div className="h-10 w-32 flex items-center justify-center cursor-pointer border py-4 rounded shadow-inner">
                <img src={github} alt="fb logo" className="w-8 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
