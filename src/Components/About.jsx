import React from "react";
import img from "../images/app.PNG";
import person from "../images/person.jpg";

const About = () => {
  return (
    <div className="flex justify-between mt-8 ml-4 lg:ml-8 mx-auto">
      <div className="mt-16 md:w-1/2 w-full mr-6">
        <div className="p-2 h-8 w-8 gradient text-white flex justify-center items-center rounded">
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
        <h1 className="py-4 text-4xl font-extrabold text-gray-800">
          Stay on top customer support
        </h1>
        <p className="sm:max-w-xl font-medium text-gray-500 mb-6 w-full">
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
        <p className="sm:max-w-xl my-4 text-gray-500 border-t-2 pt-4 w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, esse
          possimus dignissimos unde cum natus doloribus excepturi magnam dolorum
          tenetur!
        </p>
        <div className="flex items-center">
          <img
            src={person}
            alt=""
            className="rounded-full w-8 h-8 object-cover"
          />
          <h2 className="font-bold text-gray-700 ml-4">
            Marcia Hill, Digital Marketing Manager
          </h2>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src={img} alt="" className="rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default About;
