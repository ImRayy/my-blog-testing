import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

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
