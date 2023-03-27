import NavButton from "../sidebar/NavButton";
import Divider from "./Divider";
import Footer from "./Footer";
import Social from "./Social";
import { config } from "@/config/config";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { SetStateAction } from "react";

interface SidebarProps {
  toggle: boolean;
  sidebarToggle: React.Dispatch<SetStateAction<boolean>>;
}
export default function Sidebar({ toggle, sidebarToggle }: SidebarProps) {
  return (
    <div className="select-none">
      <div
        className={`fixed transition dark:bg-transparent bg-opacity-40 bg-black duration-500 backdrop-blur-sm w-full right-0 h-full z-50  ${
          toggle ? "-translate-x-0 " : "translate-x-full"
        } `}
        onClick={() => sidebarToggle(false)}
      />

      <div
        className={`flex fixed transition-transform duration-500 z-50 w-80 h-full flex-col bg-white shadow-xl left-0 dark:bg-secondary dark:text-gray-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex-1 px-2.5 overflow-y-auto ">
          {/* main sidebar */}

          <div className="pt-4">
            <section className="py-2 w-full flex justify-center pt-4">
              <div className="flex flex-col gap-5 items-center">
                <img
                  src={config.sidebar.profile_image}
                  alt={config.sidebar.profile_image}
                  className="rounded-full w-20"
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
