import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center gap-1 pt-5 font-rubik text-xs tracking-wide text-gray-500 dark:text-gray-500">
      <div>
        Copyright © <span className="font-bold">Ray&apos;s Hold</span>
        <span className="mx-1.5 font-bold text-gray-400">I</span>2023
      </div>
      <div>
        Made By <span className="font-bold">RAY</span>
      </div>
    </div>
  );
};

export default Footer;
