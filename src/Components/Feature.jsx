import React from "react";

const Feature = () => {
  return (
    <div className="py-2 text-white  rounded md:w-64 h-46 md:text-left space-y-4 w-full text-center">
      <div className="w-8 h-8 flex justify-between items-center p-2 bg-purple-600 rounded mb-4 md:mx-0 mx-auto ">
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
      <span>Unlimited Inboxes</span>
      <p className="w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, minima.
      </p>
    </div>
  );
};

export default Feature;
