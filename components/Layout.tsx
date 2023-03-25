import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import NextNProgress from "nextjs-progressbar";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const [toggle, setToggle] = useState(false);

  // Sidebar toggle
  const toggleHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <Header sidebarToggle={toggleHandler} />
      <Sidebar toggle={toggle} sidebarToggle={setToggle} />
      <div className="flex min-h-screen select-none justify-center scroll-smooth bg-white px-4 pt-20 dark:bg-primary dark:text-gray-300">
        <NextNProgress showOnShallow={true} />
        {children}
      </div>
    </>
  );
}
