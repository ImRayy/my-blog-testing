import React from "react";

interface DividerProps {
  children: React.ReactNode;
}
const Divider = ({ children }: DividerProps) => {
  return (
    <div className="relative w-full py-4 text-center text-sm font-semibold lowercase tracking-wider">
      <span className="px-2">{children}</span>
      <div className="absolute bottom-5 flex w-full justify-between">
        <div className="h-1 w-1/4 border-t-2 border-gray-200 dark:border-gray-500"></div>
        <div className="h-1 w-1/4 border-t-2 border-gray-200 dark:border-gray-500"></div>
      </div>
    </div>
  );
};

export default Divider;
