import React from "react";

interface TagProps {
  tags: string[];
}
const Tag = ({ tags }: TagProps) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="flex gap-1 items-center dark:bg-zinc-700 transition-transform text-sm py-1  px-4 rounded-full dark:text-white font-semibold bg-gray-200"
        >
          #&nbsp;{tag}
        </span>
      ))}
    </div>
  );
};

export default Tag;
