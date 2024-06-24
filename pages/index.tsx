import Recent from "@/components/home/Recent";
import { fetchMarkdownData } from "@/lib/fetchMd";
import { InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps = async () => {
  const posts = await fetchMarkdownData();
  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="w-full md:w-232">
      <section className="flex flex-col gap-2 md:flex-row md:gap-28">
        <span className="font-ramettoOne text-2xl">
          Hello,<p className="mt-3">I&apos;m not Groot</p>
        </span>
        <span className="flex  flex-col justify-center font-medium">
          <p>I&apos;m a programmer and linux enthusiast</p>
          <p>also an anime lover, will you take a</p>
          <p>ride with me on a tech boat?</p>
        </span>
      </section>
      <h4 className="mb-6 mt-10 text-xl font-extrabold">Recent Posts</h4>
      {posts.map(({ frontmatter, slug, content }) => (
        <Recent
          key={slug}
          title={frontmatter.title}
          date={frontmatter.date}
          short_description={frontmatter.description}
          slug={slug}
          content={content}
        />
      ))}
    </div>
  );
};

export default Home;
