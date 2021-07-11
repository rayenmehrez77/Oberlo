import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="lg:h-5xl mt-32 py-16 pl-4 lg:pl-8 gradient">
      <h1 className="text-white lg:text-4xl text-md font-bold max-w-xl md:text-3xl text-xl xs:text-2xl md:text-left text-center">
        Inbox support build for efficiency
      </h1>
      <p className="max-w-3xl mt-4 text-white md:text-left text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi est
        magnam repellat quidem repudiandae natus tenetur officia hic praesentium
        odio!
      </p>
      <div
        className="grid mt-8 sm:justify-center sm:items-center xl:grid-cols-4 lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1
       "
      >
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Features;
