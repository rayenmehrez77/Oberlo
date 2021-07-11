import React from "react";
import img from "../images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="sm:w-full lg:w-full  lg:h-3/4 sm:py-32 lg:py-56 py-16	 w-full bg-fixed bg-no-repeat bg-cover relative bg-blend-multiply bg-indigo-900 rounded-md shadow-xl"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="text-center flex flex-col justify-center sm:mx-8 mt-2 mx-4">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl md:mb-4 xl:text-7xl">
          <span className="block text-white">Take control of your </span>
          <span className="block text-indigo-300">Customer support</span>
        </h1>
        <p className="mt-3 text-sm lg:text-base text-white md:mx-auto sm:mt-5 sm:text-lg sm:max-w-xl xl:mx-auto md:mt-0 md:text-xl sm:mx-auto ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Get started
        </p>
        <div className="sm:flex mt-5 sm:justify-center xl:justify-start mx-auto flex items-center space-x-4">
          <div className="rounded-md shadow h-16">
            <a
              href="/"
              className="w-full flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-white gradient hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="rounded-md shadow h-16">
            <a
              href="/"
              className="w-full flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
