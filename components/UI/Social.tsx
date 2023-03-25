import { BsGithub, BsTelegram, BsReddit } from "react-icons/bs";
import React from "react";

const Social = () => {
  return (
    <div className="mt-4 flex h-10 items-center gap-5">
      <a
        href="https://github.com/ImRayy"
        target="_blank"
        className="rounded-full  transition-all duration-500 hover:bg-black hover:p-2 hover:text-white"
      >
        <BsGithub size={20} />
      </a>
      <a
        href="https://telegram.me/im_rayy"
        target="_black"
        className="rounded-full  transition-all duration-500 hover:bg-black hover:p-2 hover:text-white"
      >
        <BsTelegram size={20} />
      </a>
      <a
        href="https://https://www.reddit.com/user/_ImRay_"
        target="_blank"
        className="rounded-full  transition-all duration-500 hover:bg-black hover:p-2 hover:text-white"
      >
        <BsReddit size={20} />
      </a>
    </div>
  );
};

export default Social;
