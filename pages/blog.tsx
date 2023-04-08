import { fetchMarkdownDataSSR } from "@/lib/fetchMd";
import { InferGetStaticPropsType } from "next";
import Post from "@/components/UI/Post";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/lib/helpers";
export const getStaticProps = async () => {
  const posts = await fetchMarkdownDataSSR();
  return {
    props: {
      posts,
    },
  };
};

const blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    // <div className="flex min-h-screen justify-center px-4 pt-20 dark:bg-primary">
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:w-232">
      {posts?.map(({ frontmatter, slug, content }) => (
        <Link href={`post/${slug}`} key={slug}>
          <Post
            headerImage={urlFor(frontmatter.header_image)
              .width(1600)
              .height(900)
              .url()}
            title={frontmatter.title}
            date={frontmatter.date}
            content={content}
          />
        </Link>
      ))}
    </div>
    // </div>
  );
};

export default blog;
