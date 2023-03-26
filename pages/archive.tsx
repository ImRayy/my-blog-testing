import { fetchMarkdownData } from "@/lib/fetchMd";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { IoMdArchive } from "react-icons/io";

export const getStaticProps = async () => {
  const posts = await fetchMarkdownData();
  return {
    props: {
      posts,
    },
  };
};
const archive = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full md:w-232">
      {/* Header */}
      <section className="flex w-full items-center gap-2 pb-4 font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
        <IoMdArchive size={18} />
        Archive
      </section>
      {/* Main */}
      <section>
        {posts.map(({ frontmatter, slug }) => (
          <div key={slug} className="flex flex-col gap-1">
            <span className="text-lg font-semibold">
              {String(frontmatter.date).split("/").slice(-1)}
            </span>
            <Link
              href={`/post/${slug}`}
              className="pb-4 text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-400"
            >{`${slug}.md`}</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default archive;
