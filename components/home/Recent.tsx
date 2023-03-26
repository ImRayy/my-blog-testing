import { extractDesc, wordCount } from "@/lib/helpers";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface RecentProps {
  title: string;
  date: number;
  slug: string;
  short_description: string;
  content: string;
}

const Recent = ({
  title,
  date,
  slug,
  short_description,
  content,
}: RecentProps) => {
  const [words, setWords] = useState(0);
  const [description, setDescription] = useState("");
  useEffect(() => {
    setWords(wordCount(content));
    setDescription(extractDesc(content));
  }, [content]);
  return (
    <Link
      href={`/post/${slug}`}
      className="relative mb-4 flex w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-md bg-gray-100 px-6 py-4 transition-transform duration-150 active:scale-95 dark:bg-accent dark:text-gray-300 md:cursor-default"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="line-clamp-3">
        <span className="md:hidden">{short_description}</span>
        <span className="hidden md:block">
          {description === undefined ? short_description : description}
        </span>
      </p>
      <div className="flex gap-2 pt-4 text-xs font-medium">
        <span>{date}</span>
        <span className="text-gray-400">I</span>
        <span>{Math.ceil(words / 150) + " " + "Min read time"}</span>
      </div>
    </Link>
  );
};

export default Recent;
