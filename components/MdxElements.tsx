import dynamic from "next/dynamic";

export const MdxElements = {
  SwList: dynamic(() => import("./posts/SoftwareList")),
};
