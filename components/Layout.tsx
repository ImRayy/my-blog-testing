import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ray&apos;s Hold</title>
      </Head>
      <Header sidebarToggle={toggleHandler} />
      <Sidebar toggle={toggle} sidebarToggle={setToggle} />
      <div className="flex min-h-screen justify-center scroll-smooth bg-white px-4 pt-20 dark:bg-primary dark:text-gray-300">
        {children}
      </div>
    </>
  );
}
