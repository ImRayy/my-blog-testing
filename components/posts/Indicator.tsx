import React from "react";

interface IndicatorProps {
  types: string[];
}
const Indicator = ({ types }: IndicatorProps) => {
  const colors = [
    ["foss", "FOSS", "dark:bg-green-600 bg-green-500"],
    ["oss", "Open-Source", "bg-purple-500"],
    ["css", "Closed-Source", "bg-red-600"],
    ["free", "Free", "bg-blue-600"],
    ["freem", "Freemium", "bg-yellow-500"],
  ];
  const typeHandler = (arg: string) => {
    return colors.filter((item) => item[0] === arg);
  };
  return (
    <div className="flex gap-2 items-center">
      {types.map((item, index) => (
        <div
          className="flex gap-2 text-xs dark:bg-zinc-800 px-2.5 rounded-full font-medium dark:text-gray-300 items-center h-6 bg-zinc-100"
          key={index}
        >
          <span
            className={`w-2 h-2 rounded-full flex gap-2 ${
              typeHandler(item)[0][2]
            }`}
          ></span>
          <span>{typeHandler(item)[0][1]}</span>
        </div>
      ))}
    </div>
  );
};

export default Indicator;
