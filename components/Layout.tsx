import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({ children }: LayoutProps) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

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
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ type: "linier" }}
          className="flex min-h-screen justify-center scroll-smooth bg-white px-4 pt-20 dark:bg-primary dark:text-gray-300"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
