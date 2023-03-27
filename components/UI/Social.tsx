import React from "react";
import { BsGithub, BsTelegram, BsReddit } from "react-icons/bs";

const Social = () => {
  const className =
    "rounded-full  transition-all  duration-500 hover:scale-110 text-2xl sm:text-xl";
  return (
    <div className="flex h-10 items-center gap-5">
      <a
        href="https://github.com/ImRayy"
        target="_blank"
        className={`${className} `}
      >
        <BsGithub />
      </a>
      <a
        href="https://telegram.me/im_rayy"
        target="_black"
        className={`${className} text-blue-400`}
      >
        <BsTelegram />
      </a>
      <a
        href="https://https://www.reddit.com/user/_ImRay_"
        target="_blank"
        className={`${className} text-orange-600`}
      >
        <BsReddit />
      </a>
    </div>
  );
};

export default Social;
