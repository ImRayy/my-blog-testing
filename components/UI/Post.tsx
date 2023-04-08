import { extractDesc, wordCount } from "@/lib/helpers";
import React, { useEffect, useState } from "react";
interface PostProps {
  title: string;
  date: number;
  headerImage: string;
  content: string;
}
const Post = ({ title, date, headerImage, content }: PostProps) => {
  const [words, setWords] = useState(0);
  const [description, setDescription] = useState(""); // only use this with local markdown fetch, eg. fetchMarkdownData not SSR one
  useEffect(() => {
    setWords(wordCount(content));
    setDescription(extractDesc(content));
  }, [content]);
  return (
    <div className="group relative flex w-full select-none flex-col overflow-hidden rounded-md  bg-transparent bg-white shadow-md transition duration-150  focus:outline-none active:scale-95  dark:bg-accent">
      <div>
        <img src={headerImage} alt={title} />
      </div>
      <div className="flex flex-col p-3">
        <span className="text-lg font-medium">{title}</span>
        <span className="font-sm line-clamp-3">{description}</span>
      </div>
      <div className="flex justify-end px-4 pb-4 pt-2 text-xs font-medium text-gray-500">
        <span className="flex items-center gap-2">{date}</span>
        <span className="px-3">I</span>
        <span className="flex items-center gap-2">
          {Math.ceil(words / 150)} Minutes
        </span>
      </div>
    </div>
  );
};

export default Post;
