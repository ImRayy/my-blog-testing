import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai";
import { extractDesc, wordCount } from "@/lib/helpers";
import React, { useEffect, useState } from "react";

interface PostProps {
  title: string;
  short_description: string;
  date: number;
  headerImage: string;
  content: string;
}
const Post = ({
  title,
  short_description,
  date,
  headerImage,
  content,
}: PostProps) => {
  const [words, setWords] = useState(0);
  const [description, setDescription] = useState("");
  useEffect(() => {
    setWords(wordCount(content));
    setDescription(extractDesc(content));
  }, [content]);
  return (
    <div className="group relative w-full select-none overflow-hidden rounded-xl bg-transparent transition duration-150 focus:outline-none  active:scale-95 md:grid md:grid-flow-col md:bg-gray-100 md:hover:bg-slate-100 md:dark:bg-accent md:dark:hover:bg-hover">
      <div className="overflow-hidden md:m-2 md:rounded-lg">
        <img
          src={headerImage}
          alt={headerImage}
          className="aspect-video transition-all group-hover:scale-110 group-hover:blur-md md:group-hover:scale-100 md:group-hover:blur-none"
        />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-black bg-opacity-20 px-4  text-white md:relative md:w-[30rem] md:items-start md:justify-start md:bg-transparent  md:pt-0 md:text-gray-700 md:dark:text-gray-300">
        <h4 className="text-lg font-bold uppercase md:pt-6 md:text-base">
          {title}
        </h4>
        <p className="mx-6 border-t-2 border-white pt-4 font-medium line-clamp-3 md:mx-0 md:border-gray-400">
          <span className="md:hidden">{short_description}</span>
          <span className="hidden md:block">
            {description === undefined ? short_description : description}
          </span>
        </p>
        <span className="absolute bottom-4 hidden gap-4 text-xs opacity-0 transition-opacity md:opacity-100 xmd:flex ">
          <span className="info-button">
            <AiFillCalendar size={14} className="hidden xs:block" />
            {date}
          </span>
          <span className="info-button">
            <AiFillClockCircle size={15} className="hidden xs:block" />
            {Math.ceil(words / 150)} Minutes
          </span>
        </span>
      </div>
    </div>
  );
};

export default Post;
