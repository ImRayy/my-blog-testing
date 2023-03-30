import { Icon } from "@iconify/react";
import React from "react";

interface PlatformProps {
  platforms: string[];
}

const Platform = ({ platforms }: PlatformProps) => {
  const list = [
    ["linux", "fontisto:linux"],
    ["windows", "mdi:microsoft-windows"],
    ["android", "uim:android"],
    ["macos", "carbon:mac-command"],
    ["ios", "cib:app-store-ios"],
    ["webapp", "mdi:internet"],
    ["docker", "mdi:docker"],
    ["cli", "ph:terminal-fill"],
    ["extension", "material-symbols:extension"],
    ["all", "icon-park-outline:check-correct"],
  ];
  return (
    <div className="flex gap-3 flex-wrap dark:text-white items-center text-sm">
      {platforms.map((item, index) => (
        <span
          key={index}
          className="flex items-center gap-1 capitalize text-sm font-medium"
        >
          <>
            <Icon
              icon={list.filter((i) => i[0] === item)[0][1]}
              className={`${item === "all" && "text-green-500"}`}
            />
            {item === "all" ? "All Platforms" : item}
          </>
        </span>
      ))}
    </div>
  );
};

export default Platform;
