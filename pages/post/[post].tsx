import { MdxElements } from "@/components/MdxElements";
import { fetchMarkdownDataSSR } from "@/lib/fetchMd";
import { extractDesc, fetchJsonData, wordCount } from "@/lib/helpers";
import { frontmatter } from "@/types/Interface";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { FaPencilAlt, FaClock, FaCalendarDay } from "react-icons/fa";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// Dynamic import post components
const Tag = dynamic(() => import("@/components/posts/Tag"));
const Platform = dynamic(() => import("@/components/posts/Platform"));

interface PostParams {
  post: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchMarkdownDataSSR();
  const paths = posts.map((post) => ({
    params: {
      post: post.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: PostParams }) => {
  const posts = await fetchMarkdownDataSSR();
  const post = posts.find((post) => post.slug === params.post);
  // using type guard method to secure return data, without this runtime error might occur
  if (!post) {
    return {
      notFound: true,
    };
  }
  const jsonTheme = await fetchJsonData();
  const filterDiv = post.content.replace("<!--more-->", "");
  const source = await serialize(filterDiv, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: jsonTheme,
          },
        ],
      ],
    },
  });
  const words = await wordCount(post.content);
  return {
    props: {
      frontmatter: post.frontmatter,
      content: source,
      words,
    },
  };
};
const Post = ({
  frontmatter,
  content,
  words,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="select-none overflow-hidden pb-20 md:w-232">
      <header>
        <h1 className="select-none text-xl font-semibold uppercase">
          {frontmatter.title}
        </h1>
        <div className="flex select-none items-center gap-3 pb-4 pt-5 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1">
            <FaCalendarDay />
            {frontmatter.date}
          </span>
          <span className="flex items-center gap-1">
            <FaClock />
            {Math.ceil(words / 150)}&nbsp;minutes
          </span>
          <span className="flex items-center gap-1">
            <FaPencilAlt />
            {words}
          </span>
        </div>
      </header>
      <article className="markdown">
        <MDXRemote {...content} components={MdxElements} />
      </article>
    </div>
  );
};
export default Post;
