import { fetchMarkdownData } from "@/lib/fetchMd";
import { InferGetStaticPropsType } from "next";
import Post from "@/components/UI/Post";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const posts = await fetchMarkdownData();
  return {
    props: {
      posts,
    },
  };
};

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    // <div className="flex min-h-screen justify-center px-4 pt-20 dark:bg-primary">
    <div className="flex w-full flex-col gap-4 md:w-232">
      {posts?.map(({ frontmatter, slug, content }) => (
        <Link href={`post/${slug}`} key={slug}>
          <Post
            headerImage={frontmatter.header_image}
            title={frontmatter.title}
            date={frontmatter.date}
            short_description={frontmatter.description}
            content={content}
          />
        </Link>
      ))}
    </div>
    // </div>
  );
};

export default blog;
