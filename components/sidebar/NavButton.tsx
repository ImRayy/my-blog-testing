import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
}
const NavButton = ({ children }: NavButtonProps) => {
  return (
    <div className="dark:hover:bg-zinc-700 bg-zinc-50 text-gray-700 dark:bg-zinc-800 px-4 hover:bg-zinc-200 text-sm font-medium duration-300 active:scale-95 dark:text-gray-300 transition-all flex items-center justify-start gap-4 py-2.5 rounded-md ">
      {children}
    </div>
  );
};

export default NavButton;
