import Button from "./Button";
import Divider from "./Divider";
import Footer from "./Footer";
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
    <div
      className={`flex select-none fixed z-50 w-80 h-full flex-col bg-white shadow-xl dark:bg-secondary dark:text-gray-300 -translate-x-full transition-transform duration-500 ${
        toggle && "translate-x-0"
      }`}
    >
      <div className="relative flex-1 px-2.5 overflow-y-scroll ">
        {/* main sidebar */}

        <div className="pt-4">
          <div className="relative">
            <div className="h-36 overflow-hidden rounded-xl">
              <img
                src={config.sidebar.backdrop_image}
                alt={config.sidebar.backdrop_image}
              />
            </div>
            <span className="absolute bottom-10 flex w-full justify-center">
              <img
                src={config.sidebar.profile_image}
                alt={config.sidebar.profile_image}
                className="h-20 w-20 rounded-full"
              />
            </span>
            <div className="font-merriweather relative mb-6 h-20 text-center">
              <h4 className="absolute bottom-1 w-full text-xs font-bold uppercase tracking-widest">
                ray <span className="mx-1 text-gray-400">I</span> linux
                enthusiast
              </h4>
            </div>
          </div>
          <Divider>Navigation</Divider>
          <div className="flex flex-col gap-3">
            {config.sidebar.links.navigation.map((n, index) => (
              <Link
                href={n.link}
                key={index}
                onClick={() => sidebarToggle(false)}
              >
                <Button variant="secondary" className="relative">
                  <Icon
                    icon={n.icon}
                    className="absolute left-4 text-gray-600 dark:text-white"
                    fontSize={16}
                  />
                  {n.label}
                </Button>
              </Link>
            ))}
            <Divider>Interests</Divider>
            {config.sidebar.links.interests.map((i, index) => (
              <a href={i.link} key={index} target="_blank">
                <Button variant="secondary">
                  <Icon
                    icon={i.icon}
                    className="absolute left-4 text-gray-600 dark:text-white"
                    fontSize={16}
                  />
                  {i.label}
                </Button>
              </a>
            ))}
            <Divider>checkout my</Divider>
            {config.sidebar.links.others.map((o, index) => (
              <a href={o.link} target="_blank" key={index}>
                <Button variant="secondary">
                  <Icon
                    icon={o.icon}
                    className="absolute left-4 text-gray-600 dark:text-white"
                    fontSize={16}
                  />
                  {o.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
