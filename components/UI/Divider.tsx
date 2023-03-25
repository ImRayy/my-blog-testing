import React from "react";

interface DividerProps {
  children: React.ReactNode;
}
const Divider = ({ children }: DividerProps) => {
  return (
    <div className="font-merriweather relative w-full py-4 text-center text-xs font-bold uppercase  tracking-wider">
      {children}
      <div className="absolute bottom-5 flex w-full justify-between">
        <div className="h-1 w-20 border-t-2 border-gray-200 dark:border-gray-500"></div>
        <div className="h-1 w-20 border-t-2 border-gray-200 dark:border-gray-500"></div>
      </div>
    </div>
  );
};

export default Divider;
