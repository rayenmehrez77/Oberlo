import React from "react";

const companies = [
  { img: require("../images/asics.svg") },
  { img: require("../images/confused.svg") },
  { img: require("../images/beko.svg") },
  { img: require("../images/akamai.svg") },
  { img: require("../images/epiphone.svg") },
];

const Companies = () => {
  return (
    <div className="pt-6 bg-gray-100">
      <h1 className="uppercase font-medium text-gray-500 xl:mx-auto text-center">
        Trusted by over 5 very average small business{" "}
      </h1>
      <div className="flex mx-auto justify-center items-center mt-16 space-x-8 lg:space-x-32 flex-wrap">
        {companies.map((item) => {
          return (
            <div key={item.title} className="flex items-center  h-32 w-32">
              <img
                src={item.img.default}
                alt={item.title}
                className="h-full w-full  object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
