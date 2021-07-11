import React from "react";
import fb from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-8 py-16">
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 auto-cols-min md:grid-cols-4 mx-8 lg:gap-2 gap-8">
        <div>
          <h1 className="uppercase mb-4 font-semibold text-gray-700">
            Solution
          </h1>
          <ul className="space-y-4">
            <li className="font-semibold text-gray-600">Marketing</li>
            <li className="font-semibold text-gray-600">Analytics</li>
            <li className="font-semibold text-gray-600">Commerce</li>
            <li className="font-semibold text-gray-600">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase mb-4 font-semibold text-gray-700">
            Support
          </h1>
          <ul className="space-y-4">
            <li className="font-semibold text-gray-600">Pricing</li>
            <li className="font-semibold text-gray-600">Documentation</li>
            <li className="font-semibold text-gray-600">Guides</li>
            <li className="font-semibold text-gray-600">API Status</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase mb-4 font-semibold text-gray-700">
            Company
          </h1>
          <ul className="space-y-4">
            <li className="font-semibold text-gray-600">About</li>
            <li className="font-semibold text-gray-600">Blog</li>
            <li className="font-semibold text-gray-600">Jobs</li>
            <li className="font-semibold text-gray-600">Press</li>
            <li className="font-semibold text-gray-600">Partners</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase mb-4 font-semibold text-gray-700">Legal</h1>
          <ul className="space-y-4">
            <li className="font-semibold text-gray-600">Claim</li>
            <li className="font-semibold text-gray-600">Privacy</li>
            <li className="font-semibold text-gray-600">Terms</li>
          </ul>
        </div>
        <div className="w-56 xl:w-full md:w-96">
          <h1 className="uppercase mb-4 font-semibold text-gray-700">
            Subscribe to our newsletter
          </h1>
          <p className="font-semibold text-gray-600">
            The latest news, articles and resources, sent to your inbox weekly.
          </p>
          <form className="box-border">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-2 my-4 pl-2 w-full pr-16 ring-2 outline-none text-gray-900 font-semibold focus:ring-indigo-600 ring-purple-300 rounded"
            />
            <div className="rounded-md shadow">
              <a
                href="/"
                className="w-full flex h-full px-8 justify-center text-center items-center py-3 border border-transparent text-base font-medium rounded-md text-white gradient hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Subscribe
              </a>
            </div>
          </form>{" "}
        </div>
      </div>
      <div className="flex items-center justify-between mx-4 lg:mx-8 flex-wrap mt-32 border-t-2 pt-4">
        <p className="font-medium text-gray-500">© 2021 All rights reserved.</p>
        <div className="flex items-center space-x-6">
          <a href="/">
            <img src={fb} alt="" className="h-6 w-6" />
          </a>
          <a href="/">
            <img src={twitter} alt="" className="h-6 w-6" />
          </a>
          <a href="/">
            <img src={github} alt="" className="h-6 w-6" />
          </a>
          <a href="/">
            <img src={instagram} alt="" className="h-6 w-6" />
          </a>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center mt-8">
        Made By{" "}
        <a
          target="_blank"
          href="https://rayenmehrez.me/"
          className="text-purple-800"
        >
          Rayen Mehrez
        </a>
      </h3>
    </div>
  );
};

export default Footer;
