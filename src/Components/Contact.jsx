import React from "react";

const Contact = () => {
  return (
    <div className="px-8 flex md:justify-between items-center flex-wrap justify-center py-12">
      <h1 className="text-center md:text-left text-3xl font-extrabold space-y-2">
        <span className="block">Ready to get started?</span>
        <span className="block text-indigo-700">
          Get in touch or create an account.
        </span>
      </h1>
      <div className="flex space-x-8 pt-8 items-center">
        <div className="rounded-md shadow">
          <a
            href="/"
            className="w-full flex h-full lg:px-8 px-9 md:py-3 py-2 justify-center text-center items-center border border-transparent md:text-md text-sm font-medium rounded-md text-white gradient hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Learn More
          </a>
        </div>
        <div className="">
          <a
            href="/"
            className="w-full flex h-full lg:px-8 px-9 md:py-3 py-2 justify-center text-center items-center border border-transparent md:text-md text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
