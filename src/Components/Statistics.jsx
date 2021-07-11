import React from "react";
import workspace from "../images/workspace.jpg";

const statistics = [
  {
    number: "8K+",
    desc: "Companies uses laoreet alet lacus nibh integer quis.",
  },
  {
    number: "25K+",
    desc: "Companies uses laoreet alet lacus nibh integer quis.",
  },
  {
    number: "98%",
    desc: "Companies uses laoreet alet lacus nibh integer quis.",
  },
  {
    number: "12M+",
    desc: "Companies uses laoreet alet lacus nibh integer quis.",
  },
];

const Statistics = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-fixed max-h-2/4 lg:py-32 px-4 lg:px-8 py-16 "
      style={{ backgroundImage: `url(${workspace})` }}
    >
      <span className="uppercase font-semibold text-white">
        VALUABLE METRICS
      </span>
      <h1 className="text-white text-3xl lg:text-6xl md:max-w-xl lg:w-2xl font-extrabold py-6">
        Get actionable data that will help grow you business
      </h1>
      <p className="max-w-md font-semibold text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempore
        dicta nemo alias quidem placeat inventore sit eius eaque, quia quos modi
        aspernatur et in, est aut consequatur delectus odio!
      </p>
      <div className="max-w-lg grid grid-cols-2 gap-4">
        {statistics.map((item) => {
          return (
            <div>
              <h1 className="text-xl font-extrabold text-white">
                {item.number}
              </h1>
              <p className="max-w-sm font-medium text-white">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
