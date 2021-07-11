import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="m-4 shadow-lg border-1 border-transparent h-64 absolute inset-0 bg-white z-50 rounded  ">
          <div className="flex justify-between text-gray-500 p-2 ">
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              <img
                className="w-12 h-8 cursor-pointer"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="logo"
              />
            </Link>
            <div className="md:hidden hover:bg-gray-100 rounded-lg text-gray-600">
              <XIcon
                className="h-8 w-8 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          <nav className="flex flex-col mt-4 space-y-3 pl-2">
            {navigation.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-2 py-1"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to="/signin"
            className="block font-medium gradient text-white mt-2 text-center bg-indigo-100 px-6 py-2 shadow "
          >
            Sign In
          </Link>{" "}
        </div>
      ) : null}
    </>
  );
};

export default Menu;
