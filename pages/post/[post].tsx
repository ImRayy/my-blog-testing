import { GetStaticPaths, InferGetStaticPropsType, GetStaticProps } from "next";
import { FaPencilAlt, FaClock, FaCalendarDay } from "react-icons/fa";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import { fetchMarkdownData } from "@/lib/fetchMd";
import { MDXRemote } from "next-mdx-remote";
import { wordCount } from "@/lib/helpers";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
interface PostParams {
  post: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchMarkdownData();
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
  const posts = await fetchMarkdownData();
  const post = posts.find((post) => post.slug === params.post);

  // using type guard method to secure return data, without this runtime error might occur
  if (!post) {
    return {
      notFound: true,
    };
  }
  const filterDiv = post.content.replace("<!--more-->", "");
  const source = await serialize(filterDiv, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
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
    <div className="overflow-hidden pb-20 md:w-232">
      <header>
        <h1 className="text-xl font-semibold uppercase">{frontmatter.title}</h1>
        <div className="flex items-center gap-3 pt-5 pb-4 text-sm font-medium text-gray-500">
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
        <MDXRemote {...content} components={{}} />
      </article>
    </div>
  );
};
export default Post;
