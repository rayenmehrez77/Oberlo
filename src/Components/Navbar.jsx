import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex bg-white items-center py-4 px-4 sm:p-4 lg:p-8 w-full justify-between shadow-md">
        <Link to="/">
          <img
            className="w-12 h-8"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="logo"
          />
        </Link>
        <div className="md:hidden hover:bg-gray-100 rounded-md text-gray-600">
          <MenuIcon
            className="w-8 h-8 bg-gray-50 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="list-none space-y-8 md:space-x-8 lg:space-x-10 xl:space-y-16 mx-12 hidden md:inline">
          {navigation.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="hidden md:inline space-x-4">
          <Link
            to="/signin"
            className="font-medium text-indigo-600 hover:text-indigo-500 bg-indigo-100 px-6 py-2 shadow  rounded-md"
          >
            Sign In
          </Link>{" "}
        </div>
      </nav>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
