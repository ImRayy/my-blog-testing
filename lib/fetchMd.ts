import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { frontmatter } from "@/types/Interface";

// Current mdx file path
const path = join(process.cwd(), "content/posts");

// Function to read all mdx files in given path and return slug, frontmatter and content
export async function fetchMarkdownData() {
  const files = readdirSync(path);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = readFileSync(`${path}/${fileName}`);
    const { data: frontmatter, content: content } = matter(readFile);
    return {
      slug,
      frontmatter,
      content,
    };
  });

  return posts;
}

// // This function is for fetching data from sanity.io, fetchMarkdownData, and fetchMarkdownDataSSR returns same data so it's easy to switch between them
// export async function fetchMarkdownDataSSR(query?: string) {
//   const blog: frontmatter[] = await ConfiguredSanityClient.fetch(
//     query ? query : `*[_type == 'blog']`
//   );
//   const posts = blog.map((post) => {
//     const slug = post.slug.current;
//     const frontmatter = {
//       title: post.title,
//       description: post.description,
//       header_image: post.header_image,
//       date: post.date,
//       draft: post.draft,
//     };
//     const content = post.content;
//     return {
//       slug,
//       frontmatter,
//       content,
//     };
//   });
//   return posts;
// }
