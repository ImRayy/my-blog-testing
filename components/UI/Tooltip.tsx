import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  height?: 12 | 16 | 20 | 24;
}
const Tooltip = ({ children, text, height }: TooltipProps) => {
  const [show, setShow] = useState(false);
  const mouseEnterHandler = () => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <div className="group relative">
      <span
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={`absolute ${
          !height ? "h-8" : `h-${height}`
        } flex justify-center w-full`}
      >
        <p
          className={`${
            show && "group-hover:opacity-100"
          } opacity-0 duration-700 transition-opacity bottom-0 bg-gray-800 shadow-md px-2 py-1 text-sm text-white absolute font-medium rounded-md w-48 text-center`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
