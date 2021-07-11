import React from "react";
import image from "../images/app1.PNG";

const Service = () => {
  return (
    <div className="mt-16 flex justify-between items-center">
      <img src={image} alt="" className="rounded mr-8 hidden lg:inline-block" />
      <div className="mt-16 lg:max-8 mx-4 w-full xl:ml-64">
        <div className="p-2 h-8  w-8 gradient text-white flex justify-center items-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h1 className="py-4 text-4xl font-extrabold text-gray-800 xl:text-5xl">
          Stay on top customer support
        </h1>
        <p className="sm:max-w-xl font-medium text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum
          qui atque voluptatem quam magnam explicabo cupiditate aliquid,
          delectus magni? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </p>
        <a
          href="/"
          className="font-medium text-white gradient  hover:bg-indigo-700 px-6 py-2 shadow rounded-md inline-block"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Service;
