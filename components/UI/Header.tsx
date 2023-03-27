import ThemeOptions from "../header/ThemeOptions";
import { Icon } from "@iconify/react";
import React from "react";

interface HeaderProps {
  sidebarToggle: () => void;
}
const Header = ({ sidebarToggle }: HeaderProps) => {
  return (
    <div className="fixed select-none w-full flex justify-center bg-white px-4 py-3 text-gray-600 dark:bg-primary dark:text-gray-300">
      <div className="relative flex w-full items-center justify-end md:w-232">
        <span className="absolute left-0 flex transition">
          <ThemeOptions />
        </span>
        <span
          onClick={sidebarToggle}
          className="flex cursor-pointer items-center p-1 transition duration-150 active:scale-95 dark:hover:text-white"
        >
          <Icon icon="grommet-icons:apps-rounded" fontSize={22} />
        </span>
      </div>
    </div>
  );
};

export default Header;
