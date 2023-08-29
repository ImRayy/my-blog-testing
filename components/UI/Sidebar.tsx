import NavButton from "../sidebar/NavButton";
import Divider from "./Divider";
import Footer from "./Footer";
import Social from "./Social";
import { config } from "@/config/config";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
  toggle: boolean;
  sidebarToggle: React.Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({ toggle, sidebarToggle }: SidebarProps) {
  return (
    <div className="select-none">
      <AnimatePresence mode="wait">
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 h-full w-full bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => sidebarToggle(false)}
          />
        )}
      </AnimatePresence>

      <div
        className={`fixed left-0 z-50 flex h-full w-80 flex-col bg-white shadow-xl transition-transform duration-500 dark:bg-secondary dark:text-gray-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex-1 overflow-y-auto px-2.5 ">
          {/* main sidebar */}

          <div className="pt-1">
            <section className="flex w-full justify-center py-2 pt-4">
              <div className="flex flex-col items-center gap-5">
                <img
                  src={config.sidebar.profile_image}
                  alt={config.sidebar.profile_image}
                  className="w-20 rounded-full"
                />
                <span className="text-xs font-bold tracking-widest">
                  RAY <span className="px-1">I</span> LINUX ENTHUSIAST
                </span>
                <Social />
              </div>
            </section>
            <section className="flex flex-col gap-3 pt-4">
              <Divider>Navigation</Divider>
              {config.sidebar.links.navigation.map((n, index) => (
                <Link
                  href={n.link}
                  key={index}
                  onClick={() => sidebarToggle(false)}
                >
                  <NavButton>
                    <Icon icon={n.icon} fontSize={16} />
                    {n.label}
                  </NavButton>
                </Link>
              ))}
              <Divider>Interests</Divider>
              {config.sidebar.links.interests.map((i, index) => (
                <a href={i.link} key={index} target="_blank">
                  <NavButton>
                    <Icon icon={i.icon} fontSize={16} />
                    {i.label}
                  </NavButton>
                </a>
              ))}
              <Divider>checkout my</Divider>
              {config.sidebar.links.others.map((o, index) => (
                <a href={o.link} target="_blank" key={index}>
                  <NavButton>
                    <Icon icon={o.icon} fontSize={16} />
                    {o.label}
                  </NavButton>
                </a>
              ))}
            </section>
          </div>
          <div className="my-4 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
